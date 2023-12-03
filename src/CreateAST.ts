import { readFileSync } from "fs";
import { AST } from "./Types/AST";
import path from "path";
import { globSync } from "glob";
import { CharStream, CommonTokenStream, ParseTreeWalker } from "antlr4";
import YarnSpinnerLexer from "./YarnSpinnerANTLR4/YarnSpinnerLexer";
import YarnSpinnerParser from "./YarnSpinnerANTLR4/YarnSpinnerParser";
import { DeclarationListener } from "./Listeners/DeclarationListener";
import { FunctionListener } from "./Listeners/FunctionListener";
import ASTVisitor from "./Visitors/ASTVisitor";
import ParseYSLS from "./ParseYSLS";
import BuiltInFunc from "./BuiltInFunctionsAndCommands.ysls.json";

export function CreateAST(yarnproj: string, options: any) {
  // Read the yarn project file
  const data = readFileSync(yarnproj, "utf8");
  const yarnProject = JSON.parse(data);

  // Get Path Name
  const pathName = path.dirname(yarnproj);

  // Get Declarations and Functions from YSLS file

  // Get Built In Functions and Commands
  const scope: AST.Scope = {};
  const BuiltInFunctionsScope = ParseYSLS(BuiltInFunc);
  Object.assign(scope, BuiltInFunctionsScope);

  // Get Definitions from YSLS file
  if (yarnProject.definitions) {
    const yslsData = readFileSync(
      pathName + "/" + yarnProject.definitions,
      "utf8"
    );
    const functionScope = ParseYSLS(JSON.parse(yslsData));
    Object.assign(scope, functionScope);
  }

  // Get Defined Yarn Files
  let yarnFilesPath = globSync(
    yarnProject.sourceFiles.map((e) => pathName + "/" + e)
  );
  if (yarnProject.excludeFiles) {
    const excludeFilesPath = globSync(
      yarnProject.excludeFiles.map((e) => pathName + "/" + e)
    );
    yarnFilesPath = yarnFilesPath.filter((e) => !excludeFilesPath.includes(e));
  }
  const yarnFilesRaw = yarnFilesPath.map((e) => {
    const file = readFileSync(e, "utf8");
    return {
      fileName: e,
      file,
    };
  });

  // Create parse tree for all yarn files
  const yarnTrees = yarnFilesRaw.map((e) => {
    try {
      const chars = new CharStream(e.file);
      const lexer = new YarnSpinnerLexer(chars);
      const tokens = new CommonTokenStream(lexer);
      const parser = new YarnSpinnerParser(tokens);
      const tree = parser.dialogue();
      return {
        fileName: e.fileName,
        tree,
      };
    } catch (err) {
      throw new Error(`Error parsing ${e.fileName}: ${err}`);
    }
  });

  // Get Declarations and Functions from all yarn files
  yarnTrees.forEach((tree) => {
    try {
      const walker = new ParseTreeWalker();

      const declarationsListener = new DeclarationListener();
      walker.walk(declarationsListener, tree.tree);
      Object.assign(scope, declarationsListener.declarations);

      const functionListener = new FunctionListener(scope);
      walker.walk(functionListener, tree.tree);
      Object.assign(scope, functionListener.functions);
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(`!!! Error parsing ${tree.fileName}: ${err.message}`);
      }
    }
  });

  // Parse yarn to AST
  const yarnASTs = yarnTrees.map((tree) => {
    try {
      const visitor = new ASTVisitor(scope);
      const ast = visitor.visitDialogue(tree.tree);
      return ast;
    } catch (err) {
      throw new Error(`!!! Error parsing ${tree.fileName}: ${err}`);
    }
  });

  const combinedAST = yarnASTs.reduce(
    (acc: AST.CombinedYarnFile, e) => {
      acc.nodes.push(...e.nodes);
      return acc;
    },
    { type: "CombinedYarnFile", nodes: [], initialValues: {} }
  );

  // Check for duplicate node names
  if (
    combinedAST.nodes.some(
      (item) => combinedAST.nodes.filter((e) => e.name === item.name).length > 1
    )
  )
    throw new Error(
      "!!! Error: Duplicate node names: " +
        combinedAST.nodes.map((e) => e.name).join(", ")
    );

  // Create a initial values scope that only include non-function
  // and non-undefined variables
  const initialValues: AST.Scope = {};
  for (const key in scope) {
    const variable = scope[key];
    // Check if variable is string, number, or boolean
    if (
      variable.type === AST.Type.String ||
      variable.type === AST.Type.Number ||
      variable.type === AST.Type.Boolean
    ) {
      initialValues[key] = variable;
    }
  }
  combinedAST.initialValues = initialValues;
  return combinedAST;
}

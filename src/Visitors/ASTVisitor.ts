import { parse } from "expression-eval";
import { AST } from "../Types/AST";
import { Util } from "../Util/Util";
import {
  Command_statementContext,
  Declare_statementContext,
  DialogueContext,
  Else_clauseContext,
  Else_if_clauseContext,
  If_clauseContext,
  If_statementContext,
  JumpToNodeNameContext,
  Line_statementContext,
  NodeContext,
  Set_statementContext,
  Shortcut_optionContext,
  Shortcut_option_statementContext,
} from "../YarnSpinnerANTLR4/YarnSpinnerParser";
import YarnSpinnerParserVisitor from "../YarnSpinnerANTLR4/YarnSpinnerParserVisitor";
import Evaluate from "../Util/Evaluate";
export default class ASTVisitor extends YarnSpinnerParserVisitor<AST.AnyNode> {
  readonly scope: AST.Scope;
  constructor(scope: AST.Scope) {
    super();
    this.scope = scope;
  }

  visitDialogue: (ctx: DialogueContext) => AST.YarnFile = (ctx) => {
    // Create Yarn File
    const yarnFile: AST.YarnFile = {
      type: "YarnFile",
      nodes: ctx.node_list().map((e) => this.visitNode(e)),
    };
    return yarnFile;
  };
  visitNode: (ctx: NodeContext) => AST.YarnNode = (ctx) => {
    // Get Headers
    const headers = ctx.header_list().map((e) => Util.GetHeader(e));

    // Filter for title tag
    const titleArr = headers.filter((e) => e.key === "title");
    if (titleArr.length === 0) throw new Error("Node must have a title");
    if (titleArr.length > 1)
      throw new Error(
        "Duplicate nodes titles: " + titleArr.map((e) => e.value).join(", ")
      );

    // Create Yarn Node
    const yarnNode: AST.YarnNode = {
      type: "YarnNode",
      name: titleArr[0].value,
      headers: ctx.header_list().map((e) => Util.GetHeader(e)),
      sub_nodes:
        ctx
          .body()
          .children?.map((e) => this.visit(e)[0] as AST.AnyNode)
          .filter((e) => e.type !== "EmptyNode") || [],
    };
    return yarnNode;
  };
  visitLine_statement?: (ctx: Line_statementContext) => AST.TextNode = (
    ctx
  ) => {
    // Get Text and check for substitutions
    const rawText = ctx.line_formatted_text().getText().trimEnd();
    const processedString = Util.ProcessPlaceholderString(rawText, this.scope);

    // Create Text Node
    const textNode: AST.TextNode = {
      type: "TextNode",
      placeholder: processedString.replacements,
      text: processedString.updatedString,
      hash_tags: ctx.hashtag_list().map((e) => e._text.text),
    };

    // Check for condition
    const condition = ctx.line_condition()?.expression()?.getText();
    if (condition) {
      const expression = parse(condition);
      const value = Evaluate(expression, this.scope);
      if (typeof value !== "boolean")
        throw new Error("Line statement must be a boolean");
      textNode.condition = expression;
    }
    return textNode;
  };
  visitShortcut_option_statement?: (
    ctx: Shortcut_option_statementContext
  ) => AST.OptionListNode = (ctx) => {
    // Create Options List Node
    const optionListNode: AST.OptionListNode = {
      type: "OptionListNode",
      options: ctx.shortcut_option_list().map((e) => this.visit(e)),
    };
    return optionListNode;
  };
  visitShortcut_option?: (ctx: Shortcut_optionContext) => AST.OptionNode = (
    ctx
  ) => {
    // Check for condition
    const condition = ctx
      .line_statement()
      ?.line_condition()
      ?.expression()
      ?.getText();

    // Get Text and check for substitutions
    const rawText = ctx.line_statement().line_formatted_text().getText().trim();
    const processedString = Util.ProcessPlaceholderString(rawText, this.scope);

    // Create Option Node
    const optionNode: AST.OptionNode = {
      type: "OptionNode",
      placeholder: processedString.replacements,
      text: processedString.updatedString,
      sub_nodes: ctx.statement_list().map((e) => this.visit(e)[0]),
      hash_tags: ctx
        .line_statement()
        .hashtag_list()
        .map((e) => e.getText()),
    };

    // Check if condition is valid
    if (condition) {
      const expression = parse(condition);
      const value = Evaluate(expression, this.scope);
      if (typeof value !== "boolean")
        throw new Error("If statement must be a boolean");
      optionNode.condition = expression;
    }
    return optionNode;
  };
  visitDeclare_statement?: (ctx: Declare_statementContext) => AST.EmptyNode = (
    ctx
  ) => {
    // Declarations are processed intially, so no need to add to AST
    // Return Empty Node instead
    const EmptyNode: AST.EmptyNode = {
      type: "EmptyNode",
    };
    return EmptyNode;
  };
  visitSet_statement?: (ctx: Set_statementContext) => AST.SetNode = (ctx) => {
    // Check if expression is valid
    const expression = parse(ctx.expression().getText());
    Evaluate(expression, this.scope);

    // Create Set Node
    const SetNode: AST.SetNode = {
      type: "SetNode",
      variable: ctx.variable().VAR_ID().getText(),
      expression,
    };
    return SetNode;
  };
  visitIf_statement?: (ctx: If_statementContext) => AST.ConditionalNode = (
    ctx
  ) => {
    // Create Conditional Node
    const optionListNode: AST.ConditionalNode = {
      type: "ConditionalNode",
      if_statement: this.visit(ctx.if_clause()),
      else_if_statements: ctx.else_if_clause_list().map((e) => this.visit(e)),
      else_statement: ctx
        .else_clause()
        .statement_list()
        .map((e) => this.visit(e)),
    };
    return optionListNode;
  };
  visitIf_clause?: (ctx: If_clauseContext) => AST.AnyNode = (ctx) => {
    const expression = parse(ctx.expression().getText());
    const value = Evaluate(expression, this.scope);
    if (typeof value !== "boolean")
      throw new Error("If statement must be a boolean");
    const ifNode: AST.IfNode = {
      type: "IfNode",
      condition: expression,
      sub_nodes: ctx.statement_list().map((e) => this.visit(e)[0]),
    };
    return ifNode;
  };
  visitElse_if_clause?: (ctx: Else_if_clauseContext) => AST.IfNode = (ctx) => {
    // Check if Expression is valid
    const expression = parse(ctx.expression().getText());
    const value = Evaluate(expression, this.scope);
    if (typeof value !== "boolean")
      throw new Error("If statement must be a boolean");

    // Create If Node
    const ifNode: AST.IfNode = {
      type: "IfNode",
      condition: expression,
      sub_nodes: ctx.statement_list().map((e) => this.visit(e)[0]),
    };
    return ifNode;
  };
  visitElse_clause?: (ctx: Else_clauseContext) => AST.EmptyNode = (ctx) => {
    // We access the else clause in a different way,
    // So we return EmptyNode instead
    const emptyNode: AST.EmptyNode = {
      type: "EmptyNode",
    };
    return emptyNode;
  };
  visitJumpToNodeName?: (ctx: JumpToNodeNameContext) => AST.JumpNode = (
    ctx
  ) => {
    // Get Text and check for substitutions
    const rawText = ctx._destination.text;
    const processedString = Util.ProcessPlaceholderString(rawText, this.scope);

    // Create Jump Node
    const jumpNode: AST.JumpNode = {
      type: "JumpNode",
      placeholder: processedString.replacements,
      text: processedString.updatedString,
    };
    return jumpNode;
  };
  visitCommand_statement?: (ctx: Command_statementContext) => AST.GenericNode =
    (ctx) => {
      // Get Text and check for substitutions
      // Check if substitude text is valid
      const rawString = ctx.command_formatted_text().getText();
      const processedString = Util.ProcessPlaceholderString(
        rawString,
        this.scope
      );
      const commandString = Util.UpdatePlaceholderString(rawString, this.scope);
      const commandItems = commandString.split(" ");
      const commandName = commandItems.shift() || "";
      const commandFunction = this.scope[
        commandName as string
      ] as AST.FunctionVariable;
      if (!commandFunction)
        throw new Error(`Command ${commandName} not found}`);
      const parameters: (string | boolean | number)[] = [];
      // Check if the parameters of the function in scope matches the parameters declared in script
      commandFunction.parameters.forEach((e, i) => {
        const param = commandItems![i];
        if (!param)
          throw new Error(
            "Invalid number of parameters for Function: " + commandName
          );
        if (e === AST.Type.Number && Util.NumberRegex.test(param))
          parameters.push(parseFloat(param));
        else if (e === AST.Type.Boolean && Util.BoolRegex.test(param))
          parameters.push(param === "true");
        else if (e === AST.Type.String) parameters.push(param);
        else
          throw new Error(
            "Invalid parameter type for Function: " + commandName
          );
      });
      // Check if there are more parameters in the script than in the function
      if (commandItems.length > commandFunction.parameters.length)
        throw new Error(
          "Invalid number of parameters for Command: " + commandName
        );

      // Create Generic Node
      const genericCommand: AST.GenericNode = {
        type: "Generic",
        placeholder: processedString.replacements,
        command: processedString.updatedString,
      };
      return genericCommand;
    };
}

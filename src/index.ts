import { Command } from "commander";
import { writeFileSync } from "fs";
import { CreateAST } from "./CreateAST";

const program = new Command();

export function Main(filename: string, options: any) {
  // Create AST
  const ast = CreateAST(filename, options);

  // If the user wants to output the AST
  if (options.ast) {
    writeFileSync(
      options.output || "output.json",
      JSON.stringify(ast, null, 2)
    );
    return;
  }
}
program
  .name("YarnCompilerJS")
  .description("Compile Yarn Projects")
  .version("1.0.0")
  .argument("<filename>", "The Yarn Project file or Yarn File")
  .option("-o, --output <output>", "The output file")
  .option("-t, --ast", "Output the AST")
  .action(Main)
  .parse(process.argv);

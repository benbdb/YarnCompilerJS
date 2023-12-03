import { AST } from "../Types/AST";
import { YarnSpinner } from "../Types/YarnSpinner";
import { Declare_statementContext } from "../YarnSpinnerANTLR4/YarnSpinnerParser";
import YarnSpinnerParserListener from "../YarnSpinnerANTLR4/YarnSpinnerParserListener";

// Regex for valid numbers
const numberRegex = /^-?(?:\d+(?:\.\d*)?|\.\d+)$/;

export class DeclarationListener extends YarnSpinnerParserListener {
  declarations: AST.Scope = {};
  constructor() {
    super();
  }

  enterDeclare_statement?: (ctx: Declare_statementContext) => void = (ctx) => {
    const name = ctx.variable().VAR_ID().getText();
    let value: string | boolean | number = ctx.value().getText();
    let type = ctx._type_?.text;

    // If not expicitly defined, try to infer type
    if (!type) {
      if (value.startsWith('"') && value.endsWith('"')) {
        this.declarations[name] = {
          name,
          type: AST.Type.String,
          value: value.slice(1, -1),
        };
      } else if (value === "true" || value === "false") {
        this.declarations[name] = {
          name,
          type: AST.Type.Boolean,
          value: value === "true",
        };
      } else if (numberRegex.test(value)) {
        this.declarations[name] = {
          name,
          type: AST.Type.Number,
          value: parseFloat(value),
        };
      }
    }
    // If explicitly defined, check if it matches the value
    else {
      if (type === "String") {
        if (!value.startsWith('"') || !value.endsWith('"'))
          throw new Error(
            "Invalid value for String: " + value + " for variable:  " + name
          );
        this.declarations[name] = {
          name,
          type: AST.Type.String,
          value: value.slice(1, -1),
        };
      } else if (type === "Bool") {
        if (value !== "true" && value !== "false")
          throw new Error(
            "Invalid value for Boolean: " + value + " for variable:  " + name
          );
        this.declarations[name] = {
          name,
          type: AST.Type.Boolean,
          value: value === "true",
        };
      } else if (type === "Number") {
        if (!numberRegex.test(value))
          throw new Error(
            "Invalid value for Number: " + value + " for variable:  " + name
          );
        this.declarations[name] = {
          name,
          type: AST.Type.Number,
          value: parseFloat(value),
        };
      } else {
        throw new Error("Invalid type: " + type + " for variable: " + name);
      }
    }
  };
}

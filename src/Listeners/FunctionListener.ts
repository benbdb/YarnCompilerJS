import { AST } from "../Types/AST";
import { YarnSpinner } from "../Types/YarnSpinner";
import { Util } from "../Util/Util";
import { Function_callContext } from "../YarnSpinnerANTLR4/YarnSpinnerParser";
import YarnSpinnerParserListener from "../YarnSpinnerANTLR4/YarnSpinnerParserListener";

export class FunctionListener extends YarnSpinnerParserListener {
  functions: AST.Scope = {};
  constructor(scope) {
    super();
    this.functions = scope;
  }
  enterFunction_call?: ((ctx: Function_callContext) => void) | undefined = (
    ctx
  ) => {
    const name = ctx.FUNC_ID().getText();
    const rawParameters = ctx.expression_list().map((e) => {
      return e.getText();
    });

    // Check the function exists in scope
    const func = this.functions[name] as AST.FunctionVariable;
    if (!func) throw new Error("Function not found: " + name);

    // Check the function has the correct number and type of parameters
    func.parameters.forEach((e, i) => {
      const param = rawParameters[i];
      if (!param)
        throw new Error("Invalid number of parameters for Function: " + name);
      if (e === AST.Type.Number && Util.NumberRegex.test(param)) return;
      else if (e === AST.Type.Boolean && Util.BoolRegex.test(param)) return;
      else if (e === AST.Type.String) return;
      else throw new Error("Invalid parameter type for Function: " + name);
    });

    // Check if there are more parameters in the script than in the function
    if (rawParameters.length > func.parameters.length)
      throw new Error("Invalid number of parameters for Function: " + name);
  };
}

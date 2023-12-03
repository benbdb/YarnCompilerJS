import { AST } from "./Types/AST";

function ParseYSLS(data): AST.Scope {
  let scope: AST.Scope = {};

  // Get Functions and Commands
  const functions = data.Functions || [];
  if (data.Commands) functions.push(...data.Commands);
  for (const func of functions) {
    const name = func.YarnName;
    const parameters: AST.Type[] = [];

    // Get Parameters
    if (func.Parameters) {
      for (const param of func.Parameters) {
        if (param.Type === "String" || "Number" || "Boolean")
          parameters.push(param.Type);
        else throw new Error("Invalid parameter type: " + param.Type);
      }
    }

    // Get Return Type
    let returnType = AST.Type.Undefined;
    if (func.ReturnType) {
      if (func.ReturnType === "String" || "Number" || "Boolean" || "Any")
        returnType = func.ReturnType === "Any" ? "Undefined" : func.ReturnType;
      else throw new Error("Invalid return type: " + func.ReturnType);
    }
    switch (returnType) {
      case AST.Type.String:
        scope[name] = {
          type: AST.Type.Function,
          name,
          parameters,
          returnType,
          value: "",
        };
        break;
      case AST.Type.Number:
        scope[name] = {
          type: AST.Type.Function,
          name,
          parameters,
          returnType,
          value: 1,
        };
        break;
      case AST.Type.Boolean:
        scope[name] = {
          type: AST.Type.Function,
          name,
          parameters,
          returnType,
          value: true,
        };
        break;
      case AST.Type.Undefined:
        scope[name] = {
          type: AST.Type.Function,
          name,
          parameters,
          returnType,
          value: undefined,
        };
        break;
    }
  }
  return scope;
}

export default ParseYSLS;

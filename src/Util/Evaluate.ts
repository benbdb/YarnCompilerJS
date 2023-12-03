import jsep = require("jsep");
import { YarnSpinner } from "../Types/YarnSpinner";
import { AST } from "../Types/AST";
function Evaluate(ast: jsep.Expression, scope: AST.Scope) {
  const node = ast as AnyExpression;

  switch (node.type) {
    case "BinaryExpression":
      const left = Evaluate(node.left, scope);
      const right = Evaluate(node.right, scope);
      if (typeof left !== typeof right)
        throw new Error("Expression Type Mismatch, Expression: " + node);
      switch (typeof left) {
        case "number":
          return numBinops[node.operator](left, right);
        case "string":
          return strBinops[node.operator](left, right);
        case "boolean":
          return boolBinops[node.operator](left, right);
      }
      break;
    case "UnaryExpression":
      const val = Evaluate(node.argument, scope);
      switch (typeof val) {
        case "number":
          return numUnops[node.operator](val);
        case "boolean":
          return boolUnops[node.operator](val);
        default:
          throw new Error("Invalid type for unary operator: " + node.operator);
      }
      break;
    case "Literal":
      return node.value;
      break;
    case "Identifier":
      return scope[node.name].value;
      break;
    case "CallExpression":
      return Evaluate(node.callee, scope);
    default:
      throw new Error("Invalid Expression");
  }
}

const numBinops: {
  [key: string]: (a: number, b: number) => number | boolean;
} = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
  "%": (a, b) => a % b,
  "==": (a, b) => a === b,
  "!=": (a, b) => a !== b,
  "<": (a, b) => a < b,
  "<=": (a, b) => a <= b,
  ">": (a, b) => a > b,
  ">=": (a, b) => a >= b,
  "||": (a, b) => a || b,
  "&&": (a, b) => a && b,
};

const strBinops: {
  [key: string]: (a: string, b: string) => string | boolean;
} = {
  "+": (a, b) => a + b,
  "==": (a, b) => a === b,
  "!=": (a, b) => a !== b,
};

const boolBinops: {
  [key: string]: (a: boolean, b: boolean) => boolean;
} = {
  "==": (a, b) => a === b,
  "!=": (a, b) => a !== b,
  "||": (a, b) => a || b,
  "&&": (a, b) => a && b,
  "^": (a, b) => a !== b,
};

const numUnops: {
  [key: string]: (a: number) => number;
} = {
  "-": (a) => -a,
};

const boolUnops: {
  [key: string]: (a: boolean) => boolean;
} = {
  "!": (a) => !a,
};

export type AnyExpression =
  | jsep.BinaryExpression
  | jsep.MemberExpression
  | jsep.CallExpression
  | jsep.ConditionalExpression
  | jsep.Identifier
  | jsep.Literal
  | jsep.LogicalExpression
  | jsep.ThisExpression
  | jsep.UnaryExpression;

export default Evaluate;

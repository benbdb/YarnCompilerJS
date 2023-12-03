import { parse } from "expression-eval";

export namespace AST {
  export type AnyNode = YarnFile | YarnNode | SubNodes;
  export type SubNodes =
    | TextNode
    | OptionListNode
    | OptionNode
    | SetNode
    | ConditionalNode
    | IfNode
    | JumpNode
    | StopNode
    | EmptyNode
    | GenericNode;
  export type CombinedYarnFile = {
    type: "CombinedYarnFile";
    nodes: YarnNode[];
    initialValues: AST.Scope;
  };
  export type YarnFile = {
    type: "YarnFile";
    nodes: YarnNode[];
  };
  export type YarnNode = {
    type: "YarnNode";
    name: string;
    headers: Header[];
    sub_nodes: AnyNode[];
  };
  export type TextNode = {
    placeholder: parse.Expression[];
    type: "TextNode";
    text: string;
    hash_tags: string[];
    condition?: parse.Expression;
  };
  export type OptionListNode = {
    type: "OptionListNode";
    options: AnyNode[];
  };
  export type OptionNode = {
    placeholder: parse.Expression[];
    type: "OptionNode";
    text: string;
    sub_nodes: AnyNode[];
    condition?: parse.Expression;
    hash_tags: string[];
  };
  export type SetNode = {
    type: "SetNode";
    variable: string;
    expression: parse.Expression;
  };
  export type ConditionalNode = {
    type: "ConditionalNode";
    if_statement: AnyNode;
    else_if_statements?: AnyNode[];
    else_statement?: AnyNode[];
  };
  export type IfNode = {
    type: "IfNode";
    condition: parse.Expression;
    sub_nodes: AnyNode[];
  };
  export type JumpNode = {
    placeholder: parse.Expression[];
    type: "JumpNode";
    text: string;
  };
  export type StopNode = {
    type: "StopNode";
  };
  export type GenericNode = {
    placeholder: parse.Expression[];
    type: "Generic";
    command: string;
  };
  export type EmptyNode = {
    type: "EmptyNode";
  };
  export type Header = {
    key: string;
    value: string;
  };
  export type Scope = {
    [key: string]: Variable;
  };

  export enum Type {
    String = "String",
    Number = "Number",
    Boolean = "Bool",
    Undefined = "Undefined",
    Function = "Function",
  }

  export type Variable =
    | StringVariable
    | NumberVariable
    | BooleanVariable
    | UndefinedVariable
    | StringFunctionVariable
    | NumberFunctionVariable
    | BooleanFunctionVariable
    | UndefinedFunctionVariable;
  export type FunctionVariable =
    | StringFunctionVariable
    | NumberFunctionVariable
    | BooleanFunctionVariable
    | UndefinedFunctionVariable;

  export type StringVariable = {
    name: string;
    type: Type.String;
    value: string;
  };

  export type NumberVariable = {
    name: string;
    type: Type.Number;
    value: number;
  };

  export type BooleanVariable = {
    name: string;
    type: Type.Boolean;
    value: boolean;
  };

  export type UndefinedVariable = {
    name: string;
    type: Type.Undefined;
    value: undefined;
  };

  export type StringFunctionVariable = {
    name: string;
    type: Type.Function;
    parameters: Type[];
    returnType: Type.String;
    value: "";
  };

  export type NumberFunctionVariable = {
    name: string;
    type: Type.Function;
    parameters: Type[];
    returnType: Type.Number;
    value: 1;
  };

  export type BooleanFunctionVariable = {
    name: string;
    type: Type.Function;
    parameters: Type[];
    returnType: Type.Boolean;
    value: true;
  };

  export type UndefinedFunctionVariable = {
    name: string;
    type: Type.Function;
    parameters: Type[];
    returnType: Type.Undefined;
    value: undefined;
  };
}

// Grabbed from https://github.com/YarnSpinnerTool/YarnSpinner-TypeScript/blob/main/src/yarn_spinner.ts

/**
 MIT License

Copyright (c) 2022 Tim Nugent

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

export namespace YarnSpinner {
  /**
   * A complete Yarn program.
   *
   * @generated from protobuf message Yarn.Program
   */
  export interface Program {
    /**
     * The name of the program.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * The collection of nodes in this program.
     *
     * @generated from protobuf field: map<string, Yarn.Node> nodes = 2;
     */
    nodes: {
      [key: string]: Node;
    };
    /**
     * The collection of initial values for variables; if a PUSH_VARIABLE
     * instruction is run, and the value is not found in the storage, this
     * value will be used
     *
     * @generated from protobuf field: map<string, Yarn.Operand> initial_values = 3;
     */
    initialValues: {
      [key: string]: Operand;
    };
  }
  /**
   * A collection of instructions
   *
   * @generated from protobuf message Yarn.Node
   */
  export interface Node {
    /**
     * The name of this node.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * The list of instructions in this node.
     *
     * @generated from protobuf field: repeated Yarn.Instruction instructions = 2;
     */
    instructions: Instruction[];
    /**
     * A jump table, mapping the names of labels to positions in the
     * instructions list.
     *
     * @generated from protobuf field: map<string, int32> labels = 3;
     */
    labels: {
      [key: string]: number;
    };
    /**
     * The tags associated with this node.
     *
     * @generated from protobuf field: repeated string tags = 4;
     */
    tags: string[];
    /**
     * the entry in the program's string table that contains the original
     * text of this node; null if this is not available
     *
     * @generated from protobuf field: string sourceTextStringID = 5;
     */
    sourceTextStringID: string;
  }
  /**
   * A single Yarn instruction.
   *
   * @generated from protobuf message Yarn.Instruction
   */
  export interface Instruction {
    /**
     * The operation that this instruction will perform.
     *
     * @generated from protobuf field: Yarn.Instruction.OpCode opcode = 1;
     */
    opcode: Instruction_OpCode;
    /**
     * The list of operands, if any, that this instruction uses.
     *
     * @generated from protobuf field: repeated Yarn.Operand operands = 2;
     */
    operands: Operand[];
  }
  /**
   * The type of instruction that this is.
   *
   * @generated from protobuf enum Yarn.Instruction.OpCode
   */
  export enum Instruction_OpCode {
    /**
     * Jumps to a named position in the node.
     * opA = string: label name
     *
     * @generated from protobuf enum value: JUMP_TO = 0;
     */
    JUMP_TO = 0,
    /**
     * Peeks a string from stack, and jumps to that named position in
     * the node.
     * No operands.
     *
     * @generated from protobuf enum value: JUMP = 1;
     */
    JUMP = 1,
    /**
     * Delivers a string ID to the client.
     * opA = string: string ID
     *
     * @generated from protobuf enum value: RUN_LINE = 2;
     */
    RUN_LINE = 2,
    /**
     * Delivers a command to the client.
     * opA = string: command text
     *
     * @generated from protobuf enum value: RUN_COMMAND = 3;
     */
    RUN_COMMAND = 3,
    /**
     * Adds an entry to the option list (see ShowOptions).
     * - opA = string: string ID for option to add
     * - opB = string: destination to go to if this option is selected
     * - opC = number: number of expressions on the stack to insert
     *   into the line
     * - opD = bool: whether the option has a condition on it (in which
     *   case a value should be popped off the stack and used to signal
     *   the game that the option should be not available)
     *
     * @generated from protobuf enum value: ADD_OPTION = 4;
     */
    ADD_OPTION = 4,
    /**
     * Presents the current list of options to the client, then clears
     * the list. The most recently selected option will be on the top
     * of the stack when execution resumes.
     * No operands.
     *
     * @generated from protobuf enum value: SHOW_OPTIONS = 5;
     */
    SHOW_OPTIONS = 5,
    /**
     * Pushes a string onto the stack.
     * opA = string: the string to push to the stack.
     *
     * @generated from protobuf enum value: PUSH_STRING = 6;
     */
    PUSH_STRING = 6,
    /**
     * Pushes a floating point number onto the stack.
     * opA = float: number to push to stack
     *
     * @generated from protobuf enum value: PUSH_FLOAT = 7;
     */
    PUSH_FLOAT = 7,
    /**
     * Pushes a boolean onto the stack.
     * opA = bool: the bool to push to stack
     *
     * @generated from protobuf enum value: PUSH_BOOL = 8;
     */
    PUSH_BOOL = 8,
    /**
     * Pushes a null value onto the stack.
     * No operands.
     *
     * @generated from protobuf enum value: PUSH_NULL = 9;
     */
    PUSH_NULL = 9,
    /**
     * Jumps to the named position in the the node, if the top of the
     * stack is not null, zero or false.
     * opA = string: label name
     *
     * @generated from protobuf enum value: JUMP_IF_FALSE = 10;
     */
    JUMP_IF_FALSE = 10,
    /**
     * Discards top of stack.
     * No operands.
     *
     * @generated from protobuf enum value: POP = 11;
     */
    POP = 11,
    /**
     * Calls a function in the client. Pops as many arguments as the
     * client indicates the function receives, and the result (if any)
     * is pushed to the stack.
     * opA = string: name of the function
     *
     * @generated from protobuf enum value: CALL_FUNC = 12;
     */
    CALL_FUNC = 12,
    /**
     * Pushes the contents of a variable onto the stack.
     * opA = name of variable
     *
     * @generated from protobuf enum value: PUSH_VARIABLE = 13;
     */
    PUSH_VARIABLE = 13,
    /**
     * Stores the contents of the top of the stack in the named
     * variable.
     * opA = name of variable
     *
     * @generated from protobuf enum value: STORE_VARIABLE = 14;
     */
    STORE_VARIABLE = 14,
    /**
     * Stops execution of the program.
     * No operands.
     *
     * @generated from protobuf enum value: STOP = 15;
     */
    STOP = 15,
    /**
     * Pops a string off the top of the stack, and runs the node with
     * that name.
     * No operands.
     *
     * @generated from protobuf enum value: RUN_NODE = 16;
     */
    RUN_NODE = 16,
  }
  /**
   * A value used by an Instruction.
   *
   * @generated from protobuf message Yarn.Operand
   */
  export interface Operand {
    /**
     * @generated from protobuf oneof: value
     */
    value:
      | {
          /**
           * A string.
           *
           * @generated from protobuf field: string string_value = 1;
           */
          stringValue: string;
        }
      | {
          /**
           * A boolean (true or false).
           *
           * @generated from protobuf field: bool bool_value = 2;
           */
          boolValue: boolean;
        }
      | {
          /**
           * A floating point number.
           *
           * @generated from protobuf field: float float_value = 3;
           */
          floatValue: number;
        };
  }
}

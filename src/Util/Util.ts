import { parse } from "expression-eval";
import { AST } from "../Types/AST";
import {
  File_hashtagContext,
  HeaderContext,
} from "../YarnSpinnerANTLR4/YarnSpinnerParser";
import Evaluate from "./Evaluate";
import exp from "constants";

export class Util {
  static GetHeader(ctx: HeaderContext): AST.Header {
    try {
      return {
        key: ctx._header_key.text,
        value: ctx._header_value.text,
      };
    } catch (e) {
      throw new Error("Invalid header: " + ctx.getText());
    }
  }
  static UpdatePlaceholderString(input: string, scope: AST.Scope): string {
    // Regular expression to match content within curly braces
    const regex = /(?<!\\)\{(.*?)(?<!\\)\}/g;
    let match: RegExpExecArray | null;

    // Clone the input string for replacement
    let updatedString = input;

    // Variable to keep track of the replacement index
    let index = 0;

    // Find and process each match
    while ((match = regex.exec(input)) !== null) {
      // Add the matched content expression to the replacements array
      const expression = parse(match[1]);
      const evaluation = Evaluate(expression, scope);

      // Replace the matched content with {n} format
      updatedString = updatedString.replace(match[0], evaluation);

      // Increment the index for the next replacement
      index++;
    }

    return updatedString;
  }
  static ProcessPlaceholderString(
    input: string,
    scope: AST.Scope
  ): {
    updatedString: string;
    replacements: parse.Expression[];
  } {
    // Regular expression to match content within curly braces
    const regex = /(?<!\\)\{(.*?)(?<!\\)\}/g;
    let match: RegExpExecArray | null;

    // Array to hold extracted contents
    const replacements: parse.Expression[] = [];

    // Clone the input string for replacement
    let updatedString = input;

    // Variable to keep track of the replacement index
    let index = 0;

    // Find and process each match
    while ((match = regex.exec(input)) !== null) {
      // Add the matched content to the replacements array
      const expression = parse(match[1]);
      Evaluate(expression, scope);
      replacements.push(expression);

      // Replace the matched content with {n} format
      updatedString = updatedString.replace(match[0], `{${index}}`);

      // Increment the index for the next replacement
      index++;
    }

    return { updatedString, replacements };
  }
  static NumberRegex: RegExp = /^-?[0-9]+(\.[0-9]+)?$/;
  static StringRegex: RegExp = /^".*?"$/;
  static BoolRegex: RegExp = /^(true|false)$/;
}

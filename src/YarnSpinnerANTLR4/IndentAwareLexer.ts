// Ported from https://github.com/YarnSpinnerTool/YarnSpinner/blob/main/YarnSpinner.Compiler/IndentAwareLexer.cs

import { CharStream, CommonToken, InputStream, Lexer, Token } from "antlr4";
import YarnSpinnerLexer from "./YarnSpinnerLexer";
import { TokenSource } from "antlr4/src/antlr4/TokenSource";
import { CommonTokenModified } from "./CommonTokenModified";

export class IndentAwareLexer extends Lexer {
  private unbalancedIndents: number[] = [];
  private lastIndent: number = 0;
  private lineContainsShortcut: boolean = false;
  private lastToken: Token | undefined;
  private _hitEOF: boolean = false;
  private lastSeenOptionContent: number = -1;
  private pendingTokens: Token[] = [];
  private warnings: Warning[] = [];

  constructor(input: CharStream) {
    super(input);
    this._input = input;
  }

  public override nextToken(): Token {
    if (this._hitEOF && this.pendingTokens.length > 0) {
      return this.pendingTokens.shift() as Token;
    } else if (this._input.size === 0) {
      this._hitEOF = true;
      return new CommonTokenModified(
        undefined,
        YarnSpinnerLexer.EOF,
        undefined,
        undefined,
        undefined
      );
    } else {
      this.checkNextToken();
      if (this.pendingTokens.length > 0) {
        return this.pendingTokens.shift() as Token;
      } else {
        // NOTE: This is a hack to allow null to be returned. antlr4 lexer.js
        // handles it but the typescript definitions don't allow it.
        return null as unknown as Token;
      }
    }
  }

  private checkNextToken(): void {
    const currentToken = super.nextToken();

    switch (currentToken.type) {
      case YarnSpinnerLexer.NEWLINE:
        this.HandleNewLineToken(currentToken);
        break;

      case YarnSpinnerLexer.EOF:
        this.HandleEndOfFileToken(currentToken);
        break;

      case YarnSpinnerLexer.SHORTCUT_ARROW:
        this.pendingTokens.push(currentToken);
        this.lineContainsShortcut = true;
        break;

      case YarnSpinnerLexer.BODY_END:
        this.lineContainsShortcut = false;
        this.lastIndent = 0;
        this.unbalancedIndents.length = 0;
        this.lastSeenOptionContent = -1;
        this.pendingTokens.push(currentToken);
        break;

      default:
        this.pendingTokens.push(currentToken);
        break;
    }
    this.lastToken = currentToken;
  }

  private HandleEndOfFileToken(currentToken: Token): void {
    while (this.unbalancedIndents.length > 0) {
      const indent = this.unbalancedIndents.pop() as number;
      this.InsertToken("", YarnSpinnerLexer.DEDENT, this.line, this.column);
    }
    this.pendingTokens.push(currentToken);
  }

  private HandleNewLineToken(currentToken: Token): void {
    this.pendingTokens.push(currentToken);
    const currentIndentationLength = this.GetLengthOfNewlineToken(currentToken);
    if (this.lastSeenOptionContent !== -1) {
      if (currentToken.type === (this.lastToken as Token)?.type) {
        if (this.line - this.lastSeenOptionContent === 1) {
          this.InsertToken(
            "",
            YarnSpinnerLexer.BLANK_LINE_FOLLOWING_OPTION,
            this.line,
            this.column
          );
        }
        this.lastSeenOptionContent = -1;
      }
    }
    if (this.lineContainsShortcut) {
      if (currentIndentationLength > this.lastIndent) {
        this.unbalancedIndents.push(currentIndentationLength);
        this.InsertToken("", YarnSpinnerLexer.INDENT, this.line, this.column);
      }
      this.lineContainsShortcut = false;
      this.lastSeenOptionContent = this.line;
    }
    if (this.unbalancedIndents.length > 0) {
      let top = this.unbalancedIndents[this.unbalancedIndents.length - 1];
      while (currentIndentationLength < top) {
        this.InsertToken("", YarnSpinnerLexer.DEDENT, this.line, this.column);
        this.unbalancedIndents.pop();
        if (this.unbalancedIndents.length > 0) {
          top = this.unbalancedIndents[this.unbalancedIndents.length - 1];
        } else {
          top = 0;
          this.lastSeenOptionContent = this.line;
        }
      }
    }
    this.lastIndent = currentIndentationLength;
  }

  private GetLengthOfNewlineToken(currentToken: Token): number {
    if (currentToken.type !== YarnSpinnerLexer.NEWLINE) {
      throw new Error(
        `${this.GetLengthOfNewlineToken.name} expected ${currentToken.text} to be a ${YarnSpinnerLexer.NEWLINE} (${YarnSpinnerLexer.NEWLINE}), not ${currentToken.type}`
      );
    }
    let length = 0;
    let sawSpaces = false;
    let sawTabs = false;
    for (const c of currentToken.text) {
      switch (c) {
        case " ":
          length += 1;
          sawSpaces = true;
          break;
        case "\t":
          sawTabs = true;
          length += 8;
          break;
      }
    }
    if (sawSpaces && sawTabs) {
      this.warnings.push({
        Token: currentToken,
        Message: "Indentation contains tabs and spaces",
      });
    }
    return length;
  }
  private InsertToken(
    text: string,
    type: number,
    line: number,
    column: number
  ): void {
    const startIndex = this._tokenStartCharIndex + this.text.length;
    const stopIndex = startIndex - 1;
    const tokenFactorySourcePair = [this, this._input] as [
      TokenSource,
      InputStream
    ];
    const token = new CommonToken(
      tokenFactorySourcePair,
      type,
      YarnSpinnerLexer.DEFAULT_MODE,
      startIndex,
      stopIndex
    );
    token.text = text;
    token.line = line;
    token.column = column;
    this.pendingTokens.push(token);
  }
}
export type Warning = {
  Token: Token;
  Message: string;
};

// Generated from YarnSpinnerParser.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import YarnSpinnerParserListener from "./YarnSpinnerParserListener.js";
import YarnSpinnerParserVisitor from "./YarnSpinnerParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class YarnSpinnerParser extends Parser {
	public static readonly INDENT = 1;
	public static readonly DEDENT = 2;
	public static readonly BLANK_LINE_FOLLOWING_OPTION = 3;
	public static readonly WS = 4;
	public static readonly COMMENT = 5;
	public static readonly NEWLINE = 6;
	public static readonly ID = 7;
	public static readonly BODY_START = 8;
	public static readonly HEADER_DELIMITER = 9;
	public static readonly HASHTAG = 10;
	public static readonly REST_OF_LINE = 11;
	public static readonly BODY_WS = 12;
	public static readonly BODY_END = 13;
	public static readonly SHORTCUT_ARROW = 14;
	public static readonly COMMAND_START = 15;
	public static readonly EXPRESSION_START = 16;
	public static readonly ESCAPED_ANY = 17;
	public static readonly TEXT_ESCAPE = 18;
	public static readonly TEXT_COMMENT = 19;
	public static readonly TEXT = 20;
	public static readonly UNESCAPABLE_CHARACTER = 21;
	public static readonly TEXT_COMMANDHASHTAG_WS = 22;
	public static readonly TEXT_COMMANDHASHTAG_COMMENT = 23;
	public static readonly TEXT_COMMANDHASHTAG_ERROR = 24;
	public static readonly HASHTAG_WS = 25;
	public static readonly HASHTAG_TEXT = 26;
	public static readonly EXPR_WS = 27;
	public static readonly KEYWORD_TRUE = 28;
	public static readonly KEYWORD_FALSE = 29;
	public static readonly KEYWORD_NULL = 30;
	public static readonly OPERATOR_ASSIGNMENT = 31;
	public static readonly OPERATOR_LOGICAL_LESS_THAN_EQUALS = 32;
	public static readonly OPERATOR_LOGICAL_GREATER_THAN_EQUALS = 33;
	public static readonly OPERATOR_LOGICAL_EQUALS = 34;
	public static readonly OPERATOR_LOGICAL_LESS = 35;
	public static readonly OPERATOR_LOGICAL_GREATER = 36;
	public static readonly OPERATOR_LOGICAL_NOT_EQUALS = 37;
	public static readonly OPERATOR_LOGICAL_AND = 38;
	public static readonly OPERATOR_LOGICAL_OR = 39;
	public static readonly OPERATOR_LOGICAL_XOR = 40;
	public static readonly OPERATOR_LOGICAL_NOT = 41;
	public static readonly OPERATOR_MATHS_ADDITION_EQUALS = 42;
	public static readonly OPERATOR_MATHS_SUBTRACTION_EQUALS = 43;
	public static readonly OPERATOR_MATHS_MULTIPLICATION_EQUALS = 44;
	public static readonly OPERATOR_MATHS_MODULUS_EQUALS = 45;
	public static readonly OPERATOR_MATHS_DIVISION_EQUALS = 46;
	public static readonly OPERATOR_MATHS_ADDITION = 47;
	public static readonly OPERATOR_MATHS_SUBTRACTION = 48;
	public static readonly OPERATOR_MATHS_MULTIPLICATION = 49;
	public static readonly OPERATOR_MATHS_DIVISION = 50;
	public static readonly OPERATOR_MATHS_MODULUS = 51;
	public static readonly LPAREN = 52;
	public static readonly RPAREN = 53;
	public static readonly COMMA = 54;
	public static readonly EXPRESSION_AS = 55;
	public static readonly STRING = 56;
	public static readonly FUNC_ID = 57;
	public static readonly EXPRESSION_END = 58;
	public static readonly VAR_ID = 59;
	public static readonly DOT = 60;
	public static readonly NUMBER = 61;
	public static readonly COMMAND_NEWLINE = 62;
	public static readonly COMMAND_WS = 63;
	public static readonly COMMAND_IF = 64;
	public static readonly COMMAND_ELSEIF = 65;
	public static readonly COMMAND_ELSE = 66;
	public static readonly COMMAND_SET = 67;
	public static readonly COMMAND_ENDIF = 68;
	public static readonly COMMAND_CALL = 69;
	public static readonly COMMAND_DECLARE = 70;
	public static readonly COMMAND_JUMP = 71;
	public static readonly COMMAND_ENUM = 72;
	public static readonly COMMAND_CASE = 73;
	public static readonly COMMAND_ENDENUM = 74;
	public static readonly COMMAND_LOCAL = 75;
	public static readonly COMMAND_END = 76;
	public static readonly COMMAND_TEXT_NEWLINE = 77;
	public static readonly COMMAND_TEXT_END = 78;
	public static readonly COMMAND_EXPRESSION_START = 79;
	public static readonly COMMAND_TEXT = 80;
	public static readonly COMMAND_ID_NEWLINE = 81;
	public static readonly TYPE_STRING = 82;
	public static readonly TYPE_NUMBER = 83;
	public static readonly TYPE_BOOL = 84;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_dialogue = 0;
	public static readonly RULE_file_hashtag = 1;
	public static readonly RULE_node = 2;
	public static readonly RULE_header = 3;
	public static readonly RULE_body = 4;
	public static readonly RULE_statement = 5;
	public static readonly RULE_line_statement = 6;
	public static readonly RULE_line_formatted_text = 7;
	public static readonly RULE_hashtag = 8;
	public static readonly RULE_line_condition = 9;
	public static readonly RULE_expression = 10;
	public static readonly RULE_value = 11;
	public static readonly RULE_variable = 12;
	public static readonly RULE_function_call = 13;
	public static readonly RULE_if_statement = 14;
	public static readonly RULE_if_clause = 15;
	public static readonly RULE_else_if_clause = 16;
	public static readonly RULE_else_clause = 17;
	public static readonly RULE_set_statement = 18;
	public static readonly RULE_call_statement = 19;
	public static readonly RULE_command_statement = 20;
	public static readonly RULE_command_formatted_text = 21;
	public static readonly RULE_shortcut_option_statement = 22;
	public static readonly RULE_shortcut_option = 23;
	public static readonly RULE_declare_statement = 24;
	public static readonly RULE_jump_statement = 25;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'---'", null, 
                                                            "'#'", null, 
                                                            null, "'==='", 
                                                            "'->'", "'<<'", 
                                                            null, null, 
                                                            "'\\'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'true'", "'false'", 
                                                            "'null'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'+='", "'-='", 
                                                            "'*='", "'%='", 
                                                            "'/='", "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'", "'%'", 
                                                            "'('", "')'", 
                                                            "','", "'as'", 
                                                            null, null, 
                                                            "'}'", null, 
                                                            "'.'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'endif'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'{'", 
                                                            null, null, 
                                                            "'string'", 
                                                            "'number'", 
                                                            "'bool'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "INDENT", 
                                                             "DEDENT", "BLANK_LINE_FOLLOWING_OPTION", 
                                                             "WS", "COMMENT", 
                                                             "NEWLINE", 
                                                             "ID", "BODY_START", 
                                                             "HEADER_DELIMITER", 
                                                             "HASHTAG", 
                                                             "REST_OF_LINE", 
                                                             "BODY_WS", 
                                                             "BODY_END", 
                                                             "SHORTCUT_ARROW", 
                                                             "COMMAND_START", 
                                                             "EXPRESSION_START", 
                                                             "ESCAPED_ANY", 
                                                             "TEXT_ESCAPE", 
                                                             "TEXT_COMMENT", 
                                                             "TEXT", "UNESCAPABLE_CHARACTER", 
                                                             "TEXT_COMMANDHASHTAG_WS", 
                                                             "TEXT_COMMANDHASHTAG_COMMENT", 
                                                             "TEXT_COMMANDHASHTAG_ERROR", 
                                                             "HASHTAG_WS", 
                                                             "HASHTAG_TEXT", 
                                                             "EXPR_WS", 
                                                             "KEYWORD_TRUE", 
                                                             "KEYWORD_FALSE", 
                                                             "KEYWORD_NULL", 
                                                             "OPERATOR_ASSIGNMENT", 
                                                             "OPERATOR_LOGICAL_LESS_THAN_EQUALS", 
                                                             "OPERATOR_LOGICAL_GREATER_THAN_EQUALS", 
                                                             "OPERATOR_LOGICAL_EQUALS", 
                                                             "OPERATOR_LOGICAL_LESS", 
                                                             "OPERATOR_LOGICAL_GREATER", 
                                                             "OPERATOR_LOGICAL_NOT_EQUALS", 
                                                             "OPERATOR_LOGICAL_AND", 
                                                             "OPERATOR_LOGICAL_OR", 
                                                             "OPERATOR_LOGICAL_XOR", 
                                                             "OPERATOR_LOGICAL_NOT", 
                                                             "OPERATOR_MATHS_ADDITION_EQUALS", 
                                                             "OPERATOR_MATHS_SUBTRACTION_EQUALS", 
                                                             "OPERATOR_MATHS_MULTIPLICATION_EQUALS", 
                                                             "OPERATOR_MATHS_MODULUS_EQUALS", 
                                                             "OPERATOR_MATHS_DIVISION_EQUALS", 
                                                             "OPERATOR_MATHS_ADDITION", 
                                                             "OPERATOR_MATHS_SUBTRACTION", 
                                                             "OPERATOR_MATHS_MULTIPLICATION", 
                                                             "OPERATOR_MATHS_DIVISION", 
                                                             "OPERATOR_MATHS_MODULUS", 
                                                             "LPAREN", "RPAREN", 
                                                             "COMMA", "EXPRESSION_AS", 
                                                             "STRING", "FUNC_ID", 
                                                             "EXPRESSION_END", 
                                                             "VAR_ID", "DOT", 
                                                             "NUMBER", "COMMAND_NEWLINE", 
                                                             "COMMAND_WS", 
                                                             "COMMAND_IF", 
                                                             "COMMAND_ELSEIF", 
                                                             "COMMAND_ELSE", 
                                                             "COMMAND_SET", 
                                                             "COMMAND_ENDIF", 
                                                             "COMMAND_CALL", 
                                                             "COMMAND_DECLARE", 
                                                             "COMMAND_JUMP", 
                                                             "COMMAND_ENUM", 
                                                             "COMMAND_CASE", 
                                                             "COMMAND_ENDENUM", 
                                                             "COMMAND_LOCAL", 
                                                             "COMMAND_END", 
                                                             "COMMAND_TEXT_NEWLINE", 
                                                             "COMMAND_TEXT_END", 
                                                             "COMMAND_EXPRESSION_START", 
                                                             "COMMAND_TEXT", 
                                                             "COMMAND_ID_NEWLINE", 
                                                             "TYPE_STRING", 
                                                             "TYPE_NUMBER", 
                                                             "TYPE_BOOL" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"dialogue", "file_hashtag", "node", "header", "body", "statement", "line_statement", 
		"line_formatted_text", "hashtag", "line_condition", "expression", "value", 
		"variable", "function_call", "if_statement", "if_clause", "else_if_clause", 
		"else_clause", "set_statement", "call_statement", "command_statement", 
		"command_formatted_text", "shortcut_option_statement", "shortcut_option", 
		"declare_statement", "jump_statement",
	];
	public get grammarFileName(): string { return "YarnSpinnerParser.g4"; }
	public get literalNames(): (string | null)[] { return YarnSpinnerParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return YarnSpinnerParser.symbolicNames; }
	public get ruleNames(): string[] { return YarnSpinnerParser.ruleNames; }
	public get serializedATN(): number[] { return YarnSpinnerParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, YarnSpinnerParser._ATN, YarnSpinnerParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public dialogue(): DialogueContext {
		let localctx: DialogueContext = new DialogueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, YarnSpinnerParser.RULE_dialogue);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===10) {
				{
				{
				this.state = 52;
				this.file_hashtag();
				}
				}
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 59;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 58;
				this.node();
				}
				}
				this.state = 61;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public file_hashtag(): File_hashtagContext {
		let localctx: File_hashtagContext = new File_hashtagContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, YarnSpinnerParser.RULE_file_hashtag);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 63;
			this.match(YarnSpinnerParser.HASHTAG);
			this.state = 64;
			localctx._text = this.match(YarnSpinnerParser.HASHTAG_TEXT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public node(): NodeContext {
		let localctx: NodeContext = new NodeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, YarnSpinnerParser.RULE_node);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 66;
				this.header();
				}
				}
				this.state = 69;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===7);
			this.state = 71;
			this.match(YarnSpinnerParser.BODY_START);
			this.state = 72;
			this.body();
			this.state = 73;
			this.match(YarnSpinnerParser.BODY_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public header(): HeaderContext {
		let localctx: HeaderContext = new HeaderContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, YarnSpinnerParser.RULE_header);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 75;
			localctx._header_key = this.match(YarnSpinnerParser.ID);
			this.state = 76;
			this.match(YarnSpinnerParser.HEADER_DELIMITER);
			this.state = 78;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===11) {
				{
				this.state = 77;
				localctx._header_value = this.match(YarnSpinnerParser.REST_OF_LINE);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public body(): BodyContext {
		let localctx: BodyContext = new BodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, YarnSpinnerParser.RULE_body);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 83;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1163266) !== 0)) {
				{
				{
				this.state = 80;
				this.statement();
				}
				}
				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, YarnSpinnerParser.RULE_statement);
		let _la: number;
		try {
			this.state = 102;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 86;
				this.line_statement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 87;
				this.if_statement();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 88;
				this.set_statement();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 89;
				this.shortcut_option_statement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 90;
				this.call_statement();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 91;
				this.command_statement();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 92;
				this.declare_statement();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 93;
				this.jump_statement();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 94;
				this.match(YarnSpinnerParser.INDENT);
				this.state = 98;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1163266) !== 0)) {
					{
					{
					this.state = 95;
					this.statement();
					}
					}
					this.state = 100;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 101;
				this.match(YarnSpinnerParser.DEDENT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public line_statement(): Line_statementContext {
		let localctx: Line_statementContext = new Line_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, YarnSpinnerParser.RULE_line_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 104;
			this.line_formatted_text();
			this.state = 106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 105;
				this.line_condition();
				}
			}

			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===10) {
				{
				{
				this.state = 108;
				this.hashtag();
				}
				}
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 114;
			this.match(YarnSpinnerParser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public line_formatted_text(): Line_formatted_textContext {
		let localctx: Line_formatted_textContext = new Line_formatted_textContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, YarnSpinnerParser.RULE_line_formatted_text);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 125;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 20:
					{
					this.state = 117;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 116;
							this.match(YarnSpinnerParser.TEXT);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 119;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;
				case 16:
					{
					this.state = 121;
					this.match(YarnSpinnerParser.EXPRESSION_START);
					this.state = 122;
					this.expression(0);
					this.state = 123;
					this.match(YarnSpinnerParser.EXPRESSION_END);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===16 || _la===20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public hashtag(): HashtagContext {
		let localctx: HashtagContext = new HashtagContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, YarnSpinnerParser.RULE_hashtag);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 129;
			this.match(YarnSpinnerParser.HASHTAG);
			this.state = 130;
			localctx._text = this.match(YarnSpinnerParser.HASHTAG_TEXT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public line_condition(): Line_conditionContext {
		let localctx: Line_conditionContext = new Line_conditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, YarnSpinnerParser.RULE_line_condition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 132;
			this.match(YarnSpinnerParser.COMMAND_START);
			this.state = 133;
			this.match(YarnSpinnerParser.COMMAND_IF);
			this.state = 134;
			this.expression(0);
			this.state = 135;
			this.match(YarnSpinnerParser.COMMAND_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ExpressionContext = localctx;
		let _startState: number = 20;
		this.enterRecursionRule(localctx, 20, YarnSpinnerParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 147;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 52:
				{
				localctx = new ExpParensContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 138;
				this.match(YarnSpinnerParser.LPAREN);
				this.state = 139;
				this.expression(0);
				this.state = 140;
				this.match(YarnSpinnerParser.RPAREN);
				}
				break;
			case 48:
				{
				localctx = new ExpNegativeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 142;
				(localctx as ExpNegativeContext)._op = this.match(YarnSpinnerParser.OPERATOR_MATHS_SUBTRACTION);
				this.state = 143;
				this.expression(8);
				}
				break;
			case 41:
				{
				localctx = new ExpNotContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 144;
				(localctx as ExpNotContext)._op = this.match(YarnSpinnerParser.OPERATOR_LOGICAL_NOT);
				this.state = 145;
				this.expression(7);
				}
				break;
			case 28:
			case 29:
			case 30:
			case 56:
			case 57:
			case 59:
			case 61:
				{
				localctx = new ExpValueContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 146;
				this.value();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 166;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 164;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
					case 1:
						{
						localctx = new ExpMultDivModContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, YarnSpinnerParser.RULE_expression);
						this.state = 149;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 150;
						(localctx as ExpMultDivModContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 7) !== 0))) {
						    (localctx as ExpMultDivModContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 151;
						this.expression(7);
						}
						break;
					case 2:
						{
						localctx = new ExpAddSubContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, YarnSpinnerParser.RULE_expression);
						this.state = 152;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 153;
						(localctx as ExpAddSubContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===47 || _la===48)) {
						    (localctx as ExpAddSubContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 154;
						this.expression(6);
						}
						break;
					case 3:
						{
						localctx = new ExpComparisonContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, YarnSpinnerParser.RULE_expression);
						this.state = 155;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 156;
						(localctx as ExpComparisonContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 27) !== 0))) {
						    (localctx as ExpComparisonContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 157;
						this.expression(5);
						}
						break;
					case 4:
						{
						localctx = new ExpEqualityContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, YarnSpinnerParser.RULE_expression);
						this.state = 158;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 159;
						(localctx as ExpEqualityContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===34 || _la===37)) {
						    (localctx as ExpEqualityContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 160;
						this.expression(4);
						}
						break;
					case 5:
						{
						localctx = new ExpAndOrXorContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, YarnSpinnerParser.RULE_expression);
						this.state = 161;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 162;
						(localctx as ExpAndOrXorContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 7) !== 0))) {
						    (localctx as ExpAndOrXorContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 163;
						this.expression(3);
						}
						break;
					}
					}
				}
				this.state = 168;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let localctx: ValueContext = new ValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, YarnSpinnerParser.RULE_value);
		try {
			this.state = 176;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 61:
				localctx = new ValueNumberContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 169;
				this.match(YarnSpinnerParser.NUMBER);
				}
				break;
			case 28:
				localctx = new ValueTrueContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 170;
				this.match(YarnSpinnerParser.KEYWORD_TRUE);
				}
				break;
			case 29:
				localctx = new ValueFalseContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 171;
				this.match(YarnSpinnerParser.KEYWORD_FALSE);
				}
				break;
			case 59:
				localctx = new ValueVarContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 172;
				this.variable();
				}
				break;
			case 56:
				localctx = new ValueStringContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 173;
				this.match(YarnSpinnerParser.STRING);
				}
				break;
			case 30:
				localctx = new ValueNullContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 174;
				this.match(YarnSpinnerParser.KEYWORD_NULL);
				}
				break;
			case 57:
				localctx = new ValueFuncContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 175;
				this.function_call();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variable(): VariableContext {
		let localctx: VariableContext = new VariableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, YarnSpinnerParser.RULE_variable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 178;
			this.match(YarnSpinnerParser.VAR_ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public function_call(): Function_callContext {
		let localctx: Function_callContext = new Function_callContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, YarnSpinnerParser.RULE_function_call);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 180;
			this.match(YarnSpinnerParser.FUNC_ID);
			this.state = 181;
			this.match(YarnSpinnerParser.LPAREN);
			this.state = 183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1879048192) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 1411201) !== 0)) {
				{
				this.state = 182;
				this.expression(0);
				}
			}

			this.state = 189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===54) {
				{
				{
				this.state = 185;
				this.match(YarnSpinnerParser.COMMA);
				this.state = 186;
				this.expression(0);
				}
				}
				this.state = 191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 192;
			this.match(YarnSpinnerParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public if_statement(): If_statementContext {
		let localctx: If_statementContext = new If_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, YarnSpinnerParser.RULE_if_statement);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 194;
			this.if_clause();
			this.state = 198;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 195;
					this.else_if_clause();
					}
					}
				}
				this.state = 200;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
			}
			this.state = 202;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 201;
				this.else_clause();
				}
				break;
			}
			this.state = 204;
			this.match(YarnSpinnerParser.COMMAND_START);
			this.state = 205;
			this.match(YarnSpinnerParser.COMMAND_ENDIF);
			this.state = 206;
			this.match(YarnSpinnerParser.COMMAND_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public if_clause(): If_clauseContext {
		let localctx: If_clauseContext = new If_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, YarnSpinnerParser.RULE_if_clause);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 208;
			this.match(YarnSpinnerParser.COMMAND_START);
			this.state = 209;
			this.match(YarnSpinnerParser.COMMAND_IF);
			this.state = 210;
			this.expression(0);
			this.state = 211;
			this.match(YarnSpinnerParser.COMMAND_END);
			this.state = 215;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 212;
					this.statement();
					}
					}
				}
				this.state = 217;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public else_if_clause(): Else_if_clauseContext {
		let localctx: Else_if_clauseContext = new Else_if_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, YarnSpinnerParser.RULE_else_if_clause);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 218;
			this.match(YarnSpinnerParser.COMMAND_START);
			this.state = 219;
			this.match(YarnSpinnerParser.COMMAND_ELSEIF);
			this.state = 220;
			this.expression(0);
			this.state = 221;
			this.match(YarnSpinnerParser.COMMAND_END);
			this.state = 225;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 222;
					this.statement();
					}
					}
				}
				this.state = 227;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public else_clause(): Else_clauseContext {
		let localctx: Else_clauseContext = new Else_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, YarnSpinnerParser.RULE_else_clause);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 228;
			this.match(YarnSpinnerParser.COMMAND_START);
			this.state = 229;
			this.match(YarnSpinnerParser.COMMAND_ELSE);
			this.state = 230;
			this.match(YarnSpinnerParser.COMMAND_END);
			this.state = 234;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 231;
					this.statement();
					}
					}
				}
				this.state = 236;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 22, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public set_statement(): Set_statementContext {
		let localctx: Set_statementContext = new Set_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, YarnSpinnerParser.RULE_set_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 237;
			this.match(YarnSpinnerParser.COMMAND_START);
			this.state = 238;
			this.match(YarnSpinnerParser.COMMAND_SET);
			this.state = 239;
			this.variable();
			this.state = 240;
			localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if(!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & 63489) !== 0))) {
			    localctx._op = this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 241;
			this.expression(0);
			this.state = 242;
			this.match(YarnSpinnerParser.COMMAND_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public call_statement(): Call_statementContext {
		let localctx: Call_statementContext = new Call_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, YarnSpinnerParser.RULE_call_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 244;
			this.match(YarnSpinnerParser.COMMAND_START);
			this.state = 245;
			this.match(YarnSpinnerParser.COMMAND_CALL);
			this.state = 246;
			this.function_call();
			this.state = 247;
			this.match(YarnSpinnerParser.COMMAND_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public command_statement(): Command_statementContext {
		let localctx: Command_statementContext = new Command_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, YarnSpinnerParser.RULE_command_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 249;
			this.match(YarnSpinnerParser.COMMAND_START);
			this.state = 250;
			this.command_formatted_text();
			this.state = 251;
			this.match(YarnSpinnerParser.COMMAND_TEXT_END);
			{
			this.state = 255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===10) {
				{
				{
				this.state = 252;
				this.hashtag();
				}
				}
				this.state = 257;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public command_formatted_text(): Command_formatted_textContext {
		let localctx: Command_formatted_textContext = new Command_formatted_textContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, YarnSpinnerParser.RULE_command_formatted_text);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 265;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===79 || _la===80) {
				{
				this.state = 263;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 80:
					{
					this.state = 258;
					this.match(YarnSpinnerParser.COMMAND_TEXT);
					}
					break;
				case 79:
					{
					this.state = 259;
					this.match(YarnSpinnerParser.COMMAND_EXPRESSION_START);
					this.state = 260;
					this.expression(0);
					this.state = 261;
					this.match(YarnSpinnerParser.EXPRESSION_END);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public shortcut_option_statement(): Shortcut_option_statementContext {
		let localctx: Shortcut_option_statementContext = new Shortcut_option_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, YarnSpinnerParser.RULE_shortcut_option_statement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 271;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 268;
					this.shortcut_option();
					}
					}
				}
				this.state = 273;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
			}
			{
			this.state = 274;
			this.shortcut_option();
			this.state = 276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===3) {
				{
				this.state = 275;
				this.match(YarnSpinnerParser.BLANK_LINE_FOLLOWING_OPTION);
				}
			}

			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public shortcut_option(): Shortcut_optionContext {
		let localctx: Shortcut_optionContext = new Shortcut_optionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, YarnSpinnerParser.RULE_shortcut_option);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 278;
			this.match(YarnSpinnerParser.SHORTCUT_ARROW);
			this.state = 279;
			this.line_statement();
			this.state = 288;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 280;
				this.match(YarnSpinnerParser.INDENT);
				this.state = 284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1163266) !== 0)) {
					{
					{
					this.state = 281;
					this.statement();
					}
					}
					this.state = 286;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 287;
				this.match(YarnSpinnerParser.DEDENT);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declare_statement(): Declare_statementContext {
		let localctx: Declare_statementContext = new Declare_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, YarnSpinnerParser.RULE_declare_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 290;
			this.match(YarnSpinnerParser.COMMAND_START);
			this.state = 291;
			this.match(YarnSpinnerParser.COMMAND_DECLARE);
			this.state = 292;
			this.variable();
			this.state = 293;
			this.match(YarnSpinnerParser.OPERATOR_ASSIGNMENT);
			this.state = 294;
			this.value();
			this.state = 297;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===55) {
				{
				this.state = 295;
				this.match(YarnSpinnerParser.EXPRESSION_AS);
				this.state = 296;
				localctx._type_ = this.match(YarnSpinnerParser.FUNC_ID);
				}
			}

			this.state = 299;
			this.match(YarnSpinnerParser.COMMAND_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public jump_statement(): Jump_statementContext {
		let localctx: Jump_statementContext = new Jump_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, YarnSpinnerParser.RULE_jump_statement);
		try {
			this.state = 312;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				localctx = new JumpToNodeNameContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 301;
				this.match(YarnSpinnerParser.COMMAND_START);
				this.state = 302;
				this.match(YarnSpinnerParser.COMMAND_JUMP);
				this.state = 303;
				(localctx as JumpToNodeNameContext)._destination = this.match(YarnSpinnerParser.ID);
				this.state = 304;
				this.match(YarnSpinnerParser.COMMAND_END);
				}
				break;
			case 2:
				localctx = new JumpToExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 305;
				this.match(YarnSpinnerParser.COMMAND_START);
				this.state = 306;
				this.match(YarnSpinnerParser.COMMAND_JUMP);
				this.state = 307;
				this.match(YarnSpinnerParser.EXPRESSION_START);
				this.state = 308;
				this.expression(0);
				this.state = 309;
				this.match(YarnSpinnerParser.EXPRESSION_END);
				this.state = 310;
				this.match(YarnSpinnerParser.COMMAND_END);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 10:
			return this.expression_sempred(localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);
		case 1:
			return this.precpred(this._ctx, 5);
		case 2:
			return this.precpred(this._ctx, 4);
		case 3:
			return this.precpred(this._ctx, 3);
		case 4:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,84,315,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,1,0,5,0,54,8,0,10,0,12,0,57,9,0,1,0,4,0,60,8,0,11,0,12,0,61,
	1,1,1,1,1,1,1,2,4,2,68,8,2,11,2,12,2,69,1,2,1,2,1,2,1,2,1,3,1,3,1,3,3,3,
	79,8,3,1,4,5,4,82,8,4,10,4,12,4,85,9,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
	1,5,1,5,5,5,97,8,5,10,5,12,5,100,9,5,1,5,3,5,103,8,5,1,6,1,6,3,6,107,8,
	6,1,6,5,6,110,8,6,10,6,12,6,113,9,6,1,6,1,6,1,7,4,7,118,8,7,11,7,12,7,119,
	1,7,1,7,1,7,1,7,4,7,126,8,7,11,7,12,7,127,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,
	9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,148,8,10,1,10,
	1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,5,
	10,165,8,10,10,10,12,10,168,9,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,
	177,8,11,1,12,1,12,1,13,1,13,1,13,3,13,184,8,13,1,13,1,13,5,13,188,8,13,
	10,13,12,13,191,9,13,1,13,1,13,1,14,1,14,5,14,197,8,14,10,14,12,14,200,
	9,14,1,14,3,14,203,8,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,5,
	15,214,8,15,10,15,12,15,217,9,15,1,16,1,16,1,16,1,16,1,16,5,16,224,8,16,
	10,16,12,16,227,9,16,1,17,1,17,1,17,1,17,5,17,233,8,17,10,17,12,17,236,
	9,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,20,1,
	20,1,20,1,20,5,20,254,8,20,10,20,12,20,257,9,20,1,21,1,21,1,21,1,21,1,21,
	5,21,264,8,21,10,21,12,21,267,9,21,1,22,5,22,270,8,22,10,22,12,22,273,9,
	22,1,22,1,22,3,22,277,8,22,1,23,1,23,1,23,1,23,5,23,283,8,23,10,23,12,23,
	286,9,23,1,23,3,23,289,8,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,3,24,298,
	8,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,3,
	25,313,8,25,1,25,0,1,20,26,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,
	34,36,38,40,42,44,46,48,50,0,6,1,0,49,51,1,0,47,48,2,0,32,33,35,36,2,0,
	34,34,37,37,1,0,38,40,2,0,31,31,42,46,337,0,55,1,0,0,0,2,63,1,0,0,0,4,67,
	1,0,0,0,6,75,1,0,0,0,8,83,1,0,0,0,10,102,1,0,0,0,12,104,1,0,0,0,14,125,
	1,0,0,0,16,129,1,0,0,0,18,132,1,0,0,0,20,147,1,0,0,0,22,176,1,0,0,0,24,
	178,1,0,0,0,26,180,1,0,0,0,28,194,1,0,0,0,30,208,1,0,0,0,32,218,1,0,0,0,
	34,228,1,0,0,0,36,237,1,0,0,0,38,244,1,0,0,0,40,249,1,0,0,0,42,265,1,0,
	0,0,44,271,1,0,0,0,46,278,1,0,0,0,48,290,1,0,0,0,50,312,1,0,0,0,52,54,3,
	2,1,0,53,52,1,0,0,0,54,57,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,59,1,0,
	0,0,57,55,1,0,0,0,58,60,3,4,2,0,59,58,1,0,0,0,60,61,1,0,0,0,61,59,1,0,0,
	0,61,62,1,0,0,0,62,1,1,0,0,0,63,64,5,10,0,0,64,65,5,26,0,0,65,3,1,0,0,0,
	66,68,3,6,3,0,67,66,1,0,0,0,68,69,1,0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,
	71,1,0,0,0,71,72,5,8,0,0,72,73,3,8,4,0,73,74,5,13,0,0,74,5,1,0,0,0,75,76,
	5,7,0,0,76,78,5,9,0,0,77,79,5,11,0,0,78,77,1,0,0,0,78,79,1,0,0,0,79,7,1,
	0,0,0,80,82,3,10,5,0,81,80,1,0,0,0,82,85,1,0,0,0,83,81,1,0,0,0,83,84,1,
	0,0,0,84,9,1,0,0,0,85,83,1,0,0,0,86,103,3,12,6,0,87,103,3,28,14,0,88,103,
	3,36,18,0,89,103,3,44,22,0,90,103,3,38,19,0,91,103,3,40,20,0,92,103,3,48,
	24,0,93,103,3,50,25,0,94,98,5,1,0,0,95,97,3,10,5,0,96,95,1,0,0,0,97,100,
	1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,101,1,0,0,0,100,98,1,0,0,0,101,103,
	5,2,0,0,102,86,1,0,0,0,102,87,1,0,0,0,102,88,1,0,0,0,102,89,1,0,0,0,102,
	90,1,0,0,0,102,91,1,0,0,0,102,92,1,0,0,0,102,93,1,0,0,0,102,94,1,0,0,0,
	103,11,1,0,0,0,104,106,3,14,7,0,105,107,3,18,9,0,106,105,1,0,0,0,106,107,
	1,0,0,0,107,111,1,0,0,0,108,110,3,16,8,0,109,108,1,0,0,0,110,113,1,0,0,
	0,111,109,1,0,0,0,111,112,1,0,0,0,112,114,1,0,0,0,113,111,1,0,0,0,114,115,
	5,6,0,0,115,13,1,0,0,0,116,118,5,20,0,0,117,116,1,0,0,0,118,119,1,0,0,0,
	119,117,1,0,0,0,119,120,1,0,0,0,120,126,1,0,0,0,121,122,5,16,0,0,122,123,
	3,20,10,0,123,124,5,58,0,0,124,126,1,0,0,0,125,117,1,0,0,0,125,121,1,0,
	0,0,126,127,1,0,0,0,127,125,1,0,0,0,127,128,1,0,0,0,128,15,1,0,0,0,129,
	130,5,10,0,0,130,131,5,26,0,0,131,17,1,0,0,0,132,133,5,15,0,0,133,134,5,
	64,0,0,134,135,3,20,10,0,135,136,5,76,0,0,136,19,1,0,0,0,137,138,6,10,-1,
	0,138,139,5,52,0,0,139,140,3,20,10,0,140,141,5,53,0,0,141,148,1,0,0,0,142,
	143,5,48,0,0,143,148,3,20,10,8,144,145,5,41,0,0,145,148,3,20,10,7,146,148,
	3,22,11,0,147,137,1,0,0,0,147,142,1,0,0,0,147,144,1,0,0,0,147,146,1,0,0,
	0,148,166,1,0,0,0,149,150,10,6,0,0,150,151,7,0,0,0,151,165,3,20,10,7,152,
	153,10,5,0,0,153,154,7,1,0,0,154,165,3,20,10,6,155,156,10,4,0,0,156,157,
	7,2,0,0,157,165,3,20,10,5,158,159,10,3,0,0,159,160,7,3,0,0,160,165,3,20,
	10,4,161,162,10,2,0,0,162,163,7,4,0,0,163,165,3,20,10,3,164,149,1,0,0,0,
	164,152,1,0,0,0,164,155,1,0,0,0,164,158,1,0,0,0,164,161,1,0,0,0,165,168,
	1,0,0,0,166,164,1,0,0,0,166,167,1,0,0,0,167,21,1,0,0,0,168,166,1,0,0,0,
	169,177,5,61,0,0,170,177,5,28,0,0,171,177,5,29,0,0,172,177,3,24,12,0,173,
	177,5,56,0,0,174,177,5,30,0,0,175,177,3,26,13,0,176,169,1,0,0,0,176,170,
	1,0,0,0,176,171,1,0,0,0,176,172,1,0,0,0,176,173,1,0,0,0,176,174,1,0,0,0,
	176,175,1,0,0,0,177,23,1,0,0,0,178,179,5,59,0,0,179,25,1,0,0,0,180,181,
	5,57,0,0,181,183,5,52,0,0,182,184,3,20,10,0,183,182,1,0,0,0,183,184,1,0,
	0,0,184,189,1,0,0,0,185,186,5,54,0,0,186,188,3,20,10,0,187,185,1,0,0,0,
	188,191,1,0,0,0,189,187,1,0,0,0,189,190,1,0,0,0,190,192,1,0,0,0,191,189,
	1,0,0,0,192,193,5,53,0,0,193,27,1,0,0,0,194,198,3,30,15,0,195,197,3,32,
	16,0,196,195,1,0,0,0,197,200,1,0,0,0,198,196,1,0,0,0,198,199,1,0,0,0,199,
	202,1,0,0,0,200,198,1,0,0,0,201,203,3,34,17,0,202,201,1,0,0,0,202,203,1,
	0,0,0,203,204,1,0,0,0,204,205,5,15,0,0,205,206,5,68,0,0,206,207,5,76,0,
	0,207,29,1,0,0,0,208,209,5,15,0,0,209,210,5,64,0,0,210,211,3,20,10,0,211,
	215,5,76,0,0,212,214,3,10,5,0,213,212,1,0,0,0,214,217,1,0,0,0,215,213,1,
	0,0,0,215,216,1,0,0,0,216,31,1,0,0,0,217,215,1,0,0,0,218,219,5,15,0,0,219,
	220,5,65,0,0,220,221,3,20,10,0,221,225,5,76,0,0,222,224,3,10,5,0,223,222,
	1,0,0,0,224,227,1,0,0,0,225,223,1,0,0,0,225,226,1,0,0,0,226,33,1,0,0,0,
	227,225,1,0,0,0,228,229,5,15,0,0,229,230,5,66,0,0,230,234,5,76,0,0,231,
	233,3,10,5,0,232,231,1,0,0,0,233,236,1,0,0,0,234,232,1,0,0,0,234,235,1,
	0,0,0,235,35,1,0,0,0,236,234,1,0,0,0,237,238,5,15,0,0,238,239,5,67,0,0,
	239,240,3,24,12,0,240,241,7,5,0,0,241,242,3,20,10,0,242,243,5,76,0,0,243,
	37,1,0,0,0,244,245,5,15,0,0,245,246,5,69,0,0,246,247,3,26,13,0,247,248,
	5,76,0,0,248,39,1,0,0,0,249,250,5,15,0,0,250,251,3,42,21,0,251,255,5,78,
	0,0,252,254,3,16,8,0,253,252,1,0,0,0,254,257,1,0,0,0,255,253,1,0,0,0,255,
	256,1,0,0,0,256,41,1,0,0,0,257,255,1,0,0,0,258,264,5,80,0,0,259,260,5,79,
	0,0,260,261,3,20,10,0,261,262,5,58,0,0,262,264,1,0,0,0,263,258,1,0,0,0,
	263,259,1,0,0,0,264,267,1,0,0,0,265,263,1,0,0,0,265,266,1,0,0,0,266,43,
	1,0,0,0,267,265,1,0,0,0,268,270,3,46,23,0,269,268,1,0,0,0,270,273,1,0,0,
	0,271,269,1,0,0,0,271,272,1,0,0,0,272,274,1,0,0,0,273,271,1,0,0,0,274,276,
	3,46,23,0,275,277,5,3,0,0,276,275,1,0,0,0,276,277,1,0,0,0,277,45,1,0,0,
	0,278,279,5,14,0,0,279,288,3,12,6,0,280,284,5,1,0,0,281,283,3,10,5,0,282,
	281,1,0,0,0,283,286,1,0,0,0,284,282,1,0,0,0,284,285,1,0,0,0,285,287,1,0,
	0,0,286,284,1,0,0,0,287,289,5,2,0,0,288,280,1,0,0,0,288,289,1,0,0,0,289,
	47,1,0,0,0,290,291,5,15,0,0,291,292,5,70,0,0,292,293,3,24,12,0,293,294,
	5,31,0,0,294,297,3,22,11,0,295,296,5,55,0,0,296,298,5,57,0,0,297,295,1,
	0,0,0,297,298,1,0,0,0,298,299,1,0,0,0,299,300,5,76,0,0,300,49,1,0,0,0,301,
	302,5,15,0,0,302,303,5,71,0,0,303,304,5,7,0,0,304,313,5,76,0,0,305,306,
	5,15,0,0,306,307,5,71,0,0,307,308,5,16,0,0,308,309,3,20,10,0,309,310,5,
	58,0,0,310,311,5,76,0,0,311,313,1,0,0,0,312,301,1,0,0,0,312,305,1,0,0,0,
	313,51,1,0,0,0,32,55,61,69,78,83,98,102,106,111,119,125,127,147,164,166,
	176,183,189,198,202,215,225,234,255,263,265,271,276,284,288,297,312];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!YarnSpinnerParser.__ATN) {
			YarnSpinnerParser.__ATN = new ATNDeserializer().deserialize(YarnSpinnerParser._serializedATN);
		}

		return YarnSpinnerParser.__ATN;
	}


	static DecisionsToDFA = YarnSpinnerParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class DialogueContext extends ParserRuleContext {
	constructor(parser?: YarnSpinnerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public node_list(): NodeContext[] {
		return this.getTypedRuleContexts(NodeContext) as NodeContext[];
	}
	public node(i: number): NodeContext {
		return this.getTypedRuleContext(NodeContext, i) as NodeContext;
	}
	public file_hashtag_list(): File_hashtagContext[] {
		return this.getTypedRuleContexts(File_hashtagContext) as File_hashtagContext[];
	}
	public file_hashtag(i: number): File_hashtagContext {
		return this.getTypedRuleContext(File_hashtagContext, i) as File_hashtagContext;
	}
    public get ruleIndex(): number {
    	return YarnSpinnerParser.RULE_dialogue;
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterDialogue) {
	 		listener.enterDialogue(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitDialogue) {
	 		listener.exitDialogue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitDialogue) {
			return visitor.visitDialogue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class File_hashtagContext extends ParserRuleContext {
	public _text!: Token;
	constructor(parser?: YarnSpinnerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public HASHTAG(): TerminalNode {
		return this.getToken(YarnSpinnerParser.HASHTAG, 0);
	}
	public HASHTAG_TEXT(): TerminalNode {
		return this.getToken(YarnSpinnerParser.HASHTAG_TEXT, 0);
	}
    public get ruleIndex(): number {
    	return YarnSpinnerParser.RULE_file_hashtag;
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterFile_hashtag) {
	 		listener.enterFile_hashtag(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitFile_hashtag) {
	 		listener.exitFile_hashtag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitFile_hashtag) {
			return visitor.visitFile_hashtag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NodeContext extends ParserRuleContext {
	constructor(parser?: YarnSpinnerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BODY_START(): TerminalNode {
		return this.getToken(YarnSpinnerParser.BODY_START, 0);
	}
	public body(): BodyContext {
		return this.getTypedRuleContext(BodyContext, 0) as BodyContext;
	}
	public BODY_END(): TerminalNode {
		return this.getToken(YarnSpinnerParser.BODY_END, 0);
	}
	public header_list(): HeaderContext[] {
		return this.getTypedRuleContexts(HeaderContext) as HeaderContext[];
	}
	public header(i: number): HeaderContext {
		return this.getTypedRuleContext(HeaderContext, i) as HeaderContext;
	}
    public get ruleIndex(): number {
    	return YarnSpinnerParser.RULE_node;
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterNode) {
	 		listener.enterNode(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitNode) {
	 		listener.exitNode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitNode) {
			return visitor.visitNode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HeaderContext extends ParserRuleContext {
	public _header_key!: Token;
	public _header_value!: Token;
	constructor(parser?: YarnSpinnerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public HEADER_DELIMITER(): TerminalNode {
		return this.getToken(YarnSpinnerParser.HEADER_DELIMITER, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(YarnSpinnerParser.ID, 0);
	}
	public REST_OF_LINE(): TerminalNode {
		return this.getToken(YarnSpinnerParser.REST_OF_LINE, 0);
	}
    public get ruleIndex(): number {
    	return YarnSpinnerParser.RULE_header;
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterHeader) {
	 		listener.enterHeader(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitHeader) {
	 		listener.exitHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitHeader) {
			return visitor.visitHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BodyContext extends ParserRuleContext {
	constructor(parser?: YarnSpinnerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return YarnSpinnerParser.RULE_body;
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterBody) {
	 		listener.enterBody(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitBody) {
	 		listener.exitBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitBody) {
			return visitor.visitBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: YarnSpinnerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public line_statement(): Line_statementContext {
		return this.getTypedRuleContext(Line_statementContext, 0) as Line_statementContext;
	}
	public if_statement(): If_statementContext {
		return this.getTypedRuleContext(If_statementContext, 0) as If_statementContext;
	}
	public set_statement(): Set_statementContext {
		return this.getTypedRuleContext(Set_statementContext, 0) as Set_statementContext;
	}
	public shortcut_option_statement(): Shortcut_option_statementContext {
		return this.getTypedRuleContext(Shortcut_option_statementContext, 0) as Shortcut_option_statementContext;
	}
	public call_statement(): Call_statementContext {
		return this.getTypedRuleContext(Call_statementContext, 0) as Call_statementContext;
	}
	public command_statement(): Command_statementContext {
		return this.getTypedRuleContext(Command_statementContext, 0) as Command_statementContext;
	}
	public declare_statement(): Declare_statementContext {
		return this.getTypedRuleContext(Declare_statementContext, 0) as Declare_statementContext;
	}
	public jump_statement(): Jump_statementContext {
		return this.getTypedRuleContext(Jump_statementContext, 0) as Jump_statementContext;
	}
	public INDENT(): TerminalNode {
		return this.getToken(YarnSpinnerParser.INDENT, 0);
	}
	public DEDENT(): TerminalNode {
		return this.getToken(YarnSpinnerParser.DEDENT, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return YarnSpinnerParser.RULE_statement;
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Line_statementContext extends ParserRuleContext {
	constructor(parser?: YarnSpinnerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public line_formatted_text(): Line_formatted_textContext {
		return this.getTypedRuleContext(Line_formatted_textContext, 0) as Line_formatted_textContext;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(YarnSpinnerParser.NEWLINE, 0);
	}
	public line_condition(): Line_conditionContext {
		return this.getTypedRuleContext(Line_conditionContext, 0) as Line_conditionContext;
	}
	public hashtag_list(): HashtagContext[] {
		return this.getTypedRuleContexts(HashtagContext) as HashtagContext[];
	}
	public hashtag(i: number): HashtagContext {
		return this.getTypedRuleContext(HashtagContext, i) as HashtagContext;
	}
    public get ruleIndex(): number {
    	return YarnSpinnerParser.RULE_line_statement;
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterLine_statement) {
	 		listener.enterLine_statement(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitLine_statement) {
	 		listener.exitLine_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitLine_statement) {
			return visitor.visitLine_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Line_formatted_textContext extends ParserRuleContext {
	constructor(parser?: YarnSpinnerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXPRESSION_START_list(): TerminalNode[] {
	    	return this.getTokens(YarnSpinnerParser.EXPRESSION_START);
	}
	public EXPRESSION_START(i: number): TerminalNode {
		return this.getToken(YarnSpinnerParser.EXPRESSION_START, i);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public EXPRESSION_END_list(): TerminalNode[] {
	    	return this.getTokens(YarnSpinnerParser.EXPRESSION_END);
	}
	public EXPRESSION_END(i: number): TerminalNode {
		return this.getToken(YarnSpinnerParser.EXPRESSION_END, i);
	}
	public TEXT_list(): TerminalNode[] {
	    	return this.getTokens(YarnSpinnerParser.TEXT);
	}
	public TEXT(i: number): TerminalNode {
		return this.getToken(YarnSpinnerParser.TEXT, i);
	}
    public get ruleIndex(): number {
    	return YarnSpinnerParser.RULE_line_formatted_text;
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterLine_formatted_text) {
	 		listener.enterLine_formatted_text(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitLine_formatted_text) {
	 		listener.exitLine_formatted_text(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitLine_formatted_text) {
			return visitor.visitLine_formatted_text(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HashtagContext extends ParserRuleContext {
	public _text!: Token;
	constructor(parser?: YarnSpinnerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public HASHTAG(): TerminalNode {
		return this.getToken(YarnSpinnerParser.HASHTAG, 0);
	}
	public HASHTAG_TEXT(): TerminalNode {
		return this.getToken(YarnSpinnerParser.HASHTAG_TEXT, 0);
	}
    public get ruleIndex(): number {
    	return YarnSpinnerParser.RULE_hashtag;
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterHashtag) {
	 		listener.enterHashtag(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitHashtag) {
	 		listener.exitHashtag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitHashtag) {
			return visitor.visitHashtag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Line_conditionContext extends ParserRuleContext {
	constructor(parser?: YarnSpinnerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMAND_START(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_START, 0);
	}
	public COMMAND_IF(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_IF, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public COMMAND_END(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_END, 0);
	}
    public get ruleIndex(): number {
    	return YarnSpinnerParser.RULE_line_condition;
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterLine_condition) {
	 		listener.enterLine_condition(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitLine_condition) {
	 		listener.exitLine_condition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitLine_condition) {
			return visitor.visitLine_condition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: YarnSpinnerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return YarnSpinnerParser.RULE_expression;
	}
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ExpParensContext extends ExpressionContext {
	constructor(parser: YarnSpinnerParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(YarnSpinnerParser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(YarnSpinnerParser.RPAREN, 0);
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterExpParens) {
	 		listener.enterExpParens(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitExpParens) {
	 		listener.exitExpParens(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitExpParens) {
			return visitor.visitExpParens(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpMultDivModContext extends ExpressionContext {
	public _op!: Token;
	constructor(parser: YarnSpinnerParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public OPERATOR_MATHS_MULTIPLICATION(): TerminalNode {
		return this.getToken(YarnSpinnerParser.OPERATOR_MATHS_MULTIPLICATION, 0);
	}
	public OPERATOR_MATHS_DIVISION(): TerminalNode {
		return this.getToken(YarnSpinnerParser.OPERATOR_MATHS_DIVISION, 0);
	}
	public OPERATOR_MATHS_MODULUS(): TerminalNode {
		return this.getToken(YarnSpinnerParser.OPERATOR_MATHS_MODULUS, 0);
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterExpMultDivMod) {
	 		listener.enterExpMultDivMod(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitExpMultDivMod) {
	 		listener.exitExpMultDivMod(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitExpMultDivMod) {
			return visitor.visitExpMultDivMod(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpComparisonContext extends ExpressionContext {
	public _op!: Token;
	constructor(parser: YarnSpinnerParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public OPERATOR_LOGICAL_LESS_THAN_EQUALS(): TerminalNode {
		return this.getToken(YarnSpinnerParser.OPERATOR_LOGICAL_LESS_THAN_EQUALS, 0);
	}
	public OPERATOR_LOGICAL_GREATER_THAN_EQUALS(): TerminalNode {
		return this.getToken(YarnSpinnerParser.OPERATOR_LOGICAL_GREATER_THAN_EQUALS, 0);
	}
	public OPERATOR_LOGICAL_LESS(): TerminalNode {
		return this.getToken(YarnSpinnerParser.OPERATOR_LOGICAL_LESS, 0);
	}
	public OPERATOR_LOGICAL_GREATER(): TerminalNode {
		return this.getToken(YarnSpinnerParser.OPERATOR_LOGICAL_GREATER, 0);
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterExpComparison) {
	 		listener.enterExpComparison(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitExpComparison) {
	 		listener.exitExpComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitExpComparison) {
			return visitor.visitExpComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpNegativeContext extends ExpressionContext {
	public _op!: Token;
	constructor(parser: YarnSpinnerParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public OPERATOR_MATHS_SUBTRACTION(): TerminalNode {
		return this.getToken(YarnSpinnerParser.OPERATOR_MATHS_SUBTRACTION, 0);
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterExpNegative) {
	 		listener.enterExpNegative(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitExpNegative) {
	 		listener.exitExpNegative(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitExpNegative) {
			return visitor.visitExpNegative(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpAndOrXorContext extends ExpressionContext {
	public _op!: Token;
	constructor(parser: YarnSpinnerParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public OPERATOR_LOGICAL_AND(): TerminalNode {
		return this.getToken(YarnSpinnerParser.OPERATOR_LOGICAL_AND, 0);
	}
	public OPERATOR_LOGICAL_OR(): TerminalNode {
		return this.getToken(YarnSpinnerParser.OPERATOR_LOGICAL_OR, 0);
	}
	public OPERATOR_LOGICAL_XOR(): TerminalNode {
		return this.getToken(YarnSpinnerParser.OPERATOR_LOGICAL_XOR, 0);
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterExpAndOrXor) {
	 		listener.enterExpAndOrXor(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitExpAndOrXor) {
	 		listener.exitExpAndOrXor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitExpAndOrXor) {
			return visitor.visitExpAndOrXor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpAddSubContext extends ExpressionContext {
	public _op!: Token;
	constructor(parser: YarnSpinnerParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public OPERATOR_MATHS_ADDITION(): TerminalNode {
		return this.getToken(YarnSpinnerParser.OPERATOR_MATHS_ADDITION, 0);
	}
	public OPERATOR_MATHS_SUBTRACTION(): TerminalNode {
		return this.getToken(YarnSpinnerParser.OPERATOR_MATHS_SUBTRACTION, 0);
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterExpAddSub) {
	 		listener.enterExpAddSub(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitExpAddSub) {
	 		listener.exitExpAddSub(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitExpAddSub) {
			return visitor.visitExpAddSub(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpNotContext extends ExpressionContext {
	public _op!: Token;
	constructor(parser: YarnSpinnerParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public OPERATOR_LOGICAL_NOT(): TerminalNode {
		return this.getToken(YarnSpinnerParser.OPERATOR_LOGICAL_NOT, 0);
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterExpNot) {
	 		listener.enterExpNot(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitExpNot) {
	 		listener.exitExpNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitExpNot) {
			return visitor.visitExpNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpValueContext extends ExpressionContext {
	constructor(parser: YarnSpinnerParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterExpValue) {
	 		listener.enterExpValue(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitExpValue) {
	 		listener.exitExpValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitExpValue) {
			return visitor.visitExpValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpEqualityContext extends ExpressionContext {
	public _op!: Token;
	constructor(parser: YarnSpinnerParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public OPERATOR_LOGICAL_EQUALS(): TerminalNode {
		return this.getToken(YarnSpinnerParser.OPERATOR_LOGICAL_EQUALS, 0);
	}
	public OPERATOR_LOGICAL_NOT_EQUALS(): TerminalNode {
		return this.getToken(YarnSpinnerParser.OPERATOR_LOGICAL_NOT_EQUALS, 0);
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterExpEquality) {
	 		listener.enterExpEquality(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitExpEquality) {
	 		listener.exitExpEquality(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitExpEquality) {
			return visitor.visitExpEquality(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parser?: YarnSpinnerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return YarnSpinnerParser.RULE_value;
	}
	public copyFrom(ctx: ValueContext): void {
		super.copyFrom(ctx);
	}
}
export class ValueNullContext extends ValueContext {
	constructor(parser: YarnSpinnerParser, ctx: ValueContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public KEYWORD_NULL(): TerminalNode {
		return this.getToken(YarnSpinnerParser.KEYWORD_NULL, 0);
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterValueNull) {
	 		listener.enterValueNull(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitValueNull) {
	 		listener.exitValueNull(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitValueNull) {
			return visitor.visitValueNull(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValueNumberContext extends ValueContext {
	constructor(parser: YarnSpinnerParser, ctx: ValueContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(YarnSpinnerParser.NUMBER, 0);
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterValueNumber) {
	 		listener.enterValueNumber(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitValueNumber) {
	 		listener.exitValueNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitValueNumber) {
			return visitor.visitValueNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValueTrueContext extends ValueContext {
	constructor(parser: YarnSpinnerParser, ctx: ValueContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public KEYWORD_TRUE(): TerminalNode {
		return this.getToken(YarnSpinnerParser.KEYWORD_TRUE, 0);
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterValueTrue) {
	 		listener.enterValueTrue(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitValueTrue) {
	 		listener.exitValueTrue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitValueTrue) {
			return visitor.visitValueTrue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValueFalseContext extends ValueContext {
	constructor(parser: YarnSpinnerParser, ctx: ValueContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public KEYWORD_FALSE(): TerminalNode {
		return this.getToken(YarnSpinnerParser.KEYWORD_FALSE, 0);
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterValueFalse) {
	 		listener.enterValueFalse(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitValueFalse) {
	 		listener.exitValueFalse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitValueFalse) {
			return visitor.visitValueFalse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValueFuncContext extends ValueContext {
	constructor(parser: YarnSpinnerParser, ctx: ValueContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public function_call(): Function_callContext {
		return this.getTypedRuleContext(Function_callContext, 0) as Function_callContext;
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterValueFunc) {
	 		listener.enterValueFunc(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitValueFunc) {
	 		listener.exitValueFunc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitValueFunc) {
			return visitor.visitValueFunc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValueVarContext extends ValueContext {
	constructor(parser: YarnSpinnerParser, ctx: ValueContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterValueVar) {
	 		listener.enterValueVar(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitValueVar) {
	 		listener.exitValueVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitValueVar) {
			return visitor.visitValueVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValueStringContext extends ValueContext {
	constructor(parser: YarnSpinnerParser, ctx: ValueContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public STRING(): TerminalNode {
		return this.getToken(YarnSpinnerParser.STRING, 0);
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterValueString) {
	 		listener.enterValueString(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitValueString) {
	 		listener.exitValueString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitValueString) {
			return visitor.visitValueString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	constructor(parser?: YarnSpinnerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VAR_ID(): TerminalNode {
		return this.getToken(YarnSpinnerParser.VAR_ID, 0);
	}
    public get ruleIndex(): number {
    	return YarnSpinnerParser.RULE_variable;
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterVariable) {
	 		listener.enterVariable(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitVariable) {
	 		listener.exitVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitVariable) {
			return visitor.visitVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_callContext extends ParserRuleContext {
	constructor(parser?: YarnSpinnerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FUNC_ID(): TerminalNode {
		return this.getToken(YarnSpinnerParser.FUNC_ID, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(YarnSpinnerParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(YarnSpinnerParser.RPAREN, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(YarnSpinnerParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return YarnSpinnerParser.RULE_function_call;
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterFunction_call) {
	 		listener.enterFunction_call(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitFunction_call) {
	 		listener.exitFunction_call(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitFunction_call) {
			return visitor.visitFunction_call(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_statementContext extends ParserRuleContext {
	constructor(parser?: YarnSpinnerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public if_clause(): If_clauseContext {
		return this.getTypedRuleContext(If_clauseContext, 0) as If_clauseContext;
	}
	public COMMAND_START(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_START, 0);
	}
	public COMMAND_ENDIF(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_ENDIF, 0);
	}
	public COMMAND_END(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_END, 0);
	}
	public else_if_clause_list(): Else_if_clauseContext[] {
		return this.getTypedRuleContexts(Else_if_clauseContext) as Else_if_clauseContext[];
	}
	public else_if_clause(i: number): Else_if_clauseContext {
		return this.getTypedRuleContext(Else_if_clauseContext, i) as Else_if_clauseContext;
	}
	public else_clause(): Else_clauseContext {
		return this.getTypedRuleContext(Else_clauseContext, 0) as Else_clauseContext;
	}
    public get ruleIndex(): number {
    	return YarnSpinnerParser.RULE_if_statement;
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterIf_statement) {
	 		listener.enterIf_statement(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitIf_statement) {
	 		listener.exitIf_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitIf_statement) {
			return visitor.visitIf_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_clauseContext extends ParserRuleContext {
	constructor(parser?: YarnSpinnerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMAND_START(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_START, 0);
	}
	public COMMAND_IF(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_IF, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public COMMAND_END(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_END, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return YarnSpinnerParser.RULE_if_clause;
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterIf_clause) {
	 		listener.enterIf_clause(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitIf_clause) {
	 		listener.exitIf_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitIf_clause) {
			return visitor.visitIf_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Else_if_clauseContext extends ParserRuleContext {
	constructor(parser?: YarnSpinnerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMAND_START(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_START, 0);
	}
	public COMMAND_ELSEIF(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_ELSEIF, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public COMMAND_END(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_END, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return YarnSpinnerParser.RULE_else_if_clause;
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterElse_if_clause) {
	 		listener.enterElse_if_clause(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitElse_if_clause) {
	 		listener.exitElse_if_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitElse_if_clause) {
			return visitor.visitElse_if_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Else_clauseContext extends ParserRuleContext {
	constructor(parser?: YarnSpinnerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMAND_START(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_START, 0);
	}
	public COMMAND_ELSE(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_ELSE, 0);
	}
	public COMMAND_END(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_END, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return YarnSpinnerParser.RULE_else_clause;
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterElse_clause) {
	 		listener.enterElse_clause(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitElse_clause) {
	 		listener.exitElse_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitElse_clause) {
			return visitor.visitElse_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Set_statementContext extends ParserRuleContext {
	public _op!: Token;
	constructor(parser?: YarnSpinnerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMAND_START(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_START, 0);
	}
	public COMMAND_SET(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_SET, 0);
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public COMMAND_END(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_END, 0);
	}
	public OPERATOR_ASSIGNMENT(): TerminalNode {
		return this.getToken(YarnSpinnerParser.OPERATOR_ASSIGNMENT, 0);
	}
	public OPERATOR_MATHS_MULTIPLICATION_EQUALS(): TerminalNode {
		return this.getToken(YarnSpinnerParser.OPERATOR_MATHS_MULTIPLICATION_EQUALS, 0);
	}
	public OPERATOR_MATHS_DIVISION_EQUALS(): TerminalNode {
		return this.getToken(YarnSpinnerParser.OPERATOR_MATHS_DIVISION_EQUALS, 0);
	}
	public OPERATOR_MATHS_MODULUS_EQUALS(): TerminalNode {
		return this.getToken(YarnSpinnerParser.OPERATOR_MATHS_MODULUS_EQUALS, 0);
	}
	public OPERATOR_MATHS_ADDITION_EQUALS(): TerminalNode {
		return this.getToken(YarnSpinnerParser.OPERATOR_MATHS_ADDITION_EQUALS, 0);
	}
	public OPERATOR_MATHS_SUBTRACTION_EQUALS(): TerminalNode {
		return this.getToken(YarnSpinnerParser.OPERATOR_MATHS_SUBTRACTION_EQUALS, 0);
	}
    public get ruleIndex(): number {
    	return YarnSpinnerParser.RULE_set_statement;
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterSet_statement) {
	 		listener.enterSet_statement(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitSet_statement) {
	 		listener.exitSet_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitSet_statement) {
			return visitor.visitSet_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Call_statementContext extends ParserRuleContext {
	constructor(parser?: YarnSpinnerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMAND_START(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_START, 0);
	}
	public COMMAND_CALL(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_CALL, 0);
	}
	public function_call(): Function_callContext {
		return this.getTypedRuleContext(Function_callContext, 0) as Function_callContext;
	}
	public COMMAND_END(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_END, 0);
	}
    public get ruleIndex(): number {
    	return YarnSpinnerParser.RULE_call_statement;
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterCall_statement) {
	 		listener.enterCall_statement(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitCall_statement) {
	 		listener.exitCall_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitCall_statement) {
			return visitor.visitCall_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Command_statementContext extends ParserRuleContext {
	constructor(parser?: YarnSpinnerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMAND_START(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_START, 0);
	}
	public command_formatted_text(): Command_formatted_textContext {
		return this.getTypedRuleContext(Command_formatted_textContext, 0) as Command_formatted_textContext;
	}
	public COMMAND_TEXT_END(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_TEXT_END, 0);
	}
	public hashtag_list(): HashtagContext[] {
		return this.getTypedRuleContexts(HashtagContext) as HashtagContext[];
	}
	public hashtag(i: number): HashtagContext {
		return this.getTypedRuleContext(HashtagContext, i) as HashtagContext;
	}
    public get ruleIndex(): number {
    	return YarnSpinnerParser.RULE_command_statement;
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterCommand_statement) {
	 		listener.enterCommand_statement(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitCommand_statement) {
	 		listener.exitCommand_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitCommand_statement) {
			return visitor.visitCommand_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Command_formatted_textContext extends ParserRuleContext {
	constructor(parser?: YarnSpinnerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMAND_TEXT_list(): TerminalNode[] {
	    	return this.getTokens(YarnSpinnerParser.COMMAND_TEXT);
	}
	public COMMAND_TEXT(i: number): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_TEXT, i);
	}
	public COMMAND_EXPRESSION_START_list(): TerminalNode[] {
	    	return this.getTokens(YarnSpinnerParser.COMMAND_EXPRESSION_START);
	}
	public COMMAND_EXPRESSION_START(i: number): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_EXPRESSION_START, i);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public EXPRESSION_END_list(): TerminalNode[] {
	    	return this.getTokens(YarnSpinnerParser.EXPRESSION_END);
	}
	public EXPRESSION_END(i: number): TerminalNode {
		return this.getToken(YarnSpinnerParser.EXPRESSION_END, i);
	}
    public get ruleIndex(): number {
    	return YarnSpinnerParser.RULE_command_formatted_text;
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterCommand_formatted_text) {
	 		listener.enterCommand_formatted_text(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitCommand_formatted_text) {
	 		listener.exitCommand_formatted_text(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitCommand_formatted_text) {
			return visitor.visitCommand_formatted_text(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Shortcut_option_statementContext extends ParserRuleContext {
	constructor(parser?: YarnSpinnerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public shortcut_option_list(): Shortcut_optionContext[] {
		return this.getTypedRuleContexts(Shortcut_optionContext) as Shortcut_optionContext[];
	}
	public shortcut_option(i: number): Shortcut_optionContext {
		return this.getTypedRuleContext(Shortcut_optionContext, i) as Shortcut_optionContext;
	}
	public BLANK_LINE_FOLLOWING_OPTION(): TerminalNode {
		return this.getToken(YarnSpinnerParser.BLANK_LINE_FOLLOWING_OPTION, 0);
	}
    public get ruleIndex(): number {
    	return YarnSpinnerParser.RULE_shortcut_option_statement;
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterShortcut_option_statement) {
	 		listener.enterShortcut_option_statement(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitShortcut_option_statement) {
	 		listener.exitShortcut_option_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitShortcut_option_statement) {
			return visitor.visitShortcut_option_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Shortcut_optionContext extends ParserRuleContext {
	constructor(parser?: YarnSpinnerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SHORTCUT_ARROW(): TerminalNode {
		return this.getToken(YarnSpinnerParser.SHORTCUT_ARROW, 0);
	}
	public line_statement(): Line_statementContext {
		return this.getTypedRuleContext(Line_statementContext, 0) as Line_statementContext;
	}
	public INDENT(): TerminalNode {
		return this.getToken(YarnSpinnerParser.INDENT, 0);
	}
	public DEDENT(): TerminalNode {
		return this.getToken(YarnSpinnerParser.DEDENT, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return YarnSpinnerParser.RULE_shortcut_option;
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterShortcut_option) {
	 		listener.enterShortcut_option(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitShortcut_option) {
	 		listener.exitShortcut_option(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitShortcut_option) {
			return visitor.visitShortcut_option(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Declare_statementContext extends ParserRuleContext {
	public _type_!: Token;
	constructor(parser?: YarnSpinnerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMAND_START(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_START, 0);
	}
	public COMMAND_DECLARE(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_DECLARE, 0);
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public OPERATOR_ASSIGNMENT(): TerminalNode {
		return this.getToken(YarnSpinnerParser.OPERATOR_ASSIGNMENT, 0);
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public COMMAND_END(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_END, 0);
	}
	public EXPRESSION_AS(): TerminalNode {
		return this.getToken(YarnSpinnerParser.EXPRESSION_AS, 0);
	}
	public FUNC_ID(): TerminalNode {
		return this.getToken(YarnSpinnerParser.FUNC_ID, 0);
	}
    public get ruleIndex(): number {
    	return YarnSpinnerParser.RULE_declare_statement;
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterDeclare_statement) {
	 		listener.enterDeclare_statement(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitDeclare_statement) {
	 		listener.exitDeclare_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitDeclare_statement) {
			return visitor.visitDeclare_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Jump_statementContext extends ParserRuleContext {
	constructor(parser?: YarnSpinnerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return YarnSpinnerParser.RULE_jump_statement;
	}
	public copyFrom(ctx: Jump_statementContext): void {
		super.copyFrom(ctx);
	}
}
export class JumpToNodeNameContext extends Jump_statementContext {
	public _destination!: Token;
	constructor(parser: YarnSpinnerParser, ctx: Jump_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COMMAND_START(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_START, 0);
	}
	public COMMAND_JUMP(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_JUMP, 0);
	}
	public COMMAND_END(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_END, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(YarnSpinnerParser.ID, 0);
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterJumpToNodeName) {
	 		listener.enterJumpToNodeName(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitJumpToNodeName) {
	 		listener.exitJumpToNodeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitJumpToNodeName) {
			return visitor.visitJumpToNodeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class JumpToExpressionContext extends Jump_statementContext {
	constructor(parser: YarnSpinnerParser, ctx: Jump_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COMMAND_START(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_START, 0);
	}
	public COMMAND_JUMP(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_JUMP, 0);
	}
	public EXPRESSION_START(): TerminalNode {
		return this.getToken(YarnSpinnerParser.EXPRESSION_START, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public EXPRESSION_END(): TerminalNode {
		return this.getToken(YarnSpinnerParser.EXPRESSION_END, 0);
	}
	public COMMAND_END(): TerminalNode {
		return this.getToken(YarnSpinnerParser.COMMAND_END, 0);
	}
	public enterRule(listener: YarnSpinnerParserListener): void {
	    if(listener.enterJumpToExpression) {
	 		listener.enterJumpToExpression(this);
		}
	}
	public exitRule(listener: YarnSpinnerParserListener): void {
	    if(listener.exitJumpToExpression) {
	 		listener.exitJumpToExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YarnSpinnerParserVisitor<Result>): Result {
		if (visitor.visitJumpToExpression) {
			return visitor.visitJumpToExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

import { CommonToken, InputStream } from "antlr4";
import { TokenSource } from "antlr4/src/antlr4/TokenSource";

/**
 * Modified CommonToken Class to allow for undefined values
 * as the js implementations can handle it.
 */
export declare class CommonTokenModified extends CommonToken {
  constructor(
    source: [TokenSource, InputStream] | undefined,
    type: number | undefined,
    channel: number | undefined,
    start: number | undefined,
    stop: number | undefined
  );
}

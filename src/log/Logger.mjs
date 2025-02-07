function consoleMethod() {
  if (this.enabled) {
    const args = Array.prototype.slice.call(arguments);
    const method = args[0];

    // if (args.length > 1)
    // args[0] = logPrefix + args[0];

    console[method].apply(console, [this.prefix].concat(args.slice(1)));
  }
}

/**
 * Object to handle console outputs.
 * @class
 * @param {boolean} enabled
 * @example
 * const logger = new Logger();
 * logger.prefix = "test log:";
 *
 * logger.log("Hello world!");
 * logger.error("foo bar");
 */
function Logger(enabled = true) {
  /**
   * Enable/disable log output
   * @public
   * @type {boolean}
   * @default true
   */
  this.enabled = enabled;

  /**
   * Prefix string to be prepended to log output
   * @public
   * @type {string}
   * @default ""
   */
  this.prefix = "";
}

/**
 * Outputs log to console.
 * @memberof Logger
 * @function log
 */
Logger.prototype.log = function () {
  const args = Array.prototype.slice.call(arguments);
  consoleMethod.apply(this, ["log"].concat(args));
};

/**
 * Outputs error to console.
 * @memberof Logger
 * @function error
 */
Logger.prototype.error = function () {
  const args = Array.prototype.slice.call(arguments);
  consoleMethod.apply(this, ["error"].concat(args));
};

export default Logger;

function main() {
  const logger = new Logger();
  logger.prefix = "test log:";

  logger.log("Hello world!");
  logger.error("foo bar");
}

main();

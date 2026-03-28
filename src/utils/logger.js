const prefix = (level) => `[${level}]`;

const logger = {
  info: (...args) => console.log(prefix('INFO'), ...args),
  warn: (...args) => console.warn(prefix('WARN'), ...args),
  error: (...args) => console.error(prefix('ERROR'), ...args),
  fatal: (...args) => console.error(prefix('FATAL'), ...args),
  debug: (...args) => console.log(prefix('DEBUG'), ...args),
};

export default logger;

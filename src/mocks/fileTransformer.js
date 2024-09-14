import * as path from 'path';

export function process(src, filename) {
  return {
    code: `module.exports = ${JSON.stringify(path.basename(filename))};`,
  };
}

function process(src, filename) {
  return {
    code: `module.exports = ${JSON.stringify(path.basename(filename))};`,
  };
}

module.exports = { process };
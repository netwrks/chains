let _d = {}, config = { label: 'RESET' }, t = 0;
const { guide, objCombine } = require('../utils');

module.exports = r => d => {
  const Chain = r();
  const D = { ..._d, ...d };
  if (t<1) {
    Chain.config.lastAccessed = new Date().getTime();
    guide(
      ['[CHAIN] refreshed',0],
      [`[${config.label}]`,2,Chain.config],
      [`[//${config.label}]`,2],
    );
    i = 1;
  };
  return r(D);
}

module.exports = r => d => {
  let _d = {}, config = { label: 'SKIP' }, t = 0;
  const { guide } = require('../utils');
  const D = { ..._d, ...d };
  guide([`[${config.label}]`,2,D]);
  t = 0;
  return r(D);
};

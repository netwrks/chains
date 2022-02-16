module.exports = r => d => {
  let _d = {}, config = { label: 'SET' }, t = 0;
  const { guide, objCombine } = require('../utils');
  const D = { ..._d, ...d };
  if (r && t<1) {
    guide(
      [`[${config.label}]`,2,D],
      [`[//${config.label}]`,2],
    );
  };
  t = 0;
  return r(D);
}

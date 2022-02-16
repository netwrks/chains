module.exports = (o) => {
  let config = { label: 'VIEW' }, flag = 0;
  const LinkItem = require('./link-item');
  return LinkItem({
    ...o,
    msgs: [
      [`[${config.label}]`,2],
    ],
    onActive: data => {
      console.log('[LINK] onActive')
      flag++;
      o.render(data);
    },
    onResolve: data => {
      console.log('[LINK] onResolve')
      flag++;
      o.render(data);
    },
  });
};

let
  c = { createdAt: new Date().getTime(), dev: window.location.host.includes('localhost'), ready: 0, time: 0, updatedAt: new Date().getTime() },
  col = x => `color:rgb(${[[255,0,0],[255,189,0],[43,201,101],[0,100,255],[234,51,88],[100,100,100]][x||5]});`,
  con = require('./conf.json'),
  method = data => ({
    add: (x, y) => data[x] = y,
    all: () => data.all,
    del: x => delete data[x],
    doc: x => data.list.forEach(y => prnt(x,` ${y}`)),
    end: x => Object.assign(data,x),
    get: x => data[x] || prnt(0),
  }),
  prnt = (x, y, z) => !!c.dev ? console.log(`${con.chain.ic}${x.ic}%c${y ? (con[y] ? con[y].id[0] : y) : '💀'}`, col(z)) : null,
  t = [0,0];

this.config = id => ({ ...c, link: con[id||'chain'] });
this.panel = (config = {}, data = {}, actions = {}, pan = {}) => {
  let methods = method(data);
  this.timer(config.createdAt - new Date().getTime());
  prnt(config.link, `⏱️${t[0]}ms`);
  Object.keys(methods).map(x => pan[x] = methods[x]);
  Object.keys(actions).map(x => pan[x] = actions[x]);
  this.timer(0);
  return pan;
};
this.prnt = prnt;
this.timer = (x = 0) => t = (x < 0) ? [0, 0] : [t[0] + t[1], x || 0];
this.typeof = (x, y) => x ? (typeof x === y) : false;

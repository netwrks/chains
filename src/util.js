let
  c = {
    createdAt: new Date().getTime(),
    dev: window.location.host.includes('localhost'),
    ready: 0,
    time: 0,
    updatedAt: new Date().getTime(),
  },
  col = x => `color:rgb(${[[255,0,0],[255,189,0],[43,201,101],[0,100,255],[234,51,88],[100,100,100]][x||5]});`,
  con = require('./conf.json'),
  end = x => {
    console.groupEnd();
    timer(0);
    return x;
  },
  link = x => require(`./link/${x}`),
  mthd = data => ({
    add: (x, y) => data[x] = y,
    all: () => data.all,
    del: x => delete data[x],
    doc: x => data.list.forEach(y => prnt(x,` ${y}`)),
    end: x => Object.assign(data,x),
    get: x => data[x] || prnt(0),
  }),
  prnt = (x, y, z) => !!c.dev ? console.log(`${con.chain.ic}${x.ic}%c${y ? (con[y] ? con[y].id[0] : y) : '💀'}`, col(z)) : null,
  t = [0,0],
  timer = (x = 0) => t = (x < 0) ? [0, 0] : [t[0] + t[1], x || 0];

let
  links = {},
  panel = (config = {}, data, actions = {}, pan = {}) => {
    timer(config.createdAt - new Date().getTime());
    prnt(config.link, `⏱️${t[0]}ms`);
    if (data) {
      let mthds = mthd(data);
      Object.keys(mthds).map(x => pan[x] = mthds[x]);
    }
    Object.keys(actions).map(x => pan[x] = actions[x]);
    timer(0);
    return pan;
  };
  wrapper = (x, y, z=null) => {
    if (x === 'start') timer(-1);
    c.dev && console.group(`${con['chain'].ic}${con['link'].ic}%c 🏁${timer()[0]} ⏱️${timer()[1]}`,`color: rgba(100,100,100);`);
    if (typeof y === 'function') {
      y.call(this, require(`./link/${x}`));
      c.updatedAt = new Date().getTime();
      timer(c.updatedAt - c.createdAt);
    };
    return end(links);
  };

links.util = {
  config: id => ({ ...c, link: con[id||'chain'] }),
  end,
  link,
  panel,
  prnt,
  timer,
  typeof: (x, y) => x ? (typeof x === y) : false,
  wrapper,
};

exports.bruh = () => Link('bruh', null, () => {
  prnt('bruh',` ${new Date().getTime()}`, 5);
  prnt('bruh', `${con['link'].ic} ${con['link'].id}`, 2);
  prnt('bruh', `${con['link'].ic} ⏱️${timer()[0]}ms`,5);
});
exports.elems = [];
exports.end = end;
exports.links = links;
exports.panel = panel;
exports.start = x => {
  c.createdAt = new Date().getTime();
  timer(c.createdAt - new Date().getTime());
  c.dev && console.log(`${con['chain'].ic}${con['start'].ic} 🏁${timer(0)[0]}`);
  return links;
};
exports.test = () => this.end();
exports.util = links.util;

[
  'anchors',
  'dom',
  'done',
  'renders',
  'shortcuts',
  'storage',
  'ui',
  'watch',
].map(x =>
  links[x] = (y,z) => wrapper(x,y,z)
);

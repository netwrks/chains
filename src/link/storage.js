Object.setPrototypeOf(this,require('../util'));
let
  config = this.config('storage'),
  conn = {},
  data = {},
  models = { object: new Object(), persist: localStorage, session: sessionStorage },
  render = (id, val) => {

    console.log(conn, id, val)
    prnt(
      conn[id] ? ` rendering ${id}` : ` ${id} is not a valid render`,
      conn[id] ? 2 : 0,
    );
    if (conn[id]) {
      conn[id].tasks.map(task => {
        Function(task)(val);
      })
    };
  },
  prnt = (x, y = 5) => this.prnt(config.link, x, y);

let cont = (id, type) => new Proxy(models[type || id ||'object'], {
  apply() { prnt(' storage:20 > apply storage method', 2); },
  deleteProperty() { prnt(' storage:24 > deleting a storage container', 2); },
  get(inner, key, proxy) {
    prnt(` getting storage container ${key}`, 3);
    return key === 'all' ? inner : inner[key];
  },
  set(inner, key, value, proxy) {
    switch (true) {
      case inner.set:
        prnt(' adding item to map', 2);
        inner.set(key, value);
        break;
      case inner.setItem:
        prnt(' adding item to Storage', 2);
        inner.setItem(key, value);
        break;
      case !inner[key]:
      case inner[key]:
        inner[key] = value;
        break;
      default:
        prnt(' adding item to object', 2);
        inner[key] = value;
        break;
    }
    if (key && value && inner[key]) {
      prnt(' rerendering storage connection', 2);
      render('persist', inner[key]);
    }
    prnt(' waiting...')
    return this;
  }
});

['persist','session'].map(x => data[x] = cont(x));

module.exports = this.panel(config, data, {
  add: (id, type) => {
    prnt(` adding ${id} container to storage`, 2);
    conn[id] = new Map();
    data[id] = cont(type || id);
    return this;
  },
  addTo: (id, key, val) => {
    data[id][key] = val;
  },
  conn: (id, rend) => {
    prnt(` making a new connection`, 2);
    if (!conn[id]) conn[id] = rend;
    if (!rend) return prnt(` ${id} 💔 ${rend.id}`);
    prnt(` ${id} 💖 ${rend.id}`, 2);
    // render(id)
    return conn[id];
  },
  conns: () => conn,
  exec: (id) => data[id].exec,
  get: id => data[id]
});

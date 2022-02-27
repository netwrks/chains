Object.setPrototypeOf(this,require('../util'));
this.conns = {};
this.msg = (x, y = 5) => this.prnt('storage',x,y);
this.add = ({ id, type }, or = {}) => {
  this.conns[id] = {
    active: new Map(),
    connAt: new Date().getTime(),
    execAt: null,
  };
  this.storage[id] = new Proxy(this.models[type || id || 'object'], {
    get(d, k) {
      switch(true) {
        case d === 'exec':
          // this.tla = new Date().getTime();
          // this.renders[x.id].map(r => (typeof c[0] === 'string' ? Function(r) : r)(c[0]));
          alert('yes');
          break;
        case !!d[k]:
          break;
        default:
          return d[k];
    }},
    set(...c){
      switch(true) {
        case(c[1]==='add'):
          c[0][c[2][0]]=c[2][1];
          break;
        case(c[1]==='del'):
          delete c[0][c[2]];
          break;
        case(c[0].set):
          c[0].set(c[2].id,c[2]);
          break;
        case(c[0].setItem):
          c[0].setItem(c[2].id,c[2]);
          break;
        default:
          break;
      };
      if (this.conns && this.conns[id]) this.conns[id].active.forEach((x,y) => {
        console.log(x,y)
      });
    },
    ...or,
  });
};
this.conn = (id, render = null) => {
  // if render is missing return err
  if (!render) return this.msg('⛔');
  this.conns[id].active.set(render.id, render);
  this.conns[id].execAt = new Date().getTime();
  return this.msg(`${this.conf('storage').link.connect.id[0]}👍`);
};
this.config = this.config();
this.models = {
  memory: new Map(),
  object: new Object(),
  persist: localStorage,
  server: null,
  session: sessionStorage,
};
this.panel = x => this._panel(
  this.config,
  conf => {
    switch(true) {
      case (x && typeof x === 'integer' && x > 0):
      console.log('s')
        return {
          conn: (x,y) => this.conn(x,y),
          doc: y => conf.link.list.forEach(y=>this.msg(y)),
          exec: x => this.renders[x].all,
          task: (x,y) => this.renders[x] = y,
        };
      default:
        return {
          add: this.add,
          all: y => this.storage,
          conf,
          del: y => delete this.storage[y],
          doc: y => conf.link.list.forEach(y=>this.msg(y)),
          get: x => this.storage[x],
          inf: x => console.log(this),
        }
    };
  },
);
this.storage = {};
this.render = x => (x && this.conns) ? this.conns[id].active.forEach(x=> console.log(x)) : this.msg('💾❓')
this.conf('storage').def.store.map(x=>this.add(x));

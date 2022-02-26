Object.setPrototypeOf(this,require('../util'));
this.add = ({ id, type }, or = {}) => {
  // this.renders[id] = [];
  this.storage[id] = new Proxy(this.models[type || id || 'object'], {
    get(...b) {
      console.log(b)
      switch(true) {
        case b[1] === 'render':
          this.renders[x] = y;
          return b[0];
        case b[1]==='renderAll':
          this.tla = new Date().getTime();
          this.renders[x.id].map(r => (typeof c[0] === 'string' ? Function(r) : r)(c[0]));
          return b[0];
        case !!b[0][b[1]]:
          return b[0][b[1]];
        default:
          return b[0];
    }},
    set(...c){
      console.log(c)
      switch(true){
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
    }},
    ...or,
})};
this.config = this.config();
this.models = {
  memory: new Map(),
  object: new Object(),
  persist: localStorage,
  server: null,
  session: sessionStorage,
};
this.panel = (x) => this._panel(
  this.config,
  conf => {
    switch(true) {
      case (x && typeof x === 'integer' && x > 0):
        return {
          doc: y => conf.link.list.forEach(y=>this.prnt('store',` ${y}`,5)),
          render: x => this.renders[x].all,
          task: (x,y) => this.renders[x] = y,
        };
      default:
        return {
          add: this.add,
          all: y => this.storage,
          conf,
          del: y => delete this.storage[y],
          doc: y => conf.link.list.forEach(y=>this.prnt('storage',` ${y}`,5)),
          get: x => this.storage[x],
        }
    };
  },
);
this.storage = {};
this.conf('storage').def.store.map(x=>this.add(x));

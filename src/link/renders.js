let t = this;
Object.setPrototypeOf(this,require('../util'));
this.utl = new Object();
Object.setPrototypeOf(this.utl,require('./'));
this.config = this.config();
this.data = new Proxy({}, {
  get(d,k,p) {
    if (!d[k] && this.panel) this.panel().chn.prnt(0);
    if (k && d[k]) d[k].list.map(y => Function(y)());
    return d[k];
  },
  set(d,id,t){
    if (id === 'list') d[id].list.push(t[1]);
    if (!d[id]) d[id] = {
      createdAt: new Date().getTime(),
      id,
      list: [...t],
      updatedAt: null,
    };
    if (d[id] && Array.isArray(t)) d[id].list.concat(t);
    return !!d[id] ? d[id] : d;
  }
});
this.panel = () => this._panel(
  this.config,
  conf => ({
    add: (x,y) => this.data[x] = y,
    all: () => this.data.all,
    del: x => delete this.data[x],
    doc: x => this.data.list.forEach(y => this.prnt(x || 'renders', ` ${y}`, 5)),
    end: x => Object.assign(this,x),
    get: x => this.data[x] || this.prnt(0),
    run: x => this.data[x],
    tst: (x, panel = this.panel) => {
      panel().add('test', ['true']);
      panel().run('test');
      panel().del('test');
    },
    utl: this.utl,
  }),
);

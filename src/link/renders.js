Object.setPrototypeOf(this,require('../util'));
this.config = this.config();
this.data = new Proxy({}, {
  get(d,k,p) {
    if (!d[k] && this.panel) this.panel()._.prnt(0);
    if (k && d[k]) d[k].list.map(y => Function(y)());
  },
  set(d,k,t){
    if (k === 'list') d[k].list.push(t[1]);
    if (!d[k]) d[k] = t;
    if (d[k] && Array.isArray(t)) d[k].list.concat(list);
    return !!d[k] ? d[k] : d;
  }
});
this.panel = () => this._panel(
  this.config,
  conf => ({
    _: Object.create(this),
    add: (x,y) => {
      if (this.data[x]) return this
      this.data[x] = {
          createdAt: new Date().getTime(),
          id: x,
          list: [...y],
          updatedAt: new Date().getTime(),
        };

    },
    all: () => this.data.all,
    del: x => delete this.data[x],
    doc: x => this.data.list.forEach(y => this.prnt(x || 'renders', ` ${y}`, 5)),
    end: x => Object.assign(this,x),
    get: x => this.data[x] || this.prnt(0),
    run: x => this.data[x],
    tst: this.test,
}));

this.test = (x, panel = this.panel) => {
  panel().add('test', ['true']);
  panel().run('test');
  panel().del('test');
};

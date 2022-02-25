Object.setPrototypeOf(this,require('./'));
console.log(this)
this.config.createdAt = new Date().getTime();
this.config.updatedAt = this.config.createdAt;
this.data = {
  docs: x => {
    if (this[x]) return this[x].doc();
    this.prnt('👎',0);
  },
  start: () => require('./'),
  storage: () => require('./storage'),
};
this.panel = () => this._panel(
  this.config,
  conf => ({
    add: (x,y) => this.data[x] = y,
    all: () => this.data,
    conf,
    del: y => delete this.data[y],
    doc: y => conf.link.list.forEach(z => this.prnt('shortcuts', `${(y!=='shortcuts')?'📔':''} ${z}`, 5)),
    get: y => this.data[y].bind(require('./')),
  })
);

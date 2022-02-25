Object.setPrototypeOf(this,require('../util'));
this.add = (x,y) => this.data[x] = y;
this.config = this.config();
this.config.createdAt = new Date().getTime();
this.data = {
  start: this._start,
};
this.panel = () => this._panel(
  this.config,
  conf => ({
    add: this.add,
    all: this.data,
    conf,
    del: y => delete this.data[y],
    doc: y => conf.link.list.forEach(y => this.prnt('storage', ` ${y}`, 5)),
    get: x => this.data[x],
  })
);

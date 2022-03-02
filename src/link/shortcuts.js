Object.setPrototypeOf(this,require('../util'));
console.log(this)
this.config.createdAt = new Date().getTime();
this.config.updatedAt = this.config.createdAt;
this.data = {
  docs: x => {
    if (this[x]) return this[x].doc();
    this.prnt('👎',0);
  },
  start: () => this.start,
  storage: () => require('./storage'),
};
this.panel = () => this._panel(
  this.config,
  conf => ({
    add: (x,y) => this.data[x] = y,
    get: y => this.data[y],
  })
);

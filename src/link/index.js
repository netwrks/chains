Object.setPrototypeOf(this,require('../util'));
this.config = this.config();
this.config.createdAt = new Date().getTime();
this.link = (x,y,z=null) => {

  if (x==='start') this.timer(-1);
  this.config.link = this.conf(x);
  this.config.dev && console[`group${(!!this.config.link.dev.collapse > 0) ? 'Collapsed' : ''}`] (
    `${this.conf('chain').id[0]}${this.config.link.id[0]}%c 🏁${this.timer()[0]} ⏱️${this.timer()[1]}`,
    `color: rgba(${this.defaults.color[5]});`,
  );
  if (typeof y === 'function') {
    y.call(this,require(`./${x}`).panel());
    this.config.updatedAt = new Date().getTime();
    this.timer(this.config.updatedAt-this.config.createdAt);
  };
  this.config.dev && console.groupEnd();
  this.timer(0);
  return this;
};

this.anchors = x => this.link('anchors', x);
this.bruh = () => this.link('bruh', null, () => {
  this.prnt('bruh',` ${new Date().getTime()}`, 5);
  this.prnt('bruh', this.config.link.id.join(' '), 2);
  this.prnt('bruh', `${this.config.link.id[0]} ⏱️${this.timer()[0]}ms`,5);
});
this.dom = x => this.link('dom', x);
this.end = x => {
  this.config.dev && console.log(`${this.conf('chain').id[0]}✂️ 🏁${this.timer()[0]}`);
  this.timer(0);
  return this;
};
this.start = x => {
  this.config.createdAt = new Date().getTime();
  this.timer(this.config.createdAt - new Date().getTime());
  this.config.dev && console.log(`${this.conf('chain').id[0]}${this.conf('start').id[0]} 🏁${this.timer(0)[0]}`);
  if (x && Object.isObject(x)) {
    console.log(x)
  }
  return this;
};
this.storage = x => this.link('storage', x);
this.test = () => this.end();
this.shortcuts = x => this.link('shortcuts', x);

this.exists = (x, y) => {
  console.log(typeof y, x)
  try {
    return require(`./link/${x}`);
  }
  catch (e) {
    return y();
  };
  return require(`./link/${x}`);
};
this.conf = x => require('./conf')[x];
this._config = {
  createdAt: new Date().getTime(),
  dev: window.location.host.includes('localhost'),
  ready: 0,
  time: 0,
  updatedAt: new Date().getTime()
};
this.config = x => x ? this._config[x] : this._config;
this.conft = x => ({...this.config,...x});
this.defaults = {
  color: [
    [255,0,0],
    [255,189,0],
    [43,201,101],
    [0,100,255],
    [234,51,88],
    [100,100,100],
  ],
};
this.timer = (x = 0) => {
  this.timer.ms = (x<0) ? [0, 0] : [((this.timer.ms[0] || 0) + (this.timer.ms[1] || 0)), (!x ? (this.timer.ms[1] || 0) : x)];
  return this.timer.ms;
};
this.timer.ms = [0,0];
this.typeof = (x, y) => x ? (typeof x === y) : false;
this._panel = (x, y) => {
  this.prnt(x.link.id[1], `${x.link.id[0]} ⏱️${this.timer(x.createdAt - new Date().getTime())[0]}ms`, 5);
  this.timer(0);
  return y({ ...x, createdAt:new Date().getTime(), updatedAt:new Date().getTime() });
};
this.prnt = (x, y = null,z = 2) => !this._config.dev
  ? console.log(`${this.conf('chain').id[0]}%c${(y && this.conf(y)) ? this.conf(y).id[0] : (y || '💀')}`, `color:rgb(${this.defaults.color[z]})`)
  : null;

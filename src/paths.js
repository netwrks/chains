Object.setPrototypeOf(this,require('../util'));
this.list = [
  ['docs', x => {
    if (this[x]) return this[x].doc();
    this.prnt('👎',0);
    return this;
  }],
  ['start', () => require('./')],
  ['storage', () => require('./storage')],
]

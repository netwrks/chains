module.exports = function() {
  this.msg('.render()',2,this);
  // clear current ui and load default
  this.ui.clear();
  // build new ui
  this.ui.build();
  return this;
};

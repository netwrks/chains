module.exports = function() {
  console.log(this)
  this.moment = new Date().getTime();
  this.msg('.test()',2, arguments);
  if (arguments[0]) {
    if (this.info.updatedAt > this.moment) this.msg('fail',0);
  } else {

    console.log('test');
  }
  this.info.updatedAt = this.moment;
  return this;
};

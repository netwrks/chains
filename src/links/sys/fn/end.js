module.exports = function(...a) {
  let _this = this;
  this.util.print(['.end()',1]));
  if (a[0]) {
    switch(true) {
      case (typeof a[0] === 'string'):
        return _this[a[0]];
      case (typeof a[0] === 'function'):
        a[0](this);
        return _this;
      case (typeof a[0] === 'object'):
        this.fffff = true;
        return {
          ...this,
          ...a[0],
        }
      case (!a||!a[0]):
      default:
        return _this;
    }
  };

  // exit
  return _this;
};

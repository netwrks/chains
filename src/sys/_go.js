module.exports = function(...a) {
  console.log(this)
  history.pushState({},'',this.isKind(a[0],'string')?a[0]:decodeURI(window.location.pathname));
  if(a[0]){this.msg('.go()',2);};
  return this;
};

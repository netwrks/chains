// .time()
module.exports = (function() {
  this.own({
    id: 'time',
    type: 'sys',
    ver: '0.0.01',
  });
  // link functionality here
  if (arguments.length > 0 && typeof arguments[0] === 'function') {
    this.switch(true);
    arguments[0](this);
  }
})
.bind(this);

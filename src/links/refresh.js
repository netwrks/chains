// .refresh()
module.exports = (function() {
  this.own({
    id: 'refresh',
    type: 'sys',
    ver: '0.0.01',
  });
  // link functionality here
  this.self = {
    ...this.self,
    ...(typeof x === 'object') ? x : null,
    updatedAt: new Date().getTime(),
  };
})
.bind(this);

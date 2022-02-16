// .data()
module.exports = (function() {
  this.own({
    id: 'print',
    type: 'sys',
    ver: '0.0.01',
  });
  // link functionality here
  this.lastAccessed = new Date().getTime();
})
.bind(this);

// .switch()
module.exports = (function() {
  this.own({
    id: 'switch',
    type: 'sys',
    ver: '0.0.01',
  });
  // link functionality here
  this.self.isDev = true;
  console.log(this.self)
})
.bind(this);

Object.setPrototypeOf(this,require('./link'));
module.exports = this
  .start()
  .storage(x => {
    console.log(x.get('persist').t)
    x.get('persist').add = ['t',parseInt(x.get('persist').t)+1];
  })
  .shortcuts(x => {
    Object.keys(x.all()).map(z => { this[z] = this.link(z,null,x.get(z)); })
  })
  .end();

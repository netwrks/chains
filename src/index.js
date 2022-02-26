Object.setPrototypeOf(this,require('./link'));

module.exports = this
  .renders(x => {
    x.add('test',['alert(true)'])
  })
  .start()
  .storage(x => {
    x.get('persist').add = ['t',1];
  })
  .end();

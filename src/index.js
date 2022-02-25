Object.setPrototypeOf(this,require('./link'));

module.exports = this
  .start()
  .storage(x => {
    console.log(x);
    x.get('persist').add = ['t',1];
  })
  .shortcuts(x => {
    console.log(x.all())
  })
  .end();


console.log(this.storage())

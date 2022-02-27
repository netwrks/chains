Object.setPrototypeOf(this,require('./link'));

module.exports = this
  .renders(({ add, all, conn, end, get, utl }) => {
    add('test',['alert(true)']);
    console.log(all())
    // utl.storage(1).conn('persist',get('test'));
    // utl.storage(1).exec('persist');
    end();
  })
  .start()
  .storage(({ get }) => {
    get('persist').add = ['t',1];
    console.log(get('persist'))
    get('persist').exec;
  })
  .end();

Object.setPrototypeOf(this,require('./link'));

module.exports = this
  .renders((x) => {
    // storage link
    x.add(
      'test', // set new render task
      [`Chain.storage(x=>console.log(x.get('persist').test))`], // add 1 task
    );
    this.storage(y => {
      y.conn('persist', x.get('test'));
    });
  })
  .start()
  .storage(x => {
    let i = 0;
    // setInterval(() => {
      this.storage(z => z.addTo('persist', 'test', i));
    //   i++;
    // }, 300);
  })
  .end();

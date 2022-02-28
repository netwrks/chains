let chain = require('./util').start();

module.exports = chain
  .renders(({ add, get }) => {
    add(
      'test',
      [`Chain.storage(x=>console.log(x.get('persist').test))`],
    );
    chain.storage(y => y.conn('persist', get('test')));
  })

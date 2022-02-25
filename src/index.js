Object.setPrototypeOf(this,require('./util'));
this.chain=Object.create(this);
Object.setPrototypeOf(this.chain,require('./link'));

// this.chain
//   .start()
//   .storage((x,c) => {
//     console.log(x,x.all())
//   })
//   .shortcuts([
//   ])
//   .end();
//

// this.chain.shortcuts(x => {
//   Object.keys(x.all).map(y => {
//     this.chain[y] = x.get(y);
//   })
// });

console.log(this.chain)
module.exports = this.chain;

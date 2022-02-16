// LINK:
// All links must:
//    1. return an updated setConfObj
//    2. Must be non blocking.

const p = (o,x=null) => new Promise((resolve, reject) => {
  f=0;
  if (f<1) {
    f=1;
    return resolve(o);
  }
  return reject(x||o);
});

const Link = o => {
  console.log('    Link received: ',o);
  o.guide([`[LINK]`,1]);
  return p(o)
    .then(x =>o.fail?o.fail(x):y=>console.log(y))
    .catch(x=>o.success?o.success(x):y=>console.log(y));
};

module.exports = Link;

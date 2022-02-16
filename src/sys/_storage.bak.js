module.exports = function() {
  const prn = require('./_print');
  return new Proxy(
    {
      createdAt: new Date().getTime(),
      isWritable: 1,
      storage: new Map,
      updatedAt: new Date().getTime(),
    },
    {
      get(...a) {
        switch(a[1]) {
          case 'isWritable':
            return prn(a[0].isWritable === 0 ? [`🗄✅.isWritable`,2] : [`🚫↩️.isWritable`,0]);
          case 'list':
            prn([`🗄✅.list`,2,a[0]]);
            return console.log(a[0].storage.entries());
          case 'prof':
            return prn([`🗄✅.prof`,2,a[0]]);
          case 'storage':
            prn([`🗄✅.storage`,2,a[0]]);
            return a[0].storage;
          default:
            if(!['prof'].includes(a[1])&&!a[0][a[1]]){prn([`🚫↩️.${a[1]}`,0]);}else{prn([`🗄.${a[1]}`,a[0][a[1]].length>0?2:0]);};
            return a[0].storage;
        }
      },
      set(...a) {
        // return no msg if obj's isWritable is 0
        if (a[0].isWritable<1) return prn([`🚫↩️.isWritable`,0]);
        // if current k/v pair doesnt exist, add it
        if (!a[0][a[1]]) a[0].storage.set([a[1]],a[2]);
        // return modified data object
        return a[0];
      }
    },
  );
};

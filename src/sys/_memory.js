module.exports = (function() {
  // util.data.memory[
  //
  // ]
  const memory = new Map();

  const prn = require('./_print');
  return new Proxy(
    {
      createdAt: new Date().getTime(),
      destroy: () => null,
      isWritable: 1,
      storage: new Map,
      updatedAt: new Date().getTime(),
    },
    {
      apply(a){
        if(['reset','print'].includes(a[1])||!a[1]||!a[0][a[1]]){return Chain.prototype.util.print([`🚫🔄`,2,a[0]]);};
        return Chain.prototype.util.lock('.apply');
      },
      constructor(a){return null;},
      defineProperty(a){return null;},
      deleteProperty(a){return null;},
      get(...a) {
        switch(a[1]) {
          case 'isWritable':return prn(a[0].isWritable===0?[`🗄✅`,2]:[`🗄🚫↩️`,0]);
          case 'list':return prn([`🗄✅.list`,2,a[0]]);
          case 'open':prn([`🗄🏡`,2]);return a[0].storage;
          case 'prof':
            let prof = {
              '[new_key]: [new_value]': 1,
              destory: 1,
              isWritable: 1,
              list: 1,
              open: 1,
              prof: 1,
              storage: 1,
            };
            a[0].storage.forEach((x,y)=> { prof[y] = 1; });
            return prn([`🗄🧩 `,2,prof]);
          case 'storage':
            prn([`🗄.storage`,2]);
            return a[0].storage;
          default:
            if (a[0].storage.has(a[1])) {
              return (typeof a[0].storage.get(a[1]) === 'function') ? a[0].storage.get(a[1]).bind(this) : a[0].storage.get(a[1]);
            }
            if (!a[0][a[1]]) return prn([`🚫↩️.${a[1]}`,0]);
            return prn([`🗄.${a[1]}`,a[0][a[1]].length>0?2:0]);
        }
      },
      getOwnPropertyDescriptor(a){return null;},
      getPrototypeOf(a){return null;},
      has(a){a.util.print([`.has`,2]);},
      isExtensible(a){return a;},
      ownKeys(){return null;},
      preventExtensions(a){return null;},
      set(...a) {
        console.log(a)
        // return no msg if obj's isWritable is 0
        if (a[0].isWritable<1) return prn([`🚫↩️.isWritable`,0]);
        if (a[1] === 'destroy') {
          console.log(a[0].storage, a[2])
          if (a[0].storage.has(a[2])) {
            a[0].storage.delete(a[2]);
            return prn([`🗄🗑️✅.${a[2]}`,2,a[0]]);
          }
          return prn([`🗄🚫↩️`,0]);
        }
        if (!a[0].storage.has(a[2])) {
          a[0].updatedAt = new Date().getTime();
          a[0].storage.set(a[1],a[2]);
        }

        // if current k/v pair doesnt exist, add it
        // return modified data object
        return a[0];
      },
      setPrototypeOf(a){return null;},
    },
  );
}).bind(this);

module.exports = function() {
  this.msg('.storage()',2,this);
  this.storage = {
    types: {
      memory: new Map(),
      persist:localStorage,
      server:null,
      session:sessionStorage,
    }
  };
  return {
    ...this.storage.types,
  };
};

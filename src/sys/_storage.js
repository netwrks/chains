module.exports = function() {
  this.msg('.storage()',2,this);
  return {
    memory: new Map(),
    persist:localStorage,
    server:null,
    session:sessionStorage,
  };
};

module.exports = function() {
  if(window.location.host.includes('localhost') && arguments){
    let z=[[255,0,0],[255,189,0],[43,201,101],[0,100,255],[234,51,88]];
    Array.from(arguments).map(([m,c,d,cb])=>{
      console.log(`%c⛓${m.toLowerCase()}`,`color: rgb(${z[c]});`);
      if(!!d)console.log(`%c    ${(Array.isArray(d)?d:Object.keys(d)).join('\n    ')}`,`color: rgb(${z[1]});`);
    });
  };
  if(arguments[1]&&typeof arguments[1] === 'function')arguments[1](this);
};

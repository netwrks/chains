export{default as anchors}from'./_anchors';
export{default as memory}from'./_memory';
export{default as profile}from'./_profile';
export{default as register}from'./_register';
export{default as render}from'./_render';
export{default as test}from'./_test';
export{default as ui}from'./_ui';
export{default as view}from'./_view';

export function exit(x,z=null){if(!['info','msg','print'].includes(x)&&this[2]>0){this[0].util.print([`🏁.${x}[⏱️${new Date().getTime()-this[1]}]`,2]);if(!!z)this[0].util.print([JSON.stringify(z),1]);}return this[0];};
export function bruh() {
  let v=0,s=enter.call(this,'bruh',[['🐢 bruh',2]]);
    s[0].util.info(x=>{v=0;});
  return exit.call(s,'bruh',v);
};
export function config(...a) {
  let s=enter.call(this,'anchors',[['.config()', 2]]);
    s[0].util.info.config={};
    s[0].util.info.updatedAt=new Date().getTime();
    if(a[0]&&s[0].util.isKind(a[0],'function')) a[0].bind(this)(s.util.info().config);
  return exit.call(s,'config')
};
export function docs(...a){
  let s=enter.call(this,'docs',[['.docs()', 2]]),c=require('./docs.json');
  if(a[0]){
    c=(a[1]&&c[a[0]][a[1]])?c[a[0]][a[1]]:c[a[0]];
    if(!c.list)return s[0].util.msg('stop',0);
    console.log(`  ${c.list.join('\n  ')}`);
  }
  return exit.call(s,'docs');
};
export function done() {
  let s=enter.call(this,'done',[['done',2]]);
  return exit.call(s,'done')
};
export function enter(x,y,z) {
  let s=(!this.util)?{util:this}:this,t=new Date().getTime(),v=0;
    if(!['info','print'].includes(x)&&Array.isArray(y)&&y.length>0){s.util.info(x=>{v=x.dev;});s.util.print([`👟.${x}[⏱️0]`,2]);};
  return [s,t,v];
};
export function go(...a) {
  let s=enter.call(this,'go',[['go',2]]);
    let nxPath=a[0]?encodeURI(a[0]):decodeURI(window.location.pathname);history.pushState({},'',nxPath);s[0].util.print([`⏳`,1]);while(!window.location.pathname.includes(nxPath)){setTimeout(()=>{s[0].util.print(['⏳',1]);},1000);};
  return exit.call(s,'go');
};
export function info(x) {
  let s=enter.call(this,'info');
  if(x&&typeof x==='function')x({createdAt:new Date().getTime(),dev:!!(window.location.host.includes('localhost')),isWritable:1,type:1,updatedAt:new Date().getTime()});
  return exit.call(s,'info');
};
export function isKind(a,b){return !!(a&&typeof a===b);};
export function link(a,b){return(a&&b)?Object.assign(a, b):null;};
export function msg(a,b,c){let s=enter.call(this,'msg',null,1);s[0].util.print(b>0?b>1?[`${a}`,2,c]:['⚠️',1]:[`⛔`,0]);return s[0];};
export function print(...a){let z=[[255,0,0],[255,189,0],[43,201,101],[0,100,255],[234,51,88]];Array.from(a).map((x)=>{console.log(`%c⛓${x[0]}`,`color: rgb(${z[x[1]>3?2:x[1]]});`);if(x[2])console.log(x[1]===4?x[2][x[3]||'sys']:(Array.isArray(x[2])?`%c    ${x[2]}`:x[1]!=4?`color: rgb(${z[1]});`:''));});};
export function refresh(){window.location.reload();};
export function start(){
  let s=enter.call(this,'start');
  return exit.call(s,'start');
};
export function storage() {
  let v=0,s=enter.call(this,'storage',[['storage',2]]);
  s[0].util.print([`🏁.storage[⏱️${new Date().getTime()-s[1]}]`,2]);
  return require('./_storage').call(s[0]);
};

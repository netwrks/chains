Object.setPrototypeOf(this,require('../util'));
this.anchors = new Proxy({list:[],tla:new Date().getTime()},{
  get(...b){switch(true){
    case(b[1]==='get'):return b[0].list;
    case(!!b[0][b[1]]):return b[0][b[1]];
    default:return b[0];
  }},
  set(...c){switch(true){
    case(c[1]==='add'):c[0][c[2][0]]=c[2][1];break;
    case(c[1]==='del'):delete c[0][c[2]];break;
    case(c[0].set):c[0].set(c[2].id,c[2]);break;
    case(c[0].setItem):c[0].setItem(c[2].id,c[2]);break;
    default:break;}
    if(c[0][c[1]]){
      c[0].tla=new Date().getTime();
      c[0].list.map(r=>(typeof c[0]==='string'?Function(r):r)(c[0]));
    }}});
this.config = this.config();
this.config.createdAt = new Date().getTime();
this.panel = (x) => this._panel(
  this.config,
  () => ({
    add: (x,y) => this.anchors[x] = y,
    all: () => this.anchors.all,
    conf: {
      ...this.config,
      createdAt: new Date().getTime(),
      updatedAt:new Date().getTime(),
    },
    del: x => this.anchors.del = x,
    doc: () => this.conf('anchors').list,
    get: x => this.anchors[x],
}));

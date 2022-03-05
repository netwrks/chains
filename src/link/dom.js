Object.setPrototypeOf(this,require('../util'));
let elems = {};

let
  label = x => {
    console.log(x)
    switch(typeof x) {
      case 'function': return x();
      case 'object': return x;
      case 'string': switch(true) {
        case x.includes('ICON:'): return icon(x.split('ICON:')[1]);
        default: return x;
      }
      default: return '';
    }
  },
  remove = (...x) => x.map(y => {
    switch (true) {
      case y.includes('HAS:'):
        Object.keys(elems).map(x => {
          if (document.getElementById(x)) document.getElementById(x).setAttribute('class', `${document.getElementById(x).getAttribute('class')} remove`)
          console.log('HAS', x);
          delete elems[x];
          return document.getElementById(x) && document.getElementById(x).remove();
        })
        return null;
      case !!elems[y]: delete elems[y]; return document.getElementById(y) && document.getElementById(y).remove();
      default: return null;
    }
  });

let
  config = this.util.config('renders'),
  body = document.querySelector('body'),
  button = (x,y = 0) => {
    if (elems[x.id]) return elems[x.id].get;
    let b = elem({ class: `button ${x.class} ${(x.isActive && x.isActive()) ? 'button-active' : ''}`, id: x.id, type: 'button', visible: true })[0];
    if (x.on) Object.keys(x.on).map(y => this.util.event({ action: x.on[y], id: x.id, type: y }));
    switch(typeof x.label) {
      case 'function': b.appendChild(x.label()); break;
      case 'object': b.appendChild(x.label); break;
      case 'string': switch(true) {
        case x.label.includes('ICON:'): b.innerHTML = this.appConfig('icons')[x.label.split('ICON:')[1]] || 'x' ; break;
        default: b.innerHTML = x.label; break;
      }
      default: break;
    }
    return b;
  },
  clear = x => Array.from(this.util.app().children).filter(y => !y.getAttribute('class').includes(x)).map(y => y.remove()),
  el = (t = 'div', a = {}, data = null, or = 0) => {
    const el = document.createElement(t);
    Object.keys(a).filter(x => x !== 'icon').map(k => el.setAttribute(k, a[k]));
    if (t.cont) el.innerHTML += t.cont;
    el.innerHTML += data;
    if (or === 0) document.getElementById('ntx').appendChild(el);
    return el;
  },
  event = (x, y, z) => document.getElementById(x).addEventListener(y, z),
  find = x => document.getElementById(x),
  form = x => {
    if (elems[x.id]) return elems[x.id].get;
    return elem({
      class:`form ${x.class}`,
      id: x.id,
      inner: [
        ...x.fields.map(f => el('input', {
          ...f,
          class: `input ${f.class}`,
          placeholder: f.placeholder,
          type: f.type || 'text',
        },'')),
        button(x.submit),
      ],
      type:'form',
    })[0];
  },
  goto = (x,y) => {
    if (y) remove(...y);
    switch(true) {
      case x === 'back':
        history.go(-1);
        find('ntx').setAttribute('view',x.split('/')[1] || 'home')
        return this.routes[window.location.pathname || '/home'](this.links);
      case (x[0] === '/'):
        find('ntx').setAttribute('view',x.split('/')[1] || 'home')
        history.pushState({}, '', x);
        return this.routes[x](this.links);
      case (x.indexOf('NEW:') === 0):
        return window.open(x.split('NEW:')[1]);
      default:
        return window.location = x;
    }
  },
  header = (t, x) => {
    let elemType = `h${(t>6)?6:(t<1)?1:t}`;
    let element = (elems[x.id]) ? elems[x.id].get : elem({ class: `header ${x.class}`, id: x.id, type: elemType, visible: true })[0];
    element.innerHTML = x.text;
    return element;
  },
  icon = x => x ? this.appConfig('icons')[x] : 'x',
  // ADDD LABELS TO INPUTS
  input=(...els)=>els.filter(x=>!!x).map((x,i)=>el('input',{...x, class:`input ${x.class}`,no:i}),''),
  nav = (...x) => elem({ ...x, class:`nav ${x.class}`,type:'nav'}),
  prnt = (x, y = 5) => this.util.prnt(config.link, x, y),
  tabs = x => (elems[x.id])
    ? elems[x.id].get
    : elem({
      class:`tabs ${x.class}`,
      id: x.id,
      inner: x.tabs.map(f => {
        let tab = el(
          'button',
          {
            id: f.id,
            class: `tab ${f.class || ''} ${window.location.pathname.includes(f.id) ? 'tab-current' : ''}`,
          },
          label(f.label),
        );
        if (f.on && f.on.click) tab.addEventListener('click', (e) => f.on.click(e))
        return tab;
      }),
    })[0],
  template = (x, y = 'ntx') => document.getElementById(y).replaceChild(x,document.getElementById(y).firstChild),
  title = x => document.title = x,
  win = window;

let elem = (...y) => {
  y.map(x => {
    if (elems[x.id]) return elems[x.id].get;
    let element = el(
      x.type,
      {
        id: x.id,
        class: x.class,
        ...x.params&&x.params,
      },
      x.content || '',
    );
    if (x.inner && Array.isArray(x.inner)) x.inner.filter(x=>!!x).map(y => element.appendChild(y.isElem ? y.self : y));
    elems[x.id] = new Proxy(element, {
      get(inner, key, proxy) { return (key === 'prox') ? proxy : (key === 'isElem') ? true : inner; },
      set(inner, key, value, proxy) {
        switch (true) {
          case key === 'add':
            if (inner[key]) return inner[key];
            inner[key] = value;
            // if (value.inner) {
            //     elems[value.id].get.append(value.inner);
            // }
            break;
          case key === 'on': break;
          case key === 'task':
            prnt(' adding elem task', 3);
            Array.isArray(value) ? value.map(v => inner[key].tasks.push(v)) : inner[key].tasks.push(v);
            return inner;
          case !inner[key]:
            prnt(` adding elem ${key}`, 1);
            inner[key] = {
              createdAt: new Date().getTime(),
              id: key,
              tasks: Array.isArray(value) ? value : [value],
              updatedAt: null,
            };
            return inner[key];
          default:
            prnt(' nothing', 3);
            return inner;
        }
      }
    });
    return document.getElementById(x.id);
  });
  return elems[y[0].id]
};

config.createdAt = new Date().getTime();

module.exports = this.panel(
  config,
  false,
  {
    button,
    clear,
    elem,
    elems,
    form,
    goto,
    header,
    icon,
    input,
    nav,
    remove,
    tabs,
    template,
    title,
  },
);

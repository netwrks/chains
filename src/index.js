Object.setPrototypeOf(this,require('./util').start());
let Chain = this
  .attach('css', 'chains.css')
  .renders(({ add, get }) => {
    add(
      'test',
      [`console.log('persist')`],
    );
    this.storage(y => y.conn('persist', get('test')));
  })
  .dom(({ button, clear, elem, elems, title, template }) => {
  //  clear();
    elem(
      { id: 'app', type: 'div' },
      { id: 'app1', type: 'div' },
    );
    let i = 0;
    button({
      id: 'add-div',
      label: 'add',
      on: {
        click: (z) => {
          elem({ class: 'div', id: `app${i++}`, type: 'div', visible: true });
          title(`${i} elems added`);
        },
      },
    })
    title(`${i} elems added`);
    // console.log(template(el('div', { id: 't' }, 'sweeet')).baseURI = 'https://google.com');
  })
  .watch(({ elem }) =>
    elem('ntx')
      .render('test')
  )
  .done();


  module.exports = Chain;

Object.setPrototypeOf(this,require('./util').start());
let Chain = this
  .renders(({ add, get }) => {
    add(
      'test',
      [`console.log('persist')`],
    );
    this.storage(y => y.conn('persist', get('test')));
  })
  .dom(({ clear, elem, elems, title, template }) => {
    clear();
    elem(
      {
        class: 'app',
        id: 'app',
        type: 'div',
        visible: true,
      },
      {
        class: 'app1',
        id: 'app1',
        type: 'div',
        visible: true,
      },
    );
    title('elems added');
    // console.log(template(el('div', { id: 't' }, 'sweeet')).baseURI = 'https://google.com');
  })
  .watch(({ elem }) =>
    elem('app1')
      .render('test')
  )
  .done();

  module.exports = Chain;

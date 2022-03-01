Object.setPrototypeOf(this,require('./util').start());

module.exports = this
  .renders(({ add, get }) => {
    add(
      'test',
      [`Chain.storage(x=>console.log(x.get('persist').test))`],
    );
    this.storage(y => y.conn('persist', get('test')));
  })
  .dom(({ clear, elem, elems, title, template }) => {
    clear();
    // elem should build, watch update and manage each elem in the dom.
    elem({
      class: 'app',
      id: 'app',
      type: 'div',
      visible: true,
    });
    console.log(elems);



    let i = 0;
    // setInterval(() => {
      title(i);
      i++;
    // }, 100)
    // console.log(template(el('div', { id: 't' }, 'sweeet')).baseURI = 'https://google.com');
  })
  .done();

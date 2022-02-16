module.exports = x => {
  function* gen(y) {
    y.map((m,i) => {
      return (typeof m === 'string')
        ? console.log(`%c ${m}`, styles[i])
        : console.log(m);
      }
    );
    yield x;
  };
  return gen(x);
};

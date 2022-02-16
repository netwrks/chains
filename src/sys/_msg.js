module.exports = function(...a) { return require('./_print')(a[1]>0?(a[1]>1?[`✅${a[0]}`,2,a[2]||{}]:['⚠️',1]):[`⛔`,0]); }

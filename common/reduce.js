const { mergeWith, reduce, add } = require('ramda');

const reducer = reduce(mergeWith(add), {});

module.exports = reducer;
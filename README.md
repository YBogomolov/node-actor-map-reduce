# node-actor-map-reduce
An example of MapReduce pattern implementation using actors. Requires Node.js v10.0.0.

## How to run

1. Install all dependencies:  
  `$ npm install`
2. Run it:  
  `$ npm start`

Example output:  
```
Mapper has read file #0
Combiner #0 got result { a: 4, b: 6, c: 2 }
Mapper has read file #1
Combiner #1 got result { b: 5, c: 6, a: 1 }
Reducer got result { a: 5, b: 11, c: 8 }
Worker got result: { a: 5, b: 11, c: 8 }
```
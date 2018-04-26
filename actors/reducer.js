const BaseActor = require('./base');
const reducer = require('../common/reduce');

class ReducerActor extends BaseActor {
  async reduce() {
    const childPromises = Array.from(Array(2).keys()).map(async index => {
      const combiner = await this.self.createChild('/actors/combiner');
      const result = await combiner.sendAndReceive('combine', index);
      return result;
    });

    const results = await Promise.all(childPromises);
    const finalResult = reducer(results);
    console.log('Reducer got result', finalResult);

    return finalResult;
  }
}

module.exports = ReducerActor;
const BaseActor = require('./base');
const reducer = require('../common/reduce');
const required = require('../common/required');

class CombinerActor extends BaseActor {
  async combine(index = required('index')) {
    const mapper = await this.self.createChild('/actors/mapper');
    const mapperResult = await mapper.sendAndReceive('map', index);
    const result = reducer(mapperResult);
    console.log(`Combiner #${index} got result`, result);

    return result;
  }
}

module.exports = CombinerActor;
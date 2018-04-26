const BaseActor = require('./base');
const required = require('../common/required');

class MapperActor extends BaseActor {
  static inject() {
    return ['FileResource'];
  }

  constructor(fileReader) {
    super();
    this.fileReader = fileReader;
  }

  async map(number = required('number')) {
    const result = await this.fileReader.read(number);
    console.log(`Mapper has read file #${number}`);

    return JSON.parse(result.toString());
  }
}

module.exports = MapperActor;
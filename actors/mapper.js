const BaseActor = require('./base');

class MapperActor extends BaseActor {
  static inject() {
    return ['FileResource'];
  }

  constructor(fileReader) {
    super();
    this.fileReader = fileReader;
  }

  async map(number) {
    const result = await this.fileReader.read(number);
    console.log(`Mapper has read file #${number}`);

    return JSON.parse(result.toString());
  }
}

module.exports = MapperActor;
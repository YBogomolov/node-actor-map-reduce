const fs = require('fs/promises');
const required = require('../common/required');

class FileReader {
  async read(number = required('number')) {
    const file = await fs.readFile(`resources/json/${number}.json`);
    return file.toString();
  }
}

class FileResource {
  getResource() {
    return new FileReader();
  }
}

module.exports = FileResource;
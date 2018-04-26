const BaseActor = require('./base');

class WorkerActor extends BaseActor {
  async start() {
    const reducer = await this.self.createChild('/actors/reducer');
    const result = await reducer.sendAndReceive('reduce');
    console.log('Worker got result:', result);
  }
}

module.exports = WorkerActor;
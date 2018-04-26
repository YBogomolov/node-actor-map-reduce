import comedy from 'comedy';

const system = comedy.createSystem({
  resources: ['/resources/file'],
  root: '/actors/worker'
});

const init = async () => {
  const rootActor = await system.rootActor();
  rootActor.send('start');
};

const destroy = async () => {
  await system.destroy();
};

init();
process.on('exit', destroy);
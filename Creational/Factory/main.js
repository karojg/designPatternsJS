const Task = require('./task');
const factoryRepository = require('./factoryRepository');

const task1 = new Task(factoryRepository.task.get(1))

const user = factoryRepository.user.get(1);
const project = factoryRepository.project.get(1);

task1.user = user;
task1.project = project;
console.log(task1);

task1.save('kari');

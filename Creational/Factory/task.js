const Repo = require('./taskRepository')();

const Task = function (name) {
  this.name = name;
  this.completed = false;
}

Task.prototype.complete = function () {
  console.log(`Task - Completing task: ${this.name}`);
  this.completed = true;
};

Task.prototype.save = function () {
  console.log(`Task - Saving task: ${this.name.name}`);
  Repo.save(this);
};

module.exports = Task;

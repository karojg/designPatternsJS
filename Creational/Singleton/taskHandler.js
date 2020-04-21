const myRepo = require('./repository')

const taskHandler = function() {
  return {
    save: function () {
      myRepo.save('Hi from taskHandler :D')
    }
  }
}

module.exports = taskHandler();

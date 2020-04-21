const repo = function () {
  const db = {} // example of factory uses

  const get = function (id) {
    console.log(`Getting task ${id}`)
    return {
      name: 'New Task from DB'
    }
  }

  const save = function (task) {
    console.log(`Saving task ${task.name.name} to the DB`)
  }

  console.log('Newing up the Task Repository');

  return {
    get,
    save
  }
}

module.exports = repo;

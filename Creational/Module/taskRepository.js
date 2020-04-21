const repo = function () {
  const db = {}

  const get = function (id) {
    console.log(`Getting task ${id}`)
    return {
      name: 'New Task from DB'
    }
  }

  const save = function (task) {
    console.log(`Saving task ${task.name} to the DB`)
  }

  return {
    get,
    save
  }
}

module.exports = repo();

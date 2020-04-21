const repo = function () {
  const db = {} // example of factory uses

  const get = function (id) {
    console.log(`Getting project ${id}`)
    return {
      name: 'New Project'
    }
  }

  const save = function (project) {
    console.log(`Saving project ${project.name} to the DB`)
  }

  // Revealing Module Pattern: can see which methods are available through the return
  return {
    get,
    save
  }
}

module.exports = repo;

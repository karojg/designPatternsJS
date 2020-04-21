const repo = function () {
  const db = {} // example of factory uses

  const get = function (id) {
    console.log(`Getting user ${id}`)
    return {
      name: 'Juana de Arco'
    }
  }

  const save = function (user) {
    console.log(`Saving user ${user.name} to the DB`)
  }

  // Revealing Module Pattern: can see which methods are available through the return
  return {
    get,
    save
  }
}

module.exports = repo;

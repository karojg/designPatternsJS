const factoryRepository = function () {
  const repositories = this;
  const repositoriesList = [
    {
      name: 'task', source: './taskRepository'
    },
    {
      name: 'user', source: './userRepository'
    },
    {
      name: 'project', source: './projectRepository'
    },
  ]

  repositoriesList.forEach(function(repo){
    repositories[repo.name] = require(repo.source)()
  });
}

module.exports = new factoryRepository;

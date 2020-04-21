const repository = function() {
  let called = 0;

  const save = function(task) {
    called++;
    console.log(`Saving: ${task}. Called ${called} times`)
  }

  console.log('Newing up Repository')

  return {
    save
  }
}

module.exports = new repository;

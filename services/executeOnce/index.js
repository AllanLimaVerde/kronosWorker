const executeOnce = (worker, errors) => {
  const workers = require('../../')

  try {
    require(`../../${workers[worker]}/job.js`)()
  } catch (error) {
    errors.push({ error, worker })
  }
}

module.exports = executeOnce
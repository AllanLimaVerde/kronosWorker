const intervalInSeconds = 2
const job = require('./job')

const experiment = () => {
  setInterval(job, intervalInSeconds*1000)
}

module.exports = experiment

const intervalInSeconds = 1
const job = require('./job')

const experimentB = () => {
  setInterval(job, intervalInSeconds*1000)
}

module.exports = experimentB
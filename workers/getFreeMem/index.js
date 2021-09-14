const intervalInSeconds = 1

const setJob = () => {
  setInterval(require('./job'), intervalInSeconds*1000)
}

module.exports = setJob
const intervalInSeconds = 2

const setJob = () => {
  setInterval(require('./job'), intervalInSeconds*1000)
}

module.exports = setJob
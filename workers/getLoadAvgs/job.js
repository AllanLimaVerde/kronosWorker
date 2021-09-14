const os = require('os')

module.exports = () => {
  console.log(`Load averages: ${os.loadavg()} (1, 5, and 15 minutes)`)
}
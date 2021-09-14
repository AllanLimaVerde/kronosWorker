const os = require('os')

module.exports = () => {
  console.log(`Free memory in bytes: ${os.freemem()}`)
}
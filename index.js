const fs = require('fs')
const http = require('http')
const path = require('path')

const executeOnce = require('./services/executeOnce')
const errorHandler = require('./services/errorHandler')

const workersFolder = 'workers'
const workers = {}
const PORT = 5005

fs.readdirSync(workersFolder)
  .filter(name => !name.includes('.'))
  .forEach(dirName => {
      workers[dirName] = path.join(workersFolder, dirName)
    }
  )

Object.keys(workers).forEach(workerName => {
  require(`./${workers[workerName]}/index.js`)()
})

const server = http.createServer(async (req, res) => {
  if (req.method !== 'POST') return res.end()

  const body = []

  req.on('data', chunk => body.push(chunk))
  req.on('end', () => {
    const parsedBody = JSON.parse(Buffer.concat(body).toString())
    const { workers } = parsedBody
    const errors = []
    workers.forEach(worker => {
      executeOnce(worker, errors)
    })
    errors.length
      ? errorHandler({ errors, res })
      : res.write(`All workers executed successfully.`)
    res.end()
  })
})

server.listen(PORT, () => {
  console.log('Server listening on port ' + PORT)
})

module.exports = workers
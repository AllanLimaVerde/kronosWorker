const fs = require('fs')
const path = require('path')

const workersFolder = 'workers'
const workers = {}

fs.readdirSync(workersFolder)
  .filter(name => !name.includes('.'))
  .forEach(dirName => {
      workers[dirName] = './' + path.join(workersFolder, dirName, 'index.js')
    }
  )

Object.keys(workers).forEach(workerName => {
  require(workers[workerName])()
})

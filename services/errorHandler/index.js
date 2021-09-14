module.exports = ({ errors, res }) => {
  res.write(`Errors happened when trying to execute the following worker(s): ${errors.map(err => err.worker)}\n\n`)
  res.write(`These were the errors:\n${errors.map(err => err.error)}`)
}
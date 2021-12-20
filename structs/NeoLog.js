module.exports = {
  Log(data) {
    console.log('[\x1b[35;1mNeonite\x1b[0m]', data, '\x1b[0m')
  },
  Error(data) {
    console.errorr('[\x1b[31mERROR\x1b[0m]\x1b[31m', data, '\x1b[0m')
  },
  warn(data, showtype = true) {
    console.warn('[\x1b[33mWARNING\x1b[0m]\x1b[33m', data, '\x1b[0m')
  }
}
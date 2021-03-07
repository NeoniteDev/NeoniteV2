module.exports = {
  Log(data) {
    console.log(`[\x1b[35;1mNeonite\x1b[0m]: ${data}\x1b[0m`)
  },
  Error(data) {
    console.log(`[\x1b[31mNeoError\x1b[0m]: ${data}\x1b[0m`)
  }
}
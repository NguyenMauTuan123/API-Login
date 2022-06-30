class Error {
    constructor(error) {
      this.message = error instanceof Error ? error.message : { error }
    }
  }
module.exports = Error;  
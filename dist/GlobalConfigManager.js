const fs = require('fs-extra')

class GlobalConfigManager {
  set (applicationId, fileName, content, cb) {
    const path = this._createPath(applicationId, fileName)

    if (typeof content === 'object') {
      try {
        content = JSON.stringify(content)
      } catch (err) {
        cb(err)
      }
    }

    fs.outputFile(path, content, cb)
  }

  get (applicationId, fileName, cb) {
    const path = this._createPath(applicationId, fileName)
    fs.readFile(path, 'UTF-8', (err, data) => {
      if (err) return cb(err)
      cb(null, JSON.parse(data))
    })
  }

  /**
   * TODO: Check os
   * @param {*} applicationId 
   * @param {*} fileName 
   */
  _createPath (applicationId, fileName) {

    const home = process.env['HOME']

    return `${home}/.${applicationId}/${fileName}`

/*    switch (process.platform) {
      case 'win32':
      break
      case 'linux':
      break
      default:
      break
    }*/
  }
}

module.exports = GlobalConfigManager

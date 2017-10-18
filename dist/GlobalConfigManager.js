const path = require('path')
const fs = require('fs-extra')

class GlobalConfigManager {
  /**
   * 
   * @param {*} applicationId 
   * @param {*} fileName 
   * @param {*} content 
   * @param {*} cb 
   */
  static set (applicationId, fileName, content, cb) {
    const path = this._createPath(applicationId, fileName)
    fs.outputJson(path, content, cb)
  }

  /**
   * 
   * @param {*} applicationId
   * @param {*} fileName 
   * @param {*} cb 
   */
  static get (applicationId, fileName, cb) {
    const path = this._createPath(applicationId, fileName)
    fs.readJSON(path, 'UTF-8', cb)
  }

  /**
   * @param {*} applicationId 
   * @param {*} fileName 
   */
  static _createPath (applicationId, fileName) {
    // Win32
    if (process.env.APPDATA) {
      return path.join(process.env.APPDATA, applicationId, fileName)
    } else
    // Unix
    if (process.env.HOME) {
      return path.join(process.env.HOME, `.${applicationId}`, fileName)
    } else {
      console.log('You don\'t have a supported OS')
      // TODO: Does env.home and appdata exist? => Write in module-dir
      return path.join(__filename, '../config', applicationId, fileName)
    }
  }
}

module.exports = GlobalConfigManager

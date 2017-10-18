const GlobalConfigManager = require('../dist/GlobalConfigManager')
const assert = require('assert')

describe('GlobalConfigManager', () => {
  const manager = new GlobalConfigManager()

  it('should write a file to the home folder', (done) => {
    manager.set('sg-cloud', 'config.json', {value: 1}, () => {
      done()
    })
  })

  it('should get a file to the home folder', (done) => {
    manager.get('sg-cloud', 'config.json', (err, data) => {
      assert.ifError(err)
      assert.deepEqual(data, {value: 1})
      done()
    })
  })
})

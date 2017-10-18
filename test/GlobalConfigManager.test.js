const GlobalConfigManager = require('../dist/GlobalConfigManager')
const fs = require('fs-extra')
const assert = require('assert')

describe('GlobalConfigManager', () => {
  const manager = new GlobalConfigManager()

  it('should write a file to the home folder', (done) => {
    manager.set('sg-cloud', 'config.json', {value: 1}, () => {
      fs.readFile(`${process.env['HOME']}/.sg-cloud/config.json`, 'UTF-8', (err, data) => {
        assert.ifError(err)
        assert.deepEqual(JSON.parse(data), {value: 1})
        done()
      })
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

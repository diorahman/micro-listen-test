const test = require('ava')
const listen = require('./')
const app = async (req, res) => {
  return 'ok'
}

test('ok', async (t) => {
  const url = await listen(app)
  t.deepEqual(url.length > 0, true)
  t.deepEqual(+url.split(':').pop() > 0, true)
})

const micro = require('micro')

const listen = (fn, opts) => {
  const server = micro(fn, opts)
  return new Promise((resolve, reject) => {
    server.listen((err) => {
      if (err) {
        return reject(err)
      }

      const {port} = server.address()
      resolve(`http://localhost:${port}`)
    })
  })
}

module.exports = listen

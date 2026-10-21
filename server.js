// Production server for hosts that run a Node process directly (e.g. cPanel / Passenger).
// On Vercel or similar platforms use `next start` instead.
const { createServer } = require('http')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.HOSTNAME || 'localhost'
const port = Number(process.env.PORT) || 3000

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res).catch((err) => {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('Internal server error')
    })
  }).listen(port, () => {
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})

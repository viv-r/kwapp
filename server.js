const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const { join } = require('path')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    createServer((req, res) => {
        const parsedUrl = parse(req.url, true)
        const rootStaticFiles = [
            '/resources/',
            '/robots.txt',
            '/sitemap.xml',
            '/favicon.ico'
        ]
        if (rootStaticFiles.filter(str => parsedUrl.pathname.includes(str)).length > 0) {
            const path = join(__dirname, 'static', parsedUrl.pathname)
            console.log('static: ' + path);
            app.serveStatic(req, res, path)
        } else {
            console.log('request: ' + parsedUrl);
            handle(req, res, parsedUrl)
        }
    }).listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
});
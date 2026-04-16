const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
    const file = req.url === '/' ? 'public/index.html' : 'public' + req.url;

    fs.readFile(file, (err, data) => {
        if (err) {
            res.end('404 Not Found');
        } else {
            res.end(data);
        }
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
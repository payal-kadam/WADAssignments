const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.write("Error loading page");
        } else {
            res.write(data);
        }
        res.end();
    });
}).listen(3000);

console.log("Server running at http://localhost:3000");
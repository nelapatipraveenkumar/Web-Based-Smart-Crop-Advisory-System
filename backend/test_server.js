const http = require('http');

console.log('Attempting to start TEST server on port 3000...');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Test Server Working\n');
});

server.listen(3000, () => {
    console.log('SUCCESS: Test Server running on http://localhost:3000');
});

server.on('error', (err) => {
    console.error('FAILED to start server:', err.message);
});

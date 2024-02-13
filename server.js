import { createServer } from 'http';

const hostname = '127.0.0.1';
const port = 3000;

const Server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

Server.listen(port, hostname, () => {
    console.log(`Server is running at ${hostname} on port ${port}`);
});


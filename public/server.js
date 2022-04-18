const express = require('express');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.all('/cnftData', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/cnftData', (req, res) => {
    res.end('Will send all the CNFTs to you')
});

app.post('/cnftData',(req, res) => {
    res.end(`Will add the cnft: ${req.body.name} with description: ${req.body.description}`);
});

app.put('/cnftData', (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /cnftData');
});

app.delete('/cnftData', (req, res) => {
    res.end('Deleting all cnfts');
});

app.get('/cnftData/:cnftId', (req, res) => {
    res.end(`Will send details of the cnft: ${req.params.cnftId} to you`);
});

app.post('/cnftData/:cnftId', (req, res) => {
    res.statusCode= 403;
    res.end(`POST operation not supported on /cnftData/${req.params.cnftId}`);
});

app.put('/cnftData/:cnftId', (req, res) => {
    res.write(`Updating the cnft: ${req.params.cnftId}\n`);
    res.end(`Will update the cnft: ${req.body.name} with description: ${req.body.description}`);
});

app.delete('/cnftData/:cnftId', (req, res) => {
    res.end(`Deleting cnft: ${req.params.cnftId}`);
});

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
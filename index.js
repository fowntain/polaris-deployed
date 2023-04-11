import createBareServer from '@tomphttp/bare-server-node';
import { uvPath } from '@titaniumnetwork-dev/ultraviolet';
import express from 'express';
import * as url from 'url';
import * as path from 'node:path';
import http from 'node:http';

const bare = createBareServer('/bare/');
const app = express();
const port = process.env.port || 8080;
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.use(express.static(path.join(__dirname, '/static'), { extensions: ['html'] }));
app.use('/uv/', express.static(uvPath));

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, './static/', '404.html'));
});

const server = http.createServer();

server.on('request', (req, res) => {
    if (bare.shouldRoute(req)) {
        bare.routeRequest(req, res);
    } else {
        app(req, res)
    }
});

server.on('upgrade', (req, socket, head) => {
    if (bare.shouldRoute(req)) {
        bare.routeUpgrade(req, socket, head);
    } else {
        socket.end();
    }
});

server.listen(port, () => {
    console.log(`Polaris is running on port ${server.address().port}, using nodejs ${process.version}`)
});
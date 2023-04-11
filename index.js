const express = require('express');
const app = express();
const path = require('path');
const port = process.env.port || 8080;

app.use(express.static(path.join(__dirname, '/static')));


app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, './static/', '404.html'));
});

const server = app.listen(port, () => {
    console.log(`Polaris is running on port ${server.address().port}, using nodejs ${process.version}`)
});
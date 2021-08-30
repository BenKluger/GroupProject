const http = require('http')
const port = 3000
const fs = require('fs')

const server = http.createServer()
server.on("listening", () => console.log(`Now Listening on Port ${port}`));
server.listen(port);
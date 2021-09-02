const http = require('http');
const port = 3000;
const fs = require('fs');
const {pool} = require('./dbConfig');

const server = http.createServer();
server.on("request", connection_handler);

function connection_handler(req, res){
    console.log(`New Request Received from ${req.url}`);
    if (req.url === '/'){
        let formStream =  fs.createReadStream("./html/home.html");
        res.writeHead(200, {"Content-Type": "text/html"});
        formStream.pipe(res);
    }
    else if (req.url === '/register'){
        let username = 'Andrew';
        let password = 12345;
        let email = 'andrew@gmail.com';
        pool.query(`INSERT INTO users (username, password, email ) 
                    VALUES ($1, $2, $3) 
                    RETURNING id, password`,[username, password, email ], (err, results)=>{
                      if (err){
                          throw err
                      }
                    })
    }
}





server.on("listening", () => console.log(`Now Listening on Port ${port}`));
server.listen(port);
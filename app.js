const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    app = http.createServer((request, response) => {
        console.log("incoming request received!");
        response.writeHead(httpStatus.OK, {
            "Content-Type": "text/html"
        });

        let responseMessage = "<h1>Hello Spider</h1>";
        response.write(responseMessage);
        response.end();
        console.log(`response sent: ${responseMessage}`);
    });

app.listen(port);

console.log(`The server is running on port :
 ${port}`);
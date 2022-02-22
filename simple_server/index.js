// const port = 3001,
//   http = require("http"),
//   httpStatus = require("http-status-codes"),
//   app = http.createServer((request, response) => {
//     console.log("received an incoming request!");
//     response.writeHead(httpStatus.OK, {
//       "Content-Type": "text/html",
//     });
//     let responseMessage = "<h1>hello, universe!</h1>";
//     response.write(responseMessage);
//     response.end();
//     console.log(`sent a response: ${responseMessage}`);
//   });

// app.listen(port);
// console.log(`the server has started and is listening on port number : ${port}`);

// var app = require("express")();
// var cors = require("cors");

// // Access-Control-Allow-Origin 적용방법1: 직접 헤더에 적용
// app.all("/*", function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
// });

// // Access-Control-Allow-Origin 적용방법2: cors 미들웨어 사용
// // app.use(cors());

// app.listen(3001, function () {
//   console.log("http server is listening on port 80");
// });

//api 사용 불가... 다른 방법 찾아야함

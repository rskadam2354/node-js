const request=require("supertest");
const http=require("http");
var fs=require("fs");
fs.readFile('./index.html',function(error,data){
    if(error){
        throw error;
    }
    http.createServer(function(request,response){
        response.write(data);
        response.end();
    }).listen(3000,console.log("server listening"));
})
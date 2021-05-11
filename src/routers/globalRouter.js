import express from "express";

//* router 
const globalRouter = express.Router();

//* handler 
const handleHome = (req, res) => {
    return res.send("<h1>Home</h1>");
    // return res.end(); //* request를 종료
} 

//* response to get request 
globalRouter.get("/", handleHome);

//* server.js에서 import 하기 위해 globalRouter 변수만 export
export default globalRouter;
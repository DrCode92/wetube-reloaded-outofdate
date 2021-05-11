import express from "express";
import morgan from "morgan";
const PORT = 4000;

//* create application
const app = express();

//* configure application 
//? JS 문법 참조 
//? : 이벤트리스너는 핸들러를 가지고 있고 핸들러는 이벤트를 가지고 있음
//? const handleClick = (event) => {

//? }
//? button.addEventListener("click", handleClick);

//* Middleware
const logger = morgan("dev"); //* morgan has 5 options

const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if(url === "/protected"){
        return res.send("<h1>Not Allowed</h1>");
    }
    console.log("Allowed, you may contiune.");
    next();
}

//* Handler
const handleHome = (req, res) => {
    return res.send("<h1>I still love you.</h1>");
    // return res.end(); //* request를 종료
} 
const handleLogin = (req, res) => {
    return res.send("<h1>Login here.</h1>");
} 
const handleProtected = (req, res) => {
    return res.send("Welcome to the private lounge.");
}

//* router와 무관하게 동작
app.use(logger);
app.use(privateMiddleware);

app.get("/", handleHome );
app.get("/login", handleLogin );
app.get("/protected", handleProtected );


//* open the application to the outside world 
const handleListening = () => console.log(`✅ Server Listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

//* create application
const app = express();

//* configure application 

//* setting view
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views"); 

//* Middleware
const logger = morgan("dev"); //* morgan has 5 options

//* router와 무관하게 동작
app.use(logger);

//* form data 가져오기
app.use(express.urlencoded({extended: true}));

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

//* open the application to the outside world 
const handleListening = () => console.log(`✅ Server Listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
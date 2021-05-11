import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

//* create application
const app = express();

//* configure application 

//* Middleware
const logger = morgan("dev"); //* morgan has 5 options

//* router와 무관하게 동작
app.use(logger);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

//* open the application to the outside world 
const handleListening = () => console.log(`✅ Server Listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
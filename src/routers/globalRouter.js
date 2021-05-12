import express from "express";
import {join, login} from "../controllers/userController";
import {trending, search} from "../controllers/videoController";

//* router 
const globalRouter = express.Router();

//* response to get request 
globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

//* server.js에서 import 하기 위해 globalRouter 변수만 export
export default globalRouter;
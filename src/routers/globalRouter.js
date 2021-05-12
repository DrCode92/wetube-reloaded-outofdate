import express from "express";
import {join} from "../controllers/userController";
import {trending} from "../controllers/videoController";

//* router 
const globalRouter = express.Router();

//* response to get request 
globalRouter.get("/", trending);
globalRouter.get("/join", join);

//* server.js에서 import 하기 위해 globalRouter 변수만 export
export default globalRouter;
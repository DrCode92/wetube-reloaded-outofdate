import express from "express";
import {watch, getEdit, postEdit, deleteVideo, getUpload, postUpload} from "../controllers/videoController"

const videoRouter = express.Router();

//* /upload 가 /:id로 인식되지 않도록 맨위로 이동
videoRouter.route("/upload").get(getUpload).post(postUpload);

videoRouter.get("/:id([0-9a-f]{24})", watch);

//* get/post 통합코드
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
//? videoRouter.get("/:id(\\d+)/edit", getEdit);
//? videoRouter.post("/:id(\\d+)/edit",postEdit);


videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;
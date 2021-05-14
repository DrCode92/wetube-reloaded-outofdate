import express from "express";
import {watch, getEdit, postEdit, deleteVideo, getUpload, postUpload} from "../controllers/videoController"

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);

//* get/post 통합코드
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
//? videoRouter.get("/:id(\\d+)/edit", getEdit);
//? videoRouter.post("/:id(\\d+)/edit",postEdit);

videoRouter.route("/upload").get(getUpload).post(postUpload);

videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;
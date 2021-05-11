import express from "express";

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => {
    return res.send("<h1>Watch Video</h1>");
}

videoRouter.get("/watch", handleWatchVideo);

export default videoRouter;
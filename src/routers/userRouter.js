import express from "express";

const userRouter = express.Router();

const handleEditUser = (req, res) => {
    return res.send("<h1>Edit User</h1>");
} 

userRouter.get("/edit", handleEditUser);

export default userRouter;
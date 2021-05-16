import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
 });

const db = mongoose.connection;

//* DB Connection message
const handleOpen = () => console.log("🟢 Connected to DB");
//* DB Connection Error message
const handleDbError = (error) => console.log("❌ DB Error", error);
//? db.on("error", (error) => console.log("DB Error", error));

db.once("open", handleOpen); //* once : one time
db.on("error", handleDbError); //* on : many times
import "./db"; //* db.js파일 import
import "./models/Video"; //* DB model 파일 import 
import app from "./server";

const PORT = 4000;

//* open the application to the outside world 
const handleListening = () => console.log(`✅ Server Listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
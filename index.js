import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.routes.js";

dotenv.config({});

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}

app.use(cors(corsOptions));


// api's
app.use("/api/v1/user", userRoute);

"https://localhost:3000/api/v1/user/register"
"https://localhost:3000/api/v1/user/login"
"https://localhost:3000/api/v1/user/profile/update"

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });

  app.get('/', (req, res) => {
    res.send(' Server is working fine!');
  });


  

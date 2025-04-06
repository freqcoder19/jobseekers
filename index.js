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

"https://localhost:8000/api/v1/user/register"
"https://localhost:8000/api/v1/user/login"
"https://localhost:8000/api/v1/user/profile/update"

const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
})
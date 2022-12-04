// import news from "../src/index.js";
import express from "express";
import newsRoutes from "./articles.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const PORT = process.env.PORT;
console.log(PORT);

const app = express();

// middleware
app.use(express.json()); // attaches data to req
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(cors());

//routes
app.use("/api/news", newsRoutes);

//listen for database
app.listen(PORT, () => {
  console.log("Connected to OrbitDB, listening to PORT ", PORT);
});

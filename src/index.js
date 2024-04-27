const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
app.use(express.json());
app.use(cors({ credentials: true, origin: "*" }));
const router = require('./router/index');

router(app);

let db = "mongodb+srv://quangminhnguyen265:quangminhnguyen265@gametown.4vf7pde.mongodb.net/?retryWrites=true&w=majority&appName=GameTown";
mongoose
  .connect(
    db,
  )
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(`Your erorr :${err}`));

app.listen(3000, () => {
  console.log("Express server listening on port 3000");
});

require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
const cors = require("cors");
const servicesRouter = require("./router/service-router");
const adminRouter = require("./router/admin-router");

app.use(cors());
const connectdb = require("./utils/db");
const run = require("./utils/cloud");

const user = require("./router/user");
const contactRouter = require("./router/contact-router");

const errorMiddleware = require("./middlewares/error-middleware");

app.use("/user", user);
app.use("/form", contactRouter);
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});
app.use("/services", servicesRouter);
app.use("/admin", adminRouter);

app.use(errorMiddleware);

connectdb().then(() => {
  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
});

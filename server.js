const express = require("express");
const app = express();
const Sign = require("./Routes/Sign");
const UserRouter = require("./Routes/UserRoutes");
app.use(express.json());
require("dotenv").config();
app.use(UserRouter);
app.use(Sign);

app.listen(process.env.PORT || 7000, () => {
  console.log("PORT WORKS");
});

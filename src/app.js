const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);
app.use("/user", userAuth);

app.get("/admin/getAllData", (req, res) => {
  res.send("all  data sent");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("Delete data sent");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000 ...");
});

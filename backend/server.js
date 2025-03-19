const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Cho phép frontend gọi API

app.get("/api/test", (req, res) => {
  res.send("aaa");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});

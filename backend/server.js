require("dotenv").config();
const express = require("express");
const cors = require("cors");

require("./config/mysql");
require("./config/mongo");

const logger = require("./middleware/logger");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/api/users", require("./routes/user.routes"));
app.use("/api/tasks", require("./routes/task.routes"));

app.listen(process.env.PORT, () =>
  console.log(`🚀 Server running on port ${process.env.PORT}`)
);

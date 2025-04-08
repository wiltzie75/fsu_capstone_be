const express = require("express")
const app = express();

app.listen(3000)

const cors = require("cors");
app.use(cors({ origin: /localhost/ }));
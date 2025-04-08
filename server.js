const express = require("express")
const app = express();
const cors = require("cors");
const prisma = require("./prisma/seed.js");

app.use(cors({ origin: /localhost/ }));
app.use(express.json());
app.use(require("morgan")("dev"));


app.get("/api/faculty", async (req, res, next) => {
    try {
        const faculty = await prisma.faculty.findMany();
        res.send(faculty)
    } catch (error) {
        next(error)
    }
})


app.listen(3000)

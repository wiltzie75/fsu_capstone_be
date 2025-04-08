const express = require("express")
const app = express();
const cors = require("cors");
const prisma = require("./prisma/seed.js");
app.use(cors({ origin: /localhost/ }));
app.use(express.json());
app.use(require("morgan")("dev"));

app.get("/api/departments", async (req,res, next) => {
    try {
        const departments = await prisma.department.findMany();
        res.json(departments);
    } catch (err) {
        next();
    }
});

app.post("/api/departments/:id/")

app.put("/api/departments/:id", async (req, res, next) => {
    try {
        const id = +req.params.id;

        const departmentExists = await prisma.departments.findUnique({ where: { id } });
        if (!departmentExists) {
            return next({
                status: 404,
                message: `Could not find department with ${id}. `,
            });
        }

        const { name, description, image, email, faculty } = req.body;
        if (!name || !description || !image || !email || !faculty) {
            return next({
                status: 400,
                message: "Department must have info."
            });
        }
    } catch (err) {
        
    }
})
app.delete("/api/departments/:departmentId", async (req, res, next) => {
    try {
        const id = +req.params.id;
        const departmentId = +req.params.departmentId;

        const departmentExists = await prisma.department.findFirst({
            where: { id, departmentId },
        });

        if (!departmentExists) {
            return next({
                status: 404,
                message: `${departmentId} department does not exist.`,
            });
        }
        await prisma.department.delete({ where: { id, departmentId } });
        res.sendStatus(204);
    } catch (err) {
        next();
    }
});


app.get("/api/faculty", async (req, res, next) => {
    try {
        const faculty = await prisma.faculty.findMany();
        res.send(faculty)
    } catch (error) {
        next(error)
    }
})


app.listen(3000)


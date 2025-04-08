const express = require("express")
const app = express();
const cors = require("cors");
const prisma = require("./prisma/seed.js");
app.use(cors({ origin: /localhost/ }));
app.use(express.json());
app.use(require("morgan")("dev"));

// app.get("/api/departments", async (req,res, next) => {
//     try {
//         const departments = await prisma.department.findMany();
//         res.json(departments);
//     } catch (err) {
//         next();
//     }
// });

// app.post("/api/departments/:id/")

// app.put("/api/departments/:id", async (req, res, next) => {
//     try {
//         const id = +req.params.id;

//         const departmentExists = await prisma.departments.findUnique({ where: { id } });
//         if (!departmentExists) {
//             return next({
//                 status: 404,
//                 message: `Could not find department with ${id}. `,
//             });
//         }

//         const { name, description, image, email, faculty } = req.body;
//         if (!name || !description || !image || !email || !faculty) {
//             return next({
//                 status: 400,
//                 message: "Department must have info."
//             });
//         }
//     } catch (err) {
        
//     }
// })
// app.delete("/api/departments/:departmentId", async (req, res, next) => {
//     try {
//         const id = +req.params.id;
//         const departmentId = +req.params.departmentId;

//         const departmentExists = await prisma.department.findFirst({
//             where: { id, departmentId },
//         });

//         if (!departmentExists) {
//             return next({
//                 status: 404,
//                 message: `${departmentId} department does not exist.`,
//             });
//         }
//         await prisma.department.delete({ where: { id, departmentId } });
//         res.sendStatus(204);
//     } catch (err) {
//         next();
//     }
// });

// get all faculty
app.get("/api/faculty", async (req, res, next) => {
    try {
        const faculty = await prisma.faculty.findMany();
        res.send(faculty)
    } catch (err) {
        next(err)
    }
})

// get single faculty
app.get("/api/faculty/:id", async (req, res, next) => {
    try {
        const id = +req.params.id
        const faculty = await prisma.faculty.findUnique( {where: {id}})
        if (!faculty) {
            const err = new Error("can not find faculty with that id")
            throw err
        }
            
        res.send(faculty)
    } catch (err) {
        next(err)
    }
})

// create faculty
app.post("/api/faculty", (req, res, next) => {
    try {
        const { name, bio, image, email, departmentId} = req.body
        const faculty = prisma.faculty.create({ 
            data: {
                name, bio, image, email, departmentId
            }})
            res.sendStatus(200).json(faculty)
            if(!faculty) {
                const err = new Error("missing info or wrong format")
                throw err
            }
    } catch (err) {
        next(err)
    }
})

// remove faculty 
app.delete("/api/faculty/:id", (req, res, next) => {
    try {
        const id = +req.params.id
        const faculty = prisma.faculty.delete({where: {id}})
        res.send("goodbye forever :(").sendStatus(204)
    } catch (err) {
        err.next
    }
})





app.listen(3000)


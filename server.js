const express = require("express")
const app = express();
const cors = require("cors");
const prisma = require("./prisma");
app.use(cors({ origin: /localhost/ }));
app.use(express.json());
app.use(require("morgan")("dev"));

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
        }catch(err){
        next(err)
}});



app.delete("/api/faculty/:id", (req, res, next) => {
    try {
        const id = +req.params.id
        const faculty = prisma.faculty.delete({where: {id}})
        res.send("goodbye forever :(").sendStatus(204)
    } catch (err) {
        err.next
    }
})


// ===================DEPARTMENTS===========================

app.get("/api/departments/:id", async (req, res, next) => {
    try {
        const id = +req.params.id;
        const department = await prisma.department.findUnique({ where: { id } });

        if (!department) {
            return next ({
                status: 404,
                message: `Could not find a department with id ${id}.`,
            });
        }
        res.json(department);
    } catch {
        next();
    }   
});

app.post("/api/departments", async ( req, res, next ) => {
    try {
        const { name, description, image, email, facultyIds } = req.body;
        if (!name || !description || !image || !email || !facultyIds ) {
            return next( {
                status: 400,
                message: "All department fields are required.",
            });
        }

        const department = await prisma.department.create({ data: {
            name,
            description,
            image,
            email,
            faculty: {
                connect: facultyIds.map(id => ({ id }))
            }
        }
        });
        res.status(201).json(department);
    } catch (err) {
        next();
    }
});

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

app.delete("/api/departments/:id", async (req, res, next) => {
    console.log('DELETE request received for ID:', req.params.id);
    try {
        const id = +req.params.id;
        
        await prisma.faculty.deleteMany({
            where: { departmentId: id },
        });
        
        const departmentExists = await prisma.department.findUnique({
            where: { id },
        });

        if (!departmentExists) {
            return next({
                status: 404,
                message: `Department with id ${id} does not exist.`,
            });
        }

        await prisma.department.delete({ where: { id } });

        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
});






app.listen(3000)


const express = require("express")
const app = express();
const cors = require("cors");
const prisma = require("./prisma");
app.use(express.json());
app.use(require("morgan")("dev"));

app.use(cors({ 
    origin: "http://localhost:3000" 
}));


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
app.post("/api/faculty", async (req, res, next) => {
    try {
        const { name, bio, image, email, departmentId } = req.body
        const faculty = await prisma.faculty.create({ 
            data: {
                name, bio, image, email, departmentId
            }})
            // if(!faculty) {
            //     const err = new Error("missing info or wrong format")
            //     throw err
            // } else {
            //     res.json(faculty)
            // }
            res.json(faculty)
        } catch(err){
        next(err)
    }
});


// delete faculty 
app.delete("/api/faculty/:id", async (req, res, next) => {
    try {
        const id = +req.params.id
        const faculty = await prisma.faculty.delete({where: {id}})
        res.send("goodbye forever :(").sendStatus(204)
    } catch (err) {
        err.next
    }
})

// update faculty
app.put("/api/faculty/:id", async (req, res, next) => {
    try {
        const id = +req.params.id
        console.log("got id =>", id)
        const { name, bio, image, email, departmentId } = req.body
        console.log("got info => ", {name, bio, image, email, departmentId} )
        const faculty = await prisma.faculty.update({
            where: {id},
            data: { name, bio, image, email, departmentId }
        })
        res.json(faculty)
    } catch (error) {
        next(error)
    }
})


// ===================DEPARTMENTS===========================
// GET departments
app.get("/api/departments", async (req, res, next) => {
    try {
        const department = await prisma.department.findMany();
        res.send(department);
    } catch (err) {
        next(err);
    }
})

// GET individual department
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
    } catch (err) {
        next(err);
    }   
});

// CREATE department
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
        next(err);
    }
});


// UPDATE department
app.put("/api/departments/:id", async (req, res, next) => {
    try {
        const id = +req.params.id;

        const departmentExists = await prisma.department.findUnique({ where: { id } });
        if (!departmentExists) {
            return next({
                status: 404,
                message: `Department with ID ${id} not found.`,
            });
        }

        const { name, description, image, email, facultyIds } = req.body;

        if (!name || !description || !image || !email || !facultyIds) {
            return next({
                status: 400,
                message: "All department fields are required."
            });
        }

        await prisma.faculty.updateMany({
            where: {
                id: {
                    in: facultyIds
                }
            },
            data: {
                departmentId: id
            }
        });

        const updatedDepartment = await prisma.department.update({
            where: { id },
            data: {
                name,
                description,
                image,
                email
            },
            include: {
                faculty: true
            }
        });

        res.json(updatedDepartment);
    } catch (err) {
        console.error("Error in PUT /api/departments/:id:", err);
        next(err);
    }
});

// DELETE department
app.delete("/api/departments/:id", async (req, res, next) => {
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

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error("Error:", err);

    const status = err.status || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ error: message });
});

app.listen(3000)


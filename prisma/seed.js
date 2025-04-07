const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient;

const seed = async () => {
  const createDepartments = async () => {
    const departments = [
      {
        name: "Economics",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://economics.ucla.edu/wp-content/uploads/2021/01/SDC00061-1500x630-1-1500x630.jpg",
        email: "economics@lu.edu",
        facultyId: 1
      },
      {
        name: "Computer Science",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://economics.ucla.edu/wp-content/uploads/2021/01/SDC00061-1500x630-1-1500x630.jpg",
        email: "computer_science@lu.edu",
        facultyId: 2
      },
      {
        name: "History",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://economics.ucla.edu/wp-content/uploads/2021/01/SDC00061-1500x630-1-1500x630.jpg",
        email: "history@lu.edu",
        facultyId: 3
      },
      {
        name: "Art",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://economics.ucla.edu/wp-content/uploads/2021/01/SDC00061-1500x630-1-1500x630.jpg",
        email: "art@lu.edu",
        facultyId: 4
      },
      {
        name: "Physics",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://economics.ucla.edu/wp-content/uploads/2021/01/SDC00061-1500x630-1-1500x630.jpg",
        email: "physics@lu.edu",
        facultyId: 5
      }
    ];
    await prisma.departments.createMany({ data: departments });
  };

  await createDepartments();
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
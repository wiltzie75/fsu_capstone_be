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
        image: "https://t4.ftcdn.net/jpg/03/30/54/13/360_F_330541358_We4blSYEnHKB3asKEX9eEconkQkp594S.jpg",
        email: "computer_science@lu.edu",
        facultyId: 2
      },
      {
        name: "History",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://t4.ftcdn.net/jpg/02/71/94/77/360_F_271947704_jD7SGRpM8xJ3IGNSrrefkjtHa9trlXsL.jpg",
        email: "history@lu.edu",
        facultyId: 3
      },
      {
        name: "Art",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://media.gettyimages.com/id/1352928891/photo/highschool-art-class.jpg?s=612x612&w=0&k=20&c=TllVEsASIxY6nkebuAPTfcyP4Fha2J0IRmETJys7RxI=",
        email: "art@lu.edu",
        facultyId: 4
      },
      {
        name: "Physics",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://media.gettyimages.com/photos/physics-teacher-writing-math-equations-on-a-blackboard-picture-id1220610073?k=20&m=1220610073&s=612x612&w=0&h=p7hTVSTR3565rRtUODO9gcm7TQUBSPCeOiRU6JheiWY=",
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
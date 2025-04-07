const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient;

const seed = async () => {

  
}

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
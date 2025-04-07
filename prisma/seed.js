const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient;
const { faker } = require('@faker-js/faker');
const fs = require('fs');

const seed = async () => {

// List of common academic departments
const departmentNames = [
  'Computer Science', 'Mathematics', 'Physics', 'Chemistry', 'Biology',
  'Psychology', 'Sociology', 'Philosophy', 'History', 'English',
  'Political Science', 'Economics', 'Business Administration', 'Engineering',
  'Art History', 'Music', 'Communications', 'Linguistics', 'Medicine', 'Nursing'
];

// Generate departments table
function generateDepartments(count = 10) {
  const departments = [];
  
  for (let i = 0; i < count; i++) {
    const name = departmentNames[i % departmentNames.length];
    
    departments.push({
      id: i + 1,
      name: name,
      description: faker.lorem.paragraph(),
      email: `${name.toLowerCase().replace(/\s+/g, '.')}@university.edu`
    });
  }
  
  return departments;
}

// Generate professors table
function generateProfessors(count = 20, departments = []) {
  const professors = [];
  
  for (let i = 0; i < count; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    
    // Randomly assign to a department if departments were provided
    const department = departments.length > 0 
      ? departments[faker.number.int({ min: 0, max: departments.length - 1 })]
      : { name: faker.helpers.arrayElement(departmentNames) };
    
    professors.push({
      id: i + 1,
      name: `Dr. ${firstName} ${lastName}`,
      bio: faker.lorem.paragraphs(2),
      email: faker.internet.email({ firstName, lastName, provider: 'university.edu' }),
      departmentId: department.id || null,
      departmentName: department.name
    });
  }
  
  return professors;
}

// Generate the data
const departments = generateDepartments(10);
const professors = generateProfessors(20, departments);

// Output as JSON files
fs.writeFileSync('departments.json', JSON.stringify(departments, null, 2));
fs.writeFileSync('professors.json', JSON.stringify(professors, null, 2));

console.log(`Generated ${departments.length} departments and ${professors.length} professors`);

    await prisma.department.createMany({
        data: departments,
        skipDuplicates: true,
        });
        
        await prisma.professor.createMany({
        data: professors,
        skipDuplicates: true,
        });
        console.log('Data saved to database');
}

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient;
module.exports = prisma;


const seed = async () => {

  const createFaculty = async () => {
    const faculty = [
      { 
        name: "Dr ChuckleBerry",
        bio: "This guy really knows how to chuckle. I mean have you seen his face? I really hope you have, it's been missing for months. If you see it please contact the police immediately",
        image: "https://freerangestock.com/sample/116471/school-teacher-.jpg",
        email: "ChuckleKnuckle@lu.com",
        department: 1
      },
      {
        name: "Ms Kumbermelon",
        bio: "Say hello to Ms Kumbermelon, she loves to partake in after school activities such as, cooking, dancing, gardening, and football. You wouldn't expect it but Ms Kumbermelon is a real nut for some pig skin. She once body checked 3 fully grown men going for a game winning score.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHGuZLO_LqCQbrFP8bzoDy2vq3CFq5eGvZHhT74Rrm0JOLQI9zxohCe6B38L046m5gHBk&usqp=CAU",
        email: "MelonlyFOOTB@lu.com",
        department: 1
      },
      {
        name: "Squirrly",
        bio: "Meet Squirrly, he is our funny little janitor guy. He has a weird thing for his brooms, usually talking to them and whispering. He is harmless but, best to not touch his brooms",
        image: "https://cbx-prod.b-cdn.net/COLOURBOX11591589.jpg?width=800&height=800&quality=70",
        email: "broomlover@lu.com",
        department: 2
      },
      {
        name: "Dr Doofenshmirtz",
        bio: "Dr. Heinz Doofenshmirtz, often called 'Doof' for short, he hates platypuses please do not bring that up, in his classes. He once through a stampler at one of his classmates because they had a platypus shirt on. But he is very kind hearted and couldn't hurt a fly.",
        image: "https://static.wikia.nocookie.net/phineasandferb/images/d/d0/Emperor_Doofenshmirtz_close-up.jpg/revision/latest?cb=20241221184041",
        email: "antiplaty@lu.com",
        department: 3
      },
      {
        name: "prof nailfile",
        bio: "Prof nailfile is just Ms KumberMelons nail file", 
        image: "https://cdn11.bigcommerce.com/s-preq7eb8ko/images/stencil/1280x1280/products/1017/1614/dovo_nail_file_heavy__36122.1738619932.jpg?c=2",
        email: "NA",
        department: 1     
      },
      {
        name: "Ms Mittens",
        bio: "Meet Ms Mittens, she is kind, loving but with a hint of spice. One of our most loved staff here at LU, always 'treats' everyone with respect",
        image: "https://t3.ftcdn.net/jpg/05/69/31/50/360_F_569315006_ld6pYJD2zvZBr4X5s8BTMsw1t7RhFs8h.jpg",
        email: "meow@fr_LU.com",
        department: 4
      },
      {
        name: "Ms Gumbersunt",
        bio: "Ms Gumbersunt is loving and kind, she teaching class and smells.",
        image: "https://thumbs.dreamstime.com/b/caucaisna-cheerful-female-senior-teacher-horizontal-portrait-caucasian-holding-yellow-file-blank-chalkboard-behind-33341749.jpg",
        email: "sweetoldlady@lu.com",
        department: 5
      },
      {
        name: "Mr WickleBusket",
        bio: "Mr WickleBusket sure knows how to have a good time. You'll see him always enjoying himself just around. He does things like smell flowers, cook chicken, and drive his golf cart inside of the building. That isn't allowed, we have to talk to him about that,but would just hate to ruin such a good mood.",
        image: "https://previews.123rf.com/images/josteinhauge/josteinhauge0602/josteinhauge060200020/320369-elderly-man-laughing.jpg",
        department: 5
      },
      {
        name: "Kyle",
        bio: "Kyle is one of our loudest faculty member here at LU, he's always rooting for the football teams. Calls almost everyone brother and was one of the guys body checked by Ms Kumbermelon, he as yet to live it down.",
        image: "https://www.splcenter.org/wp-content/uploads/2015/08/SPLC-Extremist-Files-Kyle-Bristow-1280x720.jpg",
        department: 3
      },
      {
        name: "Nico",
        bio: "Everyone loves Nico he's always about just attacking people with hugs. Its almost scary since he is almost 7 foot tall and charges people full force then squeezes them and runs away.",
        image: "https://sportsposterwarehouse.com/cdn/shop/products/stonecoldsteveaustin99pf-1_large.jpg?v=1496332403",
        department: 4
      }
    ]
    await prisma.faculty.createMany({ data: faculty })
  }
  


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
    await prisma.department.createMany({ data: departments });
  };

  await createFaculty();
  await createDepartments();
};


seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
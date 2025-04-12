const prisma = require("./index")

const seed = async () => {

  const createFaculty = async () => {
    const faculty = [
      { 
        name: "Dr ChuckleBerry",
        bio: "This guy really knows how to chuckle! I mean, have you seen his face? I really hope you have, it's been missing for months. If you see his face, please contact the police immediately.",
        image: "https://freerangestock.com/sample/116471/school-teacher-.jpg",
        email: "ChuckleKnuckle@lu.com",
        departmentId: 1
      },
      {
        name: "Ms Kumbermelon",
        bio: "Say hello to Ms Kumbermelon! She loves to partake in after school activities such as cooking, dancing, gardening, and football. You wouldn't expect it, but Ms Kumbermelon is a real nut for some pig skin! She once body checked 3 fully grown men going for a game winning score.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHGuZLO_LqCQbrFP8bzoDy2vq3CFq5eGvZHhT74Rrm0JOLQI9zxohCe6B38L046m5gHBk&usqp=CAU",
        email: "MelonlyFOOTB@lu.com",
        departmentId: 1
      },
      {
        name: "Squirrly",
        bio: "Meet Squirrly, he is our funny little janitor guy. He has a weird thing for his brooms, usually talking to them and whispering. He is harmless, but it's best to not touch his brooms.",
        image: "https://cbx-prod.b-cdn.net/COLOURBOX11591589.jpg?width=800&height=800&quality=70",
        email: "broomlover@lu.com",
        departmentId: 2
      },
      {
        name: "Dr Doofenshmirtz",
        bio: "Dr. Heinz Doofenshmirtz, often called 'Doof' for short. He hates platypuses. Please do not bring them up in his classes. He once threw a stapler at one of his classmates because they had a platypus shirt on. He is very kind hearted and couldn't hurt a fly.",
        image: "https://static.wikia.nocookie.net/phineasandferb/images/d/d0/Emperor_Doofenshmirtz_close-up.jpg/revision/latest?cb=20241221184041",
        email: "antiplaty@lu.com",
        departmentId: 3
      },
      {
        name: "prof nailfile",
        bio: "Prof nailfile is just Ms KumberMelon's nail file", 
        image: "https://cdn11.bigcommerce.com/s-preq7eb8ko/images/stencil/1280x1280/products/1017/1614/dovo_nail_file_heavy__36122.1738619932.jpg?c=2",
        email: "NA",
        departmentId: 1     
      },
      {
        name: "Ms Mittens",
        bio: "Meet Ms Mittens! She is kind and loving with a hint of spice. One of our most loved staff here at Licoln University. She always 'treats' everyone with respect.",
        image: "https://t3.ftcdn.net/jpg/05/69/31/50/360_F_569315006_ld6pYJD2zvZBr4X5s8BTMsw1t7RhFs8h.jpg",
        email: "meow@lu.com",
        departmentId: 4
      },
      {
        name: "Ms Gumbersunt",
        bio: "Ms Gumbersunt is loving and kind. She teaches class and smells.",
        image: "https://thumbs.dreamstime.com/b/caucaisna-cheerful-female-senior-teacher-horizontal-portrait-caucasian-holding-yellow-file-blank-chalkboard-behind-33341749.jpg",
        email: "sweetoldlady@lu.com",
        departmentId: 5
      },
      {
        name: "Mr WickleBusket",
        bio: "Mr WickleBusket sure knows how to have a good time! You'll always see him enjoying himself around campus! He enjoys things like smelling flowers, cooking chicken, and driving his golf cart inside of the building. That isn't allowed, we have to talk to him about that, but we would just hate to ruin such a good mood.",
        image: "https://previews.123rf.com/images/josteinhauge/josteinhauge0602/josteinhauge060200020/320369-elderly-man-laughing.jpg",
        email: "wicklebusket@lu.com",
        departmentId: 5
      },
      {
        name: "Kyle",
        bio: "Kyle is one of our loudest faculty members here at Lincoln University, he's always rooting for the football teams! He calls almost everyone 'brother'. He was also one of the guys body checked by Ms Kumbermelon, he as yet to live it down.",
        image: "https://www.splcenter.org/wp-content/uploads/2015/08/SPLC-Extremist-Files-Kyle-Bristow-1280x720.jpg",
        email: "kyle@lu.com",
        departmentId: 3
      },
      {
        name: "Nico",
        bio: "Everyone loves Nico! He's always about attacking people with hugs! It's almost scary, since he is almost 7 feet tall. He charges at people full force, then squeezes them, and then runs away.",
        image: "https://sportsposterwarehouse.com/cdn/shop/products/stonecoldsteveaustin99pf-1_large.jpg?v=1496332403",
        email: "niconico@lu.com",
        departmentId: 4
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
        email: "economics@lu.edu"
      },
      {
        name: "Computer Science",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://t4.ftcdn.net/jpg/03/30/54/13/360_F_330541358_We4blSYEnHKB3asKEX9eEconkQkp594S.jpg",
        email: "computer_science@lu.edu"
      },
      {
        name: "History",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://t4.ftcdn.net/jpg/02/71/94/77/360_F_271947704_jD7SGRpM8xJ3IGNSrrefkjtHa9trlXsL.jpg",
        email: "history@lu.edu"
      },
      {
        name: "Art",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://media.gettyimages.com/id/1352928891/photo/highschool-art-class.jpg?s=612x612&w=0&k=20&c=TllVEsASIxY6nkebuAPTfcyP4Fha2J0IRmETJys7RxI=",
        email: "art@lu.edu"
      },
      {
        name: "Physics",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://media.gettyimages.com/photos/physics-teacher-writing-math-equations-on-a-blackboard-picture-id1220610073?k=20&m=1220610073&s=612x612&w=0&h=p7hTVSTR3565rRtUODO9gcm7TQUBSPCeOiRU6JheiWY=",
        email: "physics@lu.edu"
      }
    ];
    await prisma.department.createMany({ data: departments });
  };

  const createUser = async () => {
    const users = [
      {
        firstName: "Ferris",
        lastName: "Bueller",
        email: "ferris_b@lu.com",
        password: "password",
        isAdmin: true
      },
      {
        firstName: "Eric",
        lastName: "Cartman",
        email: "eric_c@lu.com",
        password: "password",
        isAdmin: false
      },
      {
        firstName: "Mary",
        lastName: "Poppins",
        email: "mary_p@lu.com",
        password: "password",
        isAdmin: true
      }
    ];
    await prisma.user.createMany({ data: users});
  }

  await createDepartments();
  await createFaculty();
  await createUser();
};


seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });


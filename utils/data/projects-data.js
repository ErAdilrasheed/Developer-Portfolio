import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Fiverr India A Freelancing App",
    description:
      "Me and my team built an web based freelancing application. I developed frontend part using reactjs and scss. apart from frontend I also implemented JWt for authentication and authorization, my team member worked on backend part using nodejs,expressjs,mongodb, after completion of the project I tested it on lambdatest.com and finally deployed it on vercel.com ",
    tools: [
      "Html",
      "Scss",
      "React",
      "JWT",
      "Lambdatest.com",
      "Express",
      "NodeJs",
      "MongoDB",
      "Mongoose",
      "Starapi",
    ],
    role: "Frontend Developer",
    code: "Click Here",
    demo1: "Live Preview",
    image: crefin,
  },
  
{
  id: 2,
  name: "Personal Portfolio App",
  description:
    "I developed my personal portfolio app to showcase my skills. This app built with reactjs and tailwind and some portion of the app uses nextjs(a framework of reactjs). I also implemented Emailjs in contact form for a better communication via gmail. This app is fully responsive and covers almost all type of devices. The app is deployed on vercel.com(a cloud based hosting provider ) ",
  tools: [
    "ReactJS",
    "Tailwind CSS",
    "NextJS",
    "EmailJS",
    "VS Code",
    "Canva",
  ],
  role: "Frontend Developer",
  code: "",
  demo2: "Live Preview",
  image: travel,
},
{
  id: 3,
  name: "Mau Mart-Online Saree Store",
  description:
    "I built a responsive web design for online saree store using HTML,CSS,Javascript. Implemented googlesheet to store subscription email address. I used canva to  make user apealing UI design. Currently I'm working on it's backend part to make a fully functional website",
  tools: [
    "HTML",
    "CSS",
    "JavaScript",
    "GoogleSheet",
    "Canva",
    "VS Code",
  ],
  code: "",
  role: "Frontend Developer",
  demo3: "Live Preview",
  image: realEstate,
},
{
  id: 4,
  name: "Speech Text Reader App",
  description:
    "I developed a speech text reader app using javascript, and a feature to listen your own text. The App basically deals javascript DOM manipulation",
  tools: ["HTML", "CSS", "Javascript", "cloudinary", "VS Code"],
  code: "",
  demo4: "Live Preview",
  image: ayla,
  role: "Frontend Developer",
},
]
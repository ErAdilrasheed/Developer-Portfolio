---
# [Built Portfolio With GitHub ](https://github.com/ErAdilrasheed/Developer-Portfolio)

---

# Developer Portfolio

### Are you struggling to create a professional portfolio website? Look no further! You can use the Developer Portfolio template and create your very own personalized portfolio today! My website is designed to be user-friendly and easily customizable, making it perfect for both developers and freelancers.

---

# Demo :movie_camera:

![](./public/image/screen.png)

## View live preview [here](https://adilrasheed.tech).

---

## Table of Contents :scroll:

- [Sections](#sections-bookmark)
- [Demo](#demo-movie_camera)
- [Installation](#installation-arrow_down)
- [Getting Started](#getting-started-dart)
- [Usage](#usage-joystick)
- [Packages Used](#packages-used-package)

---

# Sections :bookmark:

- HERO SECTION
- ABOUT ME
- EXPERIENCE
- SKILLS
- PROJECTS
- EDUCATION
- BLOG
- CONTACTS

---

# Installation :arrow_down:

### You will need to download Git and Node to run this project

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

#### Make sure you have the latest version of both Git and Node on your computer.

```
node --version
git --version
```

## <br />

# Getting Started :dart:

### Fork and Clone the repo

To Fork the repo click on the fork button at the top right of the page. Once the repo is forked open your terminal and perform the following commands

```
git clone https://github.com/<YOUR GITHUB USERNAME>/Developer-Portfolio.git

cd Developer-Portfolio
```

### Install packages from the root directory

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

# Usage :joystick:

Goto [emailjs.com](https://www.emailjs.com/) and create a new account for the mail sending. In free trial you will get 200 mail per month. After setup `emailjs` account, Please create a new `.env` file from `.env.example` file.

Eg:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID =
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID =
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY =
NEXT_PUBLIC_GTM = # For site analytics
NEXT_PUBLIC_APP_URL = "http://127.0.0.1:3000"
```

### Then, Customize data in the `utils/data` [folder](https://github.com/ErAdilrasheed/Developer-Portfolio/tree/main/utils/data).

Eg:

```javascript
export const personalData = {
  name: "Mohammad Adil Rasheed",
  profile: "./public/profile.png",
  designation: "Frontend Developer",
  description:
    "My name is Mohammad Adil Rasheed. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.",
  email: "er.adilrasheed@gmail.com",
  phone: "+919616316925",
  address: "Mau, Uttar Pradesh, India ",
  github: "https://github.com/eradilrasheed",
  facebook: "https://www.facebook.com/Er.MARasheed/",
  linkedIn: "https://www.linkedin.com/in/adilrasheedknit/",
  twitter: "https://twitter.com/er_marasheed",
  stackOverflow:"https://stackoverflow.com/users/23922646/mohammad-adil-rasheed",
  leetcode: "https://leetcode.com/adilrasheed/",
  devUsername: "adil4474",
  resume:"https://drive.google.com/file/d/1P7D3prQb-mQsHavdQtcXYkq1k2coBJmz/view?usp=drive_link",
};
```

`devUsername` Used for fetching blog from `dev.to`.

---

---

# Packages Used :package:

| Used Package List  |
| :----------------: |
|        next        |
|  @emailjs/browser  |
|    lottie-react    |
| react-fast-marquee |
|    react-icons     |
|   react-toastify   |
|        sass        |
|    tailwindcss     |

---

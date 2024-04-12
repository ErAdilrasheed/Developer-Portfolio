import c from '/public/svg/skills/c.svg';
import canva from '/public/svg/skills/canva.svg';
import css from '/public/svg/skills/css.svg';
import firebase from '/public/svg/skills/firebase.svg';
import git from '/public/svg/skills/git.svg';
import html from '/public/svg/skills/html.svg';
import java from '/public/svg/skills/java.svg';
import javascript from '/public/svg/skills/javascript.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import mysql from '/public/svg/skills/mysql.svg';
import react from '/public/svg/skills/react.svg';
import strapi from '/public/svg/skills/strapi.svg';
import tailwind from '/public/svg/skills/tailwind.svg';
import typescript from '/public/svg/skills/typescript.svg';
import nodejs from '/public/svg/skills/nodejs.svg';
import expressjs from '/public/svg/skills/expressjs.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
      case 'expressjs':
      return expressjs;
    case 'react':
      return react;
      case 'nodejs':
      return nodejs;
    case 'typescript':
      return typescript;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'tailwind':
      return tailwind;
    case 'c':
      return c;
    case 'java':
      return java;
    case 'firebase':
      return firebase;
    case 'git':
      return git;
    case 'strapi':
      return strapi;
    case 'canva':
      return canva;
    default:
      break;
  }
}

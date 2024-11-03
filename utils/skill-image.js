
import aws from '/public/svg/skills/aws.svg';
import azure from '/public/svg/skills/azure.svg';
import bootstrap from '/public/svg/skills/bootstrap.svg';
import c from '/public/svg/skills/c.svg';
import cplusplus from '/public/svg/skills/cplusplus.svg';
import css from '/public/svg/skills/css.svg';
import deno from '/public/svg/skills/deno.svg';
import django from '/public/svg/skills/django.svg';
import docker from '/public/svg/skills/docker.svg';
import figma from '/public/svg/skills/figma.svg';
import firebase from '/public/svg/skills/firebase.svg';
import gcp from '/public/svg/skills/gcp.svg';
import git from '/public/svg/skills/git.svg';
import go from '/public/svg/skills/go.svg';
import graphql from '/public/svg/skills/graphql.svg';
import html from '/public/svg/skills/html.svg';
import java from '/public/svg/skills/java.svg';
import javascript from '/public/svg/skills/javascript.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import mysql from '/public/svg/skills/mysql.svg';
import nextJS from '/public/svg/skills/nextJS.svg';
import nginx from '/public/svg/skills/nginx.svg';
import numpy from '/public/svg/skills/numpy.svg';
import nuxtJS from '/public/svg/skills/nuxtJS.svg';
import opencv from '/public/svg/skills/opencv.svg';
import postgresql from '/public/svg/skills/postgresql.svg';
import python from '/public/svg/skills/python.svg';
import pytorch from '/public/svg/skills/pytorch.svg';
import react from '/public/svg/skills/react.svg';
import ruby from '/public/svg/skills/ruby.svg';
import selenium from '/public/svg/skills/selenium.svg';
import strapi from '/public/svg/skills/strapi.svg';
import tailwind from '/public/svg/skills/tailwind.svg';
import typescript from '/public/svg/skills/typescript.svg';
import vitejs from '/public/svg/skills/vitejs.svg';

import Redux from '/public/svg/skills/redux.svg';
import Postman from '/public/svg/skills/postman.svg';
import Jira from '/public/svg/skills/jira.svg';
import GitHub from '/public/svg/skills/gitHub.svg';
import Node from '/public/svg/skills/node.js.svg';
import Express from '/public/svg/skills/express.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'gcp':
      return gcp;
    case 'html':
      return html;
    case 'docker':
      return docker;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'nuxt js':
      return nuxtJS;
    case 'react':
      return react;
    case 'typescript':
      return typescript;
    case 'bootstrap':
      return bootstrap;
    case 'memsql':
      return memsql;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'go':
      return go;
    case 'java':
      return java;
    case 'python':
      return python;
    case 'ruby':
      return ruby;
    case 'aws':
      return aws;
    case 'deno':
      return deno;
    case 'django':
      return django;
    case 'firebase':
      return firebase;
    case 'git':
      return git;
    case 'graphql':
      return graphql;
    case 'nginx':
      return nginx;
    case 'numpy':
      return numpy;
    case 'opencv':
      return opencv;
    case 'pytorch':
      return pytorch;
    case 'selenium':
      return selenium;
    case 'strapi':
      return strapi;
    case 'azure':
      return azure;
    case 'figma':
      return figma;
    case 'redux':
      return Redux;
    case 'postman':
      return Postman;
    case 'jira':
      return Jira;
    case 'github':
      return GitHub;
    case 'node':
      return Node;
    case 'express':
      return Express;
    default:
      break;
  }
}

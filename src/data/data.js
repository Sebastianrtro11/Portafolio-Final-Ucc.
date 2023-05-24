import logo from './../assets/images/logo.svg';
import twitter from './../assets/images/twitter.svg';
import github from './../assets/images/github.svg';
import instagram from './../assets/images/instagram.svg';
import ui from './../assets/images/ui.svg';
import serviceIcon1 from './../assets/images/service_icon_1.svg';
import serviceIcon2 from './../assets/images/service_icon_2.svg';
import serviceIcon3 from './../assets/images/service_icon_3.svg';
import foto from './../assets/images/foto.jpeg';
import { TbBrandCSharp } from 'react-icons/tb';
import csharp from './../assets/images/csharp.svg';
import py from './../assets/images/py.svg';
import ts from './../assets/images/tipescript.svg';
import html from './../assets/images/html.svg';
import css from './../assets/images/css.svg';

export const HeaderData = {
  logo: {
    title: 'UCC',
    link: 'index.html',
    icon: logo,
    text: "Retro"
  },
  nav: [
    {
      id: 1,
      title: 'Inicio',
      link: 'index.html',
    },
    {
      id: 2,
      title: 'Experiencia',
      link: 'servicios.html',
    },
    {
      id: 3,
      title: 'Proyectos',
      link: 'experiencia.html',
    },
    {
      id: 4,
      title: 'Footer',
      link: 'proyectos.html',
    },
  ],
  social: [
    {
      id: 1,
      title: 'Twitter',
      link: 'twitter.html',
      icon: twitter,
    },
    {
      id: 2,
      title: 'GitHub',
      link: 'github.html',
      icon: github,
    },
    {
      id: 3,
      title: 'Instagram',
      link: 'instagram.html',
      icon: instagram,
    },
  ],
};

export const HeroData = {
  title: 'Richard Sebastian Rosero / Retros',
  subTitle:
    'Soy un estudiante de ingenieria de software que cada dia aprende un poco mas y crece en la industria del desarrollo de software y de igual manera me apaciona el deporte.',
  btnTextDownloadCv: 'Descargar CV',
  btnTextContact: 'Contactarnos',
  iconHero: foto,
};

export const ServiceData = {
  header: {
    title: 'Proyectos',
    subTitle:
      'este apartado tiene como proposito mostrarnos los proyectos que he realizado.',
  },
  items: [
    {
      id: 1,
      icon: serviceIcon1,
      title: 'Desarrollo de api rest en springboot y Angular',
      subTitle:
        'Este fue un proyeco realizado en dos ejercicios el primero hecha oara listar usuarios con su respectivo username y valores del usuario, el segundo fue un listadode productos y el tercero como proyecto personal realice el ejercicio con un listado de zapatos para esto se uso una base de datos que podia almacenar los porductos y podian ser modificados.',
      orientation: 'left',
    },
    {
      id: 2,
      icon: serviceIcon2,
      title: 'Desarrollo de ejercicios de programacion orientada a objetos',
      subTitle:
        'Desarrollamos algunos ejemplos complejos con uso de los fundamentos de POO como por ejemplo cajeros que procesan transacciones ya sea con base de datos o incluso leyendo la informacion de un txt.',
      orientation: 'right',
    },
    {
      id: 3,
      icon: serviceIcon3,
      title: 'Productos ',
      subTitle:
        'Los productos creados son productos basicos como por ejemplo el desarrolo de un kindle o el desarrollo de un cajero ejecutados en consola con el us de POO hasta programar api rest basicas de usuarios con los que se puede poner en practica el uso de lo metodos http.',
      orientation: 'left',
    },
  ],
};

export const ExperienciaData = [
  {
    // svg: "TbBrandCSharp",
    svg: csharp,
    title: 'Uso basico de C#',
    text: 'Logre completar curso basicos de C# llegando a tener conocimiento en el su aplicacion en la programacion orientada a objetos. '
  },
  {
    svg: py,
    title: 'Uso basico de Python',
    text: 'Logre completar curso de programacion en python llegando a tener conocimiento en la aplicacion de la programacion orientada a objetos. '
  },
  {
    svg: ts,
    title: 'Uso de TipeScript',
    text: 'Uso de tipescript para desarrollo de ejercicios de desarrollo de api rest con springboot.'
  },
  {
    svg: html,
    title: 'Uso de Html ',
    text: 'Uso de html para desarrollo de ejersicios que inplican la aplicacion de este lenguaje. '
  },
  {
    svg: css,
    title: 'Uso de CSS',
    text: 'Uso de CSS para realizar ejercicios que implican este lenguaje.'
  }
]
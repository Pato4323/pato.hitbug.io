import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Astro } from "@/components/ui/svgs/astro";

export const DATA = {
  name: "Pato - Minecraft Developer",
  initials: "P",
  url: "https://pato.github.io",
  location: "España",
  locationLink: "https://www.google.com/maps/place/spain",

  description:
    "Desarrollador de Minecraft ⚒️ Creo servidores, plugins y mundos personalizados.",

  summary:
    "Soy Pato, desarrollador de Minecraft enfocado en la creación de servidores, plugins y sistemas de juego personalizados. Me gusta construir experiencias únicas dentro del juego y mejorar la jugabilidad con código.",

  avatarUrl: "/picofme.png",
  ogImage: "/og_image.png",

  sections: {
    about: { order: 1, enabled: true, heading: "Sobre mí" },
    skills: { order: 2, enabled: true, heading: "Habilidades" },
    projects: {
      order: 3,
      enabled: true,
      label: "Proyectos",
      heading: "Mis proyectos de Minecraft",
      text: "Aquí están algunos de mis trabajos relacionados con Minecraft.",
    },
    contact: {
      order: 4,
      enabled: true,
      label: "Contacto",
      heading: "Contáctame",
      text: "Puedes contactarme si quieres colaborar en proyectos de Minecraft.",
    },
  },

  skills: [
    { name: "Minecraft Plugins", icon: null },
    { name: "Java", icon: null },
    { name: "Bedrock Add-ons", icon: null },
    { name: "Server Setup", icon: null },
    { name: "Discord Bots", icon: null },
  ],

  navbar: [
    { href: "/", label: "Inicio" },
    { href: "/blog", label: "Blog" },
  ],

  contact: {
    email: "pato@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/",
        navbar: true,
      },
      Discord: {
        name: "Discord",
        url: "https://discord.com/",
        navbar: true,
      },
      YouTube: {
        name: "YouTube",
        url: "https://youtube.com/",
        navbar: true,
      },
    },
  },

  work: [],

  education: [
    {
      school: "Minecraft Developer (Autodidacta)",
      degree: "Aprendizaje independiente",
      start: "2024",
      end: "Actualidad",
    },
  ],

  projects: [
    {
      title: "Servidor Survival Minecraft",
      description: "Servidor personalizado con sistemas únicos de juego.",
      href: "#",
      technologies: ["Minecraft", "Plugins", "Java"],
    },
    {
      title: "Plugin de economía",
      description: "Sistema de economía para servidores Minecraft.",
      href: "#",
      technologies: ["Java", "Spigot API"],
    },
    {
      title: "Mundo creativo",
      description: "Mapa personalizado con construcciones detalladas.",
      href: "#",
      technologies: ["Minecraft", "Building"],
    },
  ],

  hackathons: [],

  photos: [],
} as const;

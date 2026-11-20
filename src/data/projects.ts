import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "heysak",
    title: "Heysak",
    category: "Aplicación de escritorio / Punto de venta",
    stack: ["Electron", "React", "TypeScript", "SQLite"],
    summary:
      "Sistema de escritorio para gestionar inventario, productos y ventas de pequeños negocios, con almacenamiento local y funcionamiento sin conexión permanente a internet.",
    context:
      "Proyecto de software orientado a pequeños negocios que necesitan administrar sus operaciones comerciales desde una aplicación de escritorio.",
    problem:
      "Centralizar el registro de productos, movimientos de inventario y ventas sin depender de una plataforma web o conexión permanente.",
    solution:
      "Aplicación de escritorio desarrollada con Electron, React y TypeScript, utilizando SQLite para almacenar la información localmente.",
    features: [
      "Gestión de productos, categorías y marcas",
      "Control de inventario y movimientos de stock",
      "Registro de ventas y anulación de operaciones",
      "Dashboard con indicadores de actividad",
      "Importación y exportación de productos",
      "Respaldos locales y en Google Drive",
      "Activación mediante licencias de software",
    ],
    decisions: [
      "Electron para distribuir una aplicación de escritorio multiplataforma",
      "SQLite para persistencia local sin servidor externo",
      "Comunicación IPC entre los procesos de Electron y la interfaz React",
      "Separación de la gestión de licencias mediante un servicio backend",
    ],
    image: "/images/projects/heysak.webp",
  },
  {
    slug: "aisaklicensing",
    title: "AisakLicensing",
    category: "Plataforma backend / Gestión de licencias",
    stack: ["Laravel", "PHP", "React", "Inertia.js"],
    summary:
      "Plataforma para administrar licencias de software, activaciones, períodos de prueba, pedidos y documentación legal.",
    context:
      "Sistema desarrollado para centralizar la administración de licencias y versiones de aplicaciones de software.",
    problem:
      "Gestionar la activación de aplicaciones, los períodos de prueba y los registros de aceptación legal desde un servicio centralizado.",
    solution:
      "Backend desarrollado con Laravel, API REST para operaciones de licenciamiento y panel administrativo construido con React e Inertia.js.",
    features: [
      "API REST para activación y validación de licencias",
      "Gestión de licencias y activaciones por dispositivo",
      "Administración de períodos de prueba",
      "Gestión de aplicaciones y versiones",
      "Administración de pedidos",
      "Gestión de documentos legales y aceptaciones",
    ],
    decisions: [
      "Separación entre endpoints de licenciamiento y panel administrativo",
      "Asociación de activaciones a identificadores de dispositivo",
      "Generación de licencias firmadas",
      "Versionado de documentos legales y registro de aceptaciones",
    ],
    image: "/images/projects/aisaklicensing.png",
  },
  {
    slug: "sistema-gestion-reservas",
    title: "Sistema de Gestión de Reservas",
    category: "Aplicación web / Gestión de reservas",
    stack: ["Laravel", "React", "Inertia.js", "Tailwind CSS"],
    summary:
      "Aplicación Full Stack para administrar usuarios, clientes, servicios, horarios y reservas de pequeños negocios.",
    context:
      "Proyecto web orientado a negocios que necesitan digitalizar la administración de citas y turnos de atención. Actualmente en desarrollo.",
    problem:
      "Organizar la información de clientes, servicios, disponibilidad y reservas dentro de un mismo sistema.",
    solution:
      "Aplicación web desarrollada con Laravel, React e Inertia.js, con un flujo funcional para gestionar servicios, horarios y reservas.",
    features: [
      "Gestión de usuarios",
      "Administración de clientes",
      "Registro y gestión de servicios",
      "Configuración de horarios",
      "Gestión de reservas y turnos",
      "Interfaz web adaptable",
    ],
    decisions: [
      "Laravel para la lógica de negocio y operaciones backend",
      "React e Inertia.js para integrar la interfaz con Laravel",
    ],
    image: "/images/projects/sistema-gestion-reservas.png",
  },
  {
    slug: "plataforma-logistica-transporte",
    title: "Plataforma de Logística y Transporte",
    category: "Aplicación web / Gestión logística",
    stack: ["Laravel", "React", "PHP", "MySQL"],
    summary:
      "Plataforma web para administrar clientes, vehículos, rutas y mantenimientos, con funcionalidades de geolocalización y gestión de roles.",
    context:
      "Proyecto orientado a empresas de transporte y operaciones logísticas, incluyendo escenarios de transporte minero.",
    problem:
      "Centralizar la información operativa de vehículos, clientes, rutas y mantenimientos, facilitando el seguimiento de las operaciones.",
    solution:
      "Aplicación web desarrollada con Laravel, React y MySQL que integra módulos de gestión logística y seguimiento de ubicaciones.",
    features: [
      "Administración de clientes",
      "Gestión de vehículos",
      "Registro y administración de rutas",
      "Control de mantenimientos",
      "Geolocalización con actualizaciones periódicas",
      "Alertas relacionadas con rutas",
      "Gestión de roles de usuario",
    ],
    decisions: [
      "Laravel para desarrollar la lógica backend",
      "React para construir la interfaz de usuario",
      "MySQL para almacenar la información operativa",
    ],
    image: "/images/projects/plataforma-logistica-transporte.png",
  },
  {
    slug: "gestion-activos",
    title: "Sistema de Gestión de Activos",
    category: "Aplicación web / Gestión institucional",
    stack: ["Laravel", "PHP", "MySQL"],
    summary:
      "Sistema web responsive orientado al registro, control y administración de activos institucionales.",
    context:
      "Proyecto desarrollado en un entorno institucional para apoyar la gestión de activos.",
    problem:
      "Facilitar la organización y administración de la información de activos mediante una aplicación web centralizada.",
    solution:
      "Sistema web responsive desarrollado con Laravel y MySQL para gestionar información relacionada con activos institucionales.",
    features: [
      "Registro y administración de activos",
      "Gestión de información institucional",
      "Interfaz web responsive",
    ],
    decisions: [
      "Laravel para implementar las funcionalidades del sistema",
      "MySQL como base de datos relacional",
    ],
    image: "/images/projects/gestion-activos.svg",
  },
];

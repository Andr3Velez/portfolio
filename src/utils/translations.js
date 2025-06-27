export const translations = {
  en: {
    // Header
    products: "Products",
    experience: "Experience",
    contact: "Contact",
    aboutMe: "About Me",

    // Hero
    greeting: "Hey!, I'm André",
    heroDescription: "I'm a junior Front-End developer with Expertise in",
    backendSkills:
      "and I'm currently learning some Back-end skills such as: Node, Express, PostgreSQL, MongoDB.",
    availableForWork: "Available for Work!",

    // Products
    posTitle: "POS - Point of Sale",
    posDescription:
      "Welcome to Friday, a modern, simple and intuitive POS system to have all your sales, reports, and more in one place. It is designed to be user-friendly and efficient, making it easy for you to manage your business operations.",
    demo: "Demo",

    // Projects
    projects: "Projects",
    postTickTitle: "Post Tick",
    postTickDescription:
      "I wanted to show my back-end skills as well with this Post Tick project. I'm using Socket.io for real-time communication. Which means that multiple users can open the project and see the same data (Post Ticks) in real-time.",

    // Experience
    experienceTitle: "Experience",
    march2022: "March 2022",
    quantumJob: "Junior Full-stack Developer in Quantum Outsourcing Group",
    quantumTask1:
      "Using the API of ChatGPT, I created a chatbot that helped to centralize all the important processes of the company instead of having multiple PDFs, Excels, etc.",
    quantumTask2:
      "Creating a clock-in tool that allows workers to generate their timesheets.",
    quantumTask3: "I don't know what to put here",
    march2021: "March 2021",
    konectaJob: "RPA Developer in Konecta",
    tasks: "Tasks",
    konectaTask1:
      "Talking to the operation (call center), and with the managers to develop the automation",
    konectaTask2:
      "Improving between 20 to 30% the different processes of the operation which means getting more work done",
    konectaTask3:
      "Helping the Company to save money on hiring due to the optimization in time, avoiding human mistakes",
    konectaTask4:
      'I proposed and crafted a "magazine" where we can see the projects (UI, code and good practices), of the co-workers. This helped to improve our code and team-work',

    // About Me
    aboutMeTitle: "About me",
    aboutMeDescription:
      "My name is André Vélez, and I got into programming because I didn't know what I wanted to study. My first job was as a bilingual agent in a call center for a couple of years. Because of that experience I was able to improve my English proficiency. Currently, I'm studying and developing projects to become a \"full-stack web developer\" because there are too many exciting technologies to stick to just one.",

    // Footer
    footerText: "© 2025 Made by André Vélez with ❤️ and tons of ☕☕☕"
  },
  es: {
    // Header
    products: "Productos",
    experience: "Experiencia",
    contact: "Contacto",
    aboutMe: "Sobre Mí",

    // Hero
    greeting: "¡Hola!, Soy André",
    heroDescription: "Soy un desarrollador Front-End junior con experiencia en",
    backendSkills:
      "y actualmente estoy aprendiendo algunas habilidades de Back-end como: Node, Express, PostgreSQL, MongoDB.",
    availableForWork: "¡Disponible para trabajar!",

    // Products
    posTitle: "POS - Punto de Venta",
    posDescription:
      "Bienvenido a Friday, un sistema POS moderno, simple e intuitivo para tener todas tus ventas, reportes y más en un solo lugar. Está diseñado para ser fácil de usar y eficiente, facilitando la gestión de las operaciones de tu negocio.",
    demo: "Demo",

    // Projects
    projects: "Proyectos",
    postTickTitle: "Post Tick",
    postTickDescription:
      "Quería mostrar mis habilidades de back-end también con este proyecto Post Tick. Estoy usando Socket.io para comunicación en tiempo real. Lo que significa que múltiples usuarios pueden abrir el proyecto y ver los mismos datos (Post Ticks) en tiempo real.",

    // Experience
    experienceTitle: "Experiencia",
    march2022: "Marzo 2022",
    quantumJob: "Desarrollador Full-stack Junior en Quantum Outsourcing Group",
    quantumTask1:
      "Usando la API de ChatGPT, creé un chatbot que ayudó a centralizar todos los procesos importantes de la empresa en lugar de tener múltiples PDFs, Excels, etc.",
    quantumTask2:
      "Creando una herramienta de marcado de entrada que permite a los trabajadores generar sus hojas de tiempo.",
    quantumTask3: "No sé qué poner aquí",
    march2021: "Marzo 2021",
    konectaJob: "Desarrollador RPA en Konecta",
    tasks: "Tareas",
    konectaTask1:
      "Hablar con la operación (call center), y con los gerentes para desarrollar la automatización",
    konectaTask2:
      "Mejorando entre 20 a 30% los diferentes procesos de la operación lo que significa hacer más trabajo",
    konectaTask3:
      "Ayudando a la empresa a ahorrar dinero en contrataciones debido a la optimización en tiempo, evitando errores humanos",
    konectaTask4:
      'Propuse y creé una "revista" donde podemos ver los proyectos (UI, código y buenas prácticas), de los compañeros de trabajo. Esto ayudó a mejorar nuestro código y trabajo en equipo',

    // About Me
    aboutMeTitle: "Sobre mí",
    aboutMeDescription:
      'Mi nombre es André Vélez, y entré al mundo de la programación porque no sabía qué quería estudiar. Mi primer trabajo fue como asesor bilingüe en un call center por un par de años. Gracias a esa experiencia pude mejorar mi nivel de inglés. Actualmente, estoy estudiando y desarrollando proyectos para convertirme en un "desarrollador web full-stack" porque hay demasiadas tecnologías emocionantes como para quedarme con una sola.',

    // Footer
    footerText: "© 2025 Hecho por André Vélez con ❤️ y toneladas de ☕☕☕"
  }
}

export function getTranslation(key, lang = "en") {
  return translations[lang]?.[key] || translations.en[key] || key
}

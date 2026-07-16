/**
 * Preguntas frecuentes de Develop. Fuente única de datos: la usa la vista /faq
 * (acordeón) y el JSON-LD (schema.org/FAQPage) para SEO. Contenido alineado con
 * la base de conocimiento de BellA — sin inventar precios ni fechas.
 */

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqCategory {
  category: string;
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    category: "Programas y formación",
    items: [
      {
        q: "¿Qué programas de formación ofrece Develop?",
        a: "Tres rutas principales: Lead Orchestrator (formación en IA para gobernar agentes inteligentes), //TODO Academy (inmersión total de más de 6 meses) y los Cursos de Certificación (más de 100 cursos individuales en 21 áreas). Puedes verlos en la sección de Programas.",
      },
      {
        q: "¿Qué es Lead Orchestrator?",
        a: "Es el programa insignia enfocado en IA: aprendes a orquestar equipos de agentes inteligentes (Agent-to-Agent) integrados con herramientas como GitHub, Slack y AWS mediante MCP. Dura alrededor de 50 horas intensivas e incluye certificación internacional.",
      },
      {
        q: "¿Qué es //TODO Academy?",
        a: "Un programa de inmersión total de más de 6 meses diseñado para estudiantes y recién egresados. Incluye 4 certificaciones internacionales y prácticas reales con empresas líderes, para cerrar la brecha entre la academia y la industria.",
      },
      {
        q: "¿Necesito experiencia previa para empezar?",
        a: "Depende del programa. //TODO Academy está pensado para estudiantes y recién egresados que quieren dar el salto a la industria, mientras que otros cursos y Lead Orchestrator suman a perfiles con bases técnicas. Si tienes dudas sobre cuál se ajusta a ti, un asesor puede orientarte desde la página de Contacto.",
      },
    ],
  },
  {
    category: "Certificaciones",
    items: [
      {
        q: "¿Qué certificaciones puedo obtener?",
        a: "Certificaciones internacionales de Oracle, Certiprof, Certiport (Microsoft, Adobe, Autodesk), Android ATC y Unity, entre otras. Develop es centro autorizado Pearson VUE y Prometric.",
      },
      {
        q: "¿Las certificaciones tienen validez internacional?",
        a: "Sí. Se emiten a través de líderes globales como Pearson VUE, Prometric, Oracle y Certiprof, con reconocimiento internacional.",
      },
      {
        q: "¿El examen de certificación está incluido en el curso?",
        a: "En la mayoría de los cursos el voucher del examen de certificación ya está incluido. Para confirmar un caso concreto, lo mejor es consultarlo con un asesor.",
      },
      {
        q: "¿En qué modalidad se imparten los cursos?",
        a: "Son 100% online y en vivo (clases síncronas con expertos), con metodología Blended E-Learning y seguimiento del sistema de calidad DQS. Las rutas de autoestudio asíncrono están en camino.",
      },
    ],
  },
  {
    category: "Empresas y talento",
    items: [
      {
        q: "Soy una empresa y necesito contratar talento TI, ¿cómo funciona?",
        a: "Puedes solicitar perfiles certificados y evaluados con el método Top Grading de Quary desde la página Encuentra Talento. Nuestro equipo te contacta en menos de 24 horas.",
      },
      {
        q: "¿Qué es la Fábrica de Talento?",
        a: "Un modelo de academia personalizada, junto a Quary, que co-crea perfiles a la medida de tu proyecto: productivos, certificados y alineados a tu cultura, listos en 1 a 3 meses.",
      },
      {
        q: "¿Qué es Quary?",
        a: "La división de reclutamiento especializado del ecosistema. Aplica el método Top Grading (verificación de historial, evaluación técnica con estándares Silicon Valley y match cultural) para asegurar perfiles de alto nivel.",
      },
      {
        q: "¿Ofrecen capacitación para el equipo de mi empresa?",
        a: "Sí. Diseñamos programas de capacitación corporativa a la medida (Oracle, Java, Cloud y más) con seguimiento DQS en tiempo real. Puedes agendar una reunión desde Contacto.",
      },
    ],
  },
  {
    category: "Estudiantes y empleo",
    items: [
      {
        q: "Busco empleo como desarrollador, ¿qué puedo hacer?",
        a: "Sube tu CV a nuestra Bolsa de Talento Externo en la página 'Únete como Colaborador'. Si tu perfil encaja, te guiamos en un proceso de capacitación y certificación para presentarte a las mejores oportunidades a través de Quary.",
      },
      {
        q: "¿Develop ayuda a conseguir empleo al terminar?",
        a: "El 96% de nuestros egresados consigue empleo en los primeros 3 meses. El ecosistema Quary conecta al talento certificado con empresas del sector.",
      },
      {
        q: "¿Cómo me inscribo a un programa o curso?",
        a: "Escríbenos desde la página de Contacto para recibir orientación e inscripción, o revisa el Calendario de aperturas para conocer las próximas fechas disponibles.",
      },
    ],
  },
  {
    category: "General",
    items: [
      {
        q: "¿Cuánto cuestan los programas y certificaciones?",
        a: "Los precios varían según el programa, la modalidad y las promociones vigentes, por lo que preferimos compartirlos de forma personalizada. Escríbenos desde Contacto y un asesor te dará la información actualizada.",
      },
      {
        q: "¿Cómo puedo contactar a Develop?",
        a: "Por correo en contacto@develop.com.mx, por teléfono al +52 56 1024 8938, o desde el formulario de la página de Contacto. Atendemos de lunes a viernes, de 9:00 a.m. a 6:00 p.m.",
      },
      {
        q: "¿Dónde se ubica Develop?",
        a: "En la Ciudad de México, México. Muchos programas y cursos se imparten en línea, con alcance en todo el país.",
      },
      {
        q: "¿Quién es BellA?",
        a: "BellA es la asistente virtual con IA del sitio. Puede orientarte sobre programas, certificaciones, talento y navegación. Para temas específicos o definitivos, siempre te derivará con el equipo humano de Develop.",
      },
    ],
  },
];

/** Aplana el catálogo para el JSON-LD (schema.org/FAQPage). */
export const faqSchemaItems: FaqItem[] = faqCategories.flatMap((c) => c.items);

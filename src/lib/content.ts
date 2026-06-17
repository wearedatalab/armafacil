/**
 * Datos de los tutoriales (contenido de ejemplo, bilingüe).
 * Reemplaza los IDs de YouTube, los PDF y los textos por los reales de tu empresa.
 */

export type Lang = "es" | "en";
export type Loc = { es: string; en: string };

export interface VideoTut {
  /** ID de YouTube. (En el demo se usan videos de ejemplo). */
  id: string;
  title: Loc;
  durationSec: number;
}

export interface DocTut {
  title: Loc;
  pages: number;
  sizeKB: number;
  href: string;
}

export interface Faq {
  q: Loc;
  a: Loc;
}

export type CategoryKey =
  | "dormitorio"
  | "oficina"
  | "sala"
  | "comedor"
  | "almacenamiento";

export type Accent = "walnut" | "honey" | "forest" | "clay";

export interface Furniture {
  slug: string;
  category: CategoryKey;
  title: Loc;
  summary: Loc;
  /** 1 = Fácil · 2 = Media · 3 = Avanzada */
  difficulty: 1 | 2 | 3;
  timeMin: number;
  people: number;
  parts: number;
  accent: Accent;
  tools: Loc[];
  steps: Loc[];
  videos: VideoTut[];
  docs: DocTut[];
  faqs: Faq[];
}

export const CATEGORIES: { key: CategoryKey; label: Loc }[] = [
  { key: "dormitorio", label: { es: "Dormitorio", en: "Bedroom" } },
  { key: "oficina", label: { es: "Oficina", en: "Office" } },
  { key: "sala", label: { es: "Sala", en: "Living room" } },
  { key: "comedor", label: { es: "Comedor", en: "Dining" } },
  { key: "almacenamiento", label: { es: "Almacenamiento", en: "Storage" } },
];

export function categoryLabel(key: CategoryKey): Loc {
  return CATEGORIES.find((c) => c.key === key)!.label;
}

// Video de dominio público usado como ejemplo reproducible en el demo.
const SAMPLE_VIDEO = "aqz-KE-bpKQ";

const TOOL = {
  phillips: { es: "Destornillador de estrella", en: "Phillips screwdriver" },
  allen: { es: "Llave Allen (incluida)", en: "Allen key (included)" },
  mallet: { es: "Mazo de goma", en: "Rubber mallet" },
  level: { es: "Nivel", en: "Spirit level" },
  drill: { es: "Taladro (opcional)", en: "Drill (optional)" },
  tape: { es: "Cinta métrica", en: "Tape measure" },
} as const;

export const FURNITURE: Furniture[] = [
  {
    slug: "closet-nordico",
    category: "dormitorio",
    title: { es: "Clóset Nórdico 4 puertas", en: "Nordic Wardrobe, 4 doors" },
    summary: {
      es: "Un clóset grande con puertas corredizas, cajones internos y barra para colgar. El armado más completo: tómate tu tiempo.",
      en: "A large wardrobe with sliding doors, internal drawers and a hanging rail. The most complete build — take your time.",
    },
    difficulty: 3,
    timeMin: 120,
    people: 2,
    parts: 86,
    accent: "walnut",
    tools: [TOOL.phillips, TOOL.allen, TOOL.mallet, TOOL.level, TOOL.drill],
    steps: [
      {
        es: "Verifica las 86 piezas con la lista de partes antes de empezar.",
        en: "Check all 86 parts against the parts list before you start.",
      },
      {
        es: "Arma el cuerpo lateral izquierdo y derecho sobre el piso protegido.",
        en: "Assemble the left and right side panels on a protected floor.",
      },
      {
        es: "Une la base y el techo a los laterales; aún sin apretar del todo.",
        en: "Join the base and top to the sides; don't fully tighten yet.",
      },
      {
        es: "Escuadra el mueble, verifica con el nivel y aprieta todos los tornillos.",
        en: "Square the unit, check with the level and tighten every screw.",
      },
      {
        es: "Instala los rieles, las puertas corredizas y ajusta su deslizamiento.",
        en: "Install the rails, sliding doors and adjust their glide.",
      },
    ],
    videos: [
      {
        id: SAMPLE_VIDEO,
        title: { es: "Armado completo paso a paso", en: "Full step-by-step assembly" },
        durationSec: 1145,
      },
      {
        id: SAMPLE_VIDEO,
        title: { es: "Ajuste de puertas corredizas", en: "Adjusting the sliding doors" },
        durationSec: 372,
      },
    ],
    docs: [
      {
        title: { es: "Ficha técnica y plano", en: "Technical sheet & diagram" },
        pages: 12,
        sizeKB: 540,
        href: "/docs/closet-nordico-ficha.pdf",
      },
      {
        title: { es: "Lista de partes y tornillería", en: "Parts & hardware list" },
        pages: 3,
        sizeKB: 180,
        href: "/docs/closet-nordico-partes.pdf",
      },
    ],
    faqs: [
      {
        q: { es: "¿Puedo armarlo solo?", en: "Can I assemble it alone?" },
        a: {
          es: "Recomendamos 2 personas. Los laterales son pesados y levantar el cuerpo armado requiere apoyo.",
          en: "We recommend 2 people. The side panels are heavy and lifting the assembled body needs a second pair of hands.",
        },
      },
      {
        q: { es: "Las puertas no deslizan parejo, ¿qué hago?", en: "The doors don't glide evenly, what do I do?" },
        a: {
          es: "Ajusta los tornillos reguladores en la base de cada puerta. El video de ajuste muestra el punto exacto.",
          en: "Adjust the regulator screws at the base of each door. The adjustment video shows the exact spot.",
        },
      },
    ],
  },
  {
    slug: "cama-tarima",
    category: "dormitorio",
    title: { es: "Cama Tarima Queen", en: "Queen Platform Bed" },
    summary: {
      es: "Base de cama tipo tarima con tablillas de soporte. Sin tornillos a la vista y muy estable.",
      en: "A platform-style bed base with support slats. No visible screws and very stable.",
    },
    difficulty: 2,
    timeMin: 75,
    people: 2,
    parts: 42,
    accent: "honey",
    tools: [TOOL.allen, TOOL.mallet, TOOL.tape],
    steps: [
      {
        es: "Une las cuatro tablas del marco con los herrajes de esquina.",
        en: "Join the four frame boards using the corner brackets.",
      },
      {
        es: "Coloca la viga central y sus patas de refuerzo.",
        en: "Place the central beam and its support legs.",
      },
      {
        es: "Apoya y atornilla las tablillas en orden, de cabecera a pies.",
        en: "Lay and fasten the slats in order, from headboard to foot.",
      },
      {
        es: "Fija la cabecera y verifica que todo quede a escuadra.",
        en: "Attach the headboard and check everything is square.",
      },
    ],
    videos: [
      {
        id: SAMPLE_VIDEO,
        title: { es: "Cómo armar la cama tarima", en: "How to build the platform bed" },
        durationSec: 628,
      },
    ],
    docs: [
      {
        title: { es: "Ficha técnica y plano", en: "Technical sheet & diagram" },
        pages: 6,
        sizeKB: 320,
        href: "/docs/cama-tarima-ficha.pdf",
      },
      {
        title: { es: "Lista de partes y tornillería", en: "Parts & hardware list" },
        pages: 2,
        sizeKB: 120,
        href: "/docs/cama-tarima-partes.pdf",
      },
    ],
    faqs: [
      {
        q: { es: "¿Soporta colchón con base/box?", en: "Does it support a mattress with a box base?" },
        a: {
          es: "Sí, pero la tarima ya hace de base. Por diseño se usa con colchón directo, sin box.",
          en: "Yes, but the platform already acts as the base. By design it's used with the mattress directly, no box.",
        },
      },
      {
        q: { es: "¿Hace ruido al moverse?", en: "Does it creak when moving?" },
        a: {
          es: "Si cada tablilla queda bien fijada, no. Revisa que ninguna haya quedado floja.",
          en: "Not if every slat is properly fastened. Check that none were left loose.",
        },
      },
    ],
  },
  {
    slug: "escritorio-l",
    category: "oficina",
    title: { es: "Escritorio en L", en: "L-shaped Desk" },
    summary: {
      es: "Escritorio de esquina con pasacables y cajón. Ideal para home office; se arma en una hora.",
      en: "A corner desk with cable management and a drawer. Great for a home office; assembles in about an hour.",
    },
    difficulty: 2,
    timeMin: 60,
    people: 1,
    parts: 34,
    accent: "forest",
    tools: [TOOL.phillips, TOOL.allen, TOOL.level],
    steps: [
      {
        es: "Arma las dos superficies por separado, boca abajo sobre una manta.",
        en: "Assemble the two surfaces separately, face down on a blanket.",
      },
      {
        es: "Atornilla las patas y los refuerzos en diagonal.",
        en: "Fasten the legs and the diagonal braces.",
      },
      {
        es: "Une las dos superficies con la placa de esquina.",
        en: "Join the two surfaces using the corner plate.",
      },
      {
        es: "Voltea con cuidado, nivela las patas e instala el pasacables.",
        en: "Carefully flip it over, level the legs and fit the cable grommet.",
      },
    ],
    videos: [
      {
        id: SAMPLE_VIDEO,
        title: { es: "Armado del escritorio en L", en: "Assembling the L-shaped desk" },
        durationSec: 514,
      },
    ],
    docs: [
      {
        title: { es: "Ficha técnica y plano", en: "Technical sheet & diagram" },
        pages: 5,
        sizeKB: 280,
        href: "/docs/escritorio-l-ficha.pdf",
      },
      {
        title: { es: "Lista de partes y tornillería", en: "Parts & hardware list" },
        pages: 2,
        sizeKB: 110,
        href: "/docs/escritorio-l-partes.pdf",
      },
    ],
    faqs: [
      {
        q: { es: "¿Puedo armar la L hacia el otro lado?", en: "Can I build the L facing the other way?" },
        a: {
          es: "Sí. El escritorio es reversible: solo intercambia las superficies izquierda y derecha al unirlas.",
          en: "Yes. The desk is reversible: just swap the left and right surfaces when joining them.",
        },
      },
    ],
  },
  {
    slug: "biblioteca-5",
    category: "sala",
    title: { es: "Biblioteca 5 niveles", en: "5-tier Bookshelf" },
    summary: {
      es: "Repisa alta de cinco entrepaños. El armado más fácil para empezar; ideal para principiantes.",
      en: "A tall five-shelf unit. The easiest build to start with — perfect for beginners.",
    },
    difficulty: 1,
    timeMin: 40,
    people: 1,
    parts: 28,
    accent: "clay",
    tools: [TOOL.allen, TOOL.mallet],
    steps: [
      {
        es: "Inserta los pasadores de madera en los dos laterales.",
        en: "Insert the wooden dowels into the two side panels.",
      },
      {
        es: "Conecta los entrepaños empezando por el de abajo y el de arriba.",
        en: "Connect the shelves starting with the bottom and top ones.",
      },
      {
        es: "Coloca los entrepaños intermedios y asegúralos.",
        en: "Place the middle shelves and secure them.",
      },
      {
        es: "Clava el panel trasero y fija la repisa a la pared con el anclaje.",
        en: "Nail the back panel and anchor the shelf to the wall with the bracket.",
      },
    ],
    videos: [
      {
        id: SAMPLE_VIDEO,
        title: { es: "Arma tu biblioteca en 40 min", en: "Build your bookshelf in 40 min" },
        durationSec: 415,
      },
    ],
    docs: [
      {
        title: { es: "Ficha técnica y plano", en: "Technical sheet & diagram" },
        pages: 4,
        sizeKB: 210,
        href: "/docs/biblioteca-5-ficha.pdf",
      },
      {
        title: { es: "Lista de partes y tornillería", en: "Parts & hardware list" },
        pages: 1,
        sizeKB: 90,
        href: "/docs/biblioteca-5-partes.pdf",
      },
    ],
    faqs: [
      {
        q: { es: "¿Es obligatorio anclarla a la pared?", en: "Is anchoring it to the wall mandatory?" },
        a: {
          es: "Sí. Por seguridad, toda repisa alta debe anclarse para evitar volcamientos, sobre todo con niños en casa.",
          en: "Yes. For safety, any tall shelf must be anchored to prevent tipping, especially with children at home.",
        },
      },
    ],
  },
  {
    slug: "mesa-comedor",
    category: "comedor",
    title: { es: "Mesa de Comedor Roble", en: "Oak Dining Table" },
    summary: {
      es: "Mesa para seis puestos con patas atornilladas y refuerzo central. Armado rápido y resistente.",
      en: "A six-seat table with bolt-on legs and a central brace. Quick to assemble and sturdy.",
    },
    difficulty: 2,
    timeMin: 50,
    people: 2,
    parts: 22,
    accent: "walnut",
    tools: [TOOL.allen, TOOL.level, TOOL.tape],
    steps: [
      {
        es: "Voltea el tablero sobre una manta para no rayarlo.",
        en: "Turn the tabletop over onto a blanket so it doesn't get scratched.",
      },
      {
        es: "Atornilla las cuatro patas en sus insertos metálicos.",
        en: "Bolt the four legs into their metal inserts.",
      },
      {
        es: "Instala el travesaño central de refuerzo.",
        en: "Install the central reinforcement crossbar.",
      },
      {
        es: "Entre dos personas, voltea la mesa y nivela las patas.",
        en: "With two people, flip the table and level the legs.",
      },
    ],
    videos: [
      {
        id: SAMPLE_VIDEO,
        title: { es: "Montaje de la mesa de comedor", en: "Dining table assembly" },
        durationSec: 360,
      },
    ],
    docs: [
      {
        title: { es: "Ficha técnica y plano", en: "Technical sheet & diagram" },
        pages: 4,
        sizeKB: 200,
        href: "/docs/mesa-comedor-ficha.pdf",
      },
      {
        title: { es: "Lista de partes y tornillería", en: "Parts & hardware list" },
        pages: 1,
        sizeKB: 80,
        href: "/docs/mesa-comedor-partes.pdf",
      },
    ],
    faqs: [
      {
        q: { es: "Una pata queda más corta, ¿es normal?", en: "One leg seems shorter, is that normal?" },
        a: {
          es: "Es el piso, no la pata. Usa los reguladores de altura en la base de cada pata para nivelar.",
          en: "It's the floor, not the leg. Use the height adjusters at the base of each leg to level it.",
        },
      },
    ],
  },
  {
    slug: "comoda-6",
    category: "almacenamiento",
    title: { es: "Cómoda 6 cajones", en: "6-drawer Dresser" },
    summary: {
      es: "Cómoda con seis cajones sobre rieles metálicos. El reto está en armar y alinear los cajones.",
      en: "A dresser with six drawers on metal runners. The challenge is building and aligning the drawers.",
    },
    difficulty: 3,
    timeMin: 90,
    people: 1,
    parts: 64,
    accent: "honey",
    tools: [TOOL.phillips, TOOL.allen, TOOL.mallet, TOOL.level],
    steps: [
      {
        es: "Arma el cuerpo exterior y fíjalo a escuadra con el panel trasero.",
        en: "Build the outer body and square it using the back panel.",
      },
      {
        es: "Atornilla los rieles a cada lado, todos a la misma altura.",
        en: "Screw the runners to each side, all at the same height.",
      },
      {
        es: "Ensambla los seis cajones con sus frentes y fondos.",
        en: "Assemble the six drawers with their fronts and bottoms.",
      },
      {
        es: "Inserta los cajones y ajusta la alineación de los frentes.",
        en: "Slide in the drawers and adjust the alignment of the fronts.",
      },
    ],
    videos: [
      {
        id: SAMPLE_VIDEO,
        title: { es: "Cómoda paso a paso", en: "Dresser step by step" },
        durationSec: 845,
      },
      {
        id: SAMPLE_VIDEO,
        title: { es: "Alinear los frentes de los cajones", en: "Aligning the drawer fronts" },
        durationSec: 296,
      },
    ],
    docs: [
      {
        title: { es: "Ficha técnica y plano", en: "Technical sheet & diagram" },
        pages: 10,
        sizeKB: 480,
        href: "/docs/comoda-6-ficha.pdf",
      },
      {
        title: { es: "Lista de partes y tornillería", en: "Parts & hardware list" },
        pages: 3,
        sizeKB: 160,
        href: "/docs/comoda-6-partes.pdf",
      },
    ],
    faqs: [
      {
        q: { es: "Los cajones rozan al cerrar, ¿cómo lo corrijo?", en: "The drawers rub when closing, how do I fix it?" },
        a: {
          es: "Casi siempre es un riel a distinta altura. Afloja, nivela ambos rieles y vuelve a apretar.",
          en: "It's almost always a runner at a different height. Loosen, level both runners and retighten.",
        },
      },
      {
        q: { es: "¿Puedo cambiar el sentido de apertura?", en: "Can I change the opening direction?" },
        a: {
          es: "No, los rieles son laterales y fijos. La cómoda no tiene apertura reversible.",
          en: "No, the runners are side-mounted and fixed. The dresser is not reversible.",
        },
      },
    ],
  },
];

export function getFurniture(slug: string): Furniture | undefined {
  return FURNITURE.find((f) => f.slug === slug);
}

/** Preguntas frecuentes generales (no atadas a un mueble). */
export const GENERAL_FAQS: { topic: Loc; items: Faq[] }[] = [
  {
    topic: { es: "Antes de empezar", en: "Before you start" },
    items: [
      {
        q: { es: "¿Qué herramientas necesito?", en: "What tools do I need?" },
        a: {
          es: "La llave Allen viene incluida. Solo necesitas además un destornillador de estrella y, en algunos muebles, un mazo de goma. El taladro es opcional.",
          en: "The Allen key is included. You only also need a Phillips screwdriver and, for some pieces, a rubber mallet. A drill is optional.",
        },
      },
      {
        q: { es: "¿Cuánto tarda el armado?", en: "How long does assembly take?" },
        a: {
          es: "Entre 40 minutos y 2 horas según el mueble. Cada tutorial indica el tiempo estimado y si conviene ser dos personas.",
          en: "Between 40 minutes and 2 hours depending on the piece. Each tutorial shows the estimated time and whether two people are advised.",
        },
      },
      {
        q: { es: "¿Por dónde empiezo?", en: "Where do I begin?" },
        a: {
          es: "Despeja un espacio amplio, protege el piso con una manta y verifica todas las piezas con la lista de partes antes de atornillar nada.",
          en: "Clear a large space, protect the floor with a blanket and check every part against the parts list before fastening anything.",
        },
      },
    ],
  },
  {
    topic: { es: "Durante el armado", en: "During assembly" },
    items: [
      {
        q: { es: "Me faltó una pieza o un tornillo", en: "I'm missing a part or a screw" },
        a: {
          es: "Escríbenos por WhatsApp con el nombre del mueble y el número de la pieza (aparece en la lista de partes). Te enviamos el repuesto sin costo.",
          en: "Message us on WhatsApp with the furniture name and the part number (it's in the parts list). We'll send the replacement free of charge.",
        },
      },
      {
        q: { es: "Apreté de más y se pasó de rosca", en: "I over-tightened and stripped the thread" },
        a: {
          es: "Detente y no fuerces. Contáctanos: muchas veces se resuelve con un inserto, y te guiamos paso a paso.",
          en: "Stop and don't force it. Contact us: it's often solved with an insert, and we'll guide you step by step.",
        },
      },
    ],
  },
  {
    topic: { es: "Seguridad y cuidado", en: "Safety & care" },
    items: [
      {
        q: { es: "¿Debo anclar los muebles altos a la pared?", en: "Should I anchor tall furniture to the wall?" },
        a: {
          es: "Sí, siempre. Clósets, bibliotecas y cómodas altas incluyen un anclaje antivuelco. Es clave si hay niños en casa.",
          en: "Yes, always. Wardrobes, bookshelves and tall dressers include an anti-tip anchor. It's essential if there are children at home.",
        },
      },
      {
        q: { es: "¿Cómo limpio la madera?", en: "How do I clean the wood?" },
        a: {
          es: "Paño apenas húmedo y secado inmediato. Evita agua abundante y productos abrasivos.",
          en: "A barely damp cloth and dry it immediately. Avoid excess water and abrasive products.",
        },
      },
    ],
  },
  {
    topic: { es: "Si prefieres que lo armemos", en: "If you'd rather we assemble it" },
    items: [
      {
        q: { es: "¿Ofrecen el servicio de armado a domicilio?", en: "Do you offer in-home assembly?" },
        a: {
          es: "Sí. Si no quieres armarlo tú, nuestro equipo lo hace por ti. Escríbenos y coordinamos día, hora y presupuesto.",
          en: "Yes. If you'd rather not assemble it yourself, our team does it for you. Message us and we'll arrange the day, time and quote.",
        },
      },
    ],
  },
];

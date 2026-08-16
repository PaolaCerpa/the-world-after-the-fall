import type { Personaje } from "@/types/personaje";

export const personajes: Personaje[] = [
  {
    id: "jaehwan",
    imagen: "/assets/jaehwan_sole_king.png",
    descripcion:
      "El único caminante que se negó a usar la Piedra de Regresión. Conocido como la Pesadilla del Piso 99, busca destruir el sistema de la Torre mediante la fuerza bruta y una voluntad inquebrantable.",
    historia:
      "El único caminante conocido que se negó a usar la Piedra de Regresión, eligiendo enfrentar las consecuencias del tiempo en vez de reiniciarlo. Su viaje comenzó como un simple Caminante de la Torre, pero su voluntad inquebrantable y su negativa a retroceder lo llevaron a trascender el sistema mismo, convirtiéndose en una entidad capaz de desafiar a los Monarcas y editar la realidad a su alrededor.",

    identidad: {
      nombre: "Jaehwan (재환)",
      titulos: [
        "La Pesadilla del Piso 99",
        "El Rey del Caos (Sole-King)",
        "El Carnicero de Monarcas",
        "El que se niega a retroceder",
      ],
      estadoProgresion: [
        "Humano",
        "Caminante de la Torre",
        "Despierto (Awakener)",
        "Trascendente",
      ],
      facciones: [
        "Independiente",
        "Líder de la Expedición al Abismo",
        "Gobernante del Caos (de facto)",
      ],
      piedraRegresion: "Rechazada",
    },

    estadisticas: {
      ordenAdaptacion: "9º Orden (Adaptador Sobrecogedor) - Trascendido",
      etapaDespertarActual: "Edición",
      voluntad:
        "Infinita / Anómala (Densidad conceptual capaz de distorsionar el Caos)",
      rangoAmenaza: "Nivel Dios / Multiversal",
    },

    habilidades: {
      habilidadesDespertar: [
        {
          etapa: "Sospecha",
          nombreHabilidad: "Visión de Partículas y Enlaces",
          descripcion:
            "Permite ver la composición verdadera del mundo, leer mentes (interpretando partículas de pensamiento), traducir cualquier idioma y desmantelar materia al negar su existencia.",
          tipo: "Pasiva",
        },
        {
          etapa: "Comprensión",
          nombreHabilidad: "Contextualización Absoluta",
          descripcion:
            "No solo ve los datos, sino que entiende su función, origen y debilidad inmediatamente. Identifica verdades ocultas tras ilusiones complejas.",
          tipo: "Pasiva",
        },
        {
          etapa: "Vacío",
          nombreHabilidad: "Desapego del Sistema",
          descripcion:
            "Rompe la identidad impuesta por el mundo. Su existencia deja de ser registrada correctamente por las reglas convencionales de la Torre.",
          tipo: "Pasiva",
        },
        {
          etapa: "Edición",
          nombreHabilidad: "Reescritura de la Existencia",
          descripcion:
            "Capacidad de editar su propio mundo y a aquellos dentro de él como si fuera un texto o código. Control total sobre espacio-tiempo en su dominio.",
          tipo: "Activa",
        },
      ],

      tecnicas: [
        "Estocada Normal / Fuerte / Mundial",
        "Estocada del No-Muerto (Purificación espiritual)",
        "Estocada de Vínculo Cerebral (Corte de conexión con fuentes de poder)",
        "Puño de Estocada Mundial",
        "Espiral Fatal (Combinación de estocada y corte)",
        "50 Estocadas Fuertes Consecutivas",
      ],

      santuario: {
        nombre: "[Mundo Después de la Caída]",
        estadoManifestacion: "Editado",
        descripcion:
          "La materialización de su voluntad de destruir el sistema. Inicialmente una visión interna, ahora es una realidad superpuesta que anula las leyes de otros dioses y sistemas.",
        efectosActivos: [
          "Anulación de Habilidades y Configuraciones enemigas",
          "Daño directo a Conceptos y Dioses",
          "Distorsión del Tiempo local",
          "Generación de 'Poder del Mundo' ilimitado",
        ],
      },

      manipulacionLeyes: [
        "Distorsión del Tiempo",
        "Anulación de Poder (Story/Settings)",
        "Manipulación del Alma (a través de historias)",
        "Existencia Erasure (Borrado existencial de deidades)",
      ],

      resistencias: [
        "Inmune a Contaminación del Espíritu",
        "Inmune a Muerte Instantánea / Manipulación del Alma",
        "Resistencia a Efectos del Sistema (Maldiciones, Estados)",
        "Inmune a Desintegración (Ash)",
      ],
    },

    equipamiento: {
      armaPrincipal:
        "Espada de la Destrucción / Caída (Manifestación de su Santuario)",
      objetosClave: ["Ojos de Gestalt (Completos)", "Ropa de Despertar (Conceptual)"],
      aliados: ["Yoonhwan Kim", "Seoyul Han", "Cayman", "10 Clanes del Caos"],
      rivales: [
        "Los Monarcas",
        "Los Siete Soles",
        "Catástrofe (Rey Único)",
        "Myad Van Deklan",
      ],
      objetivo:
        "Destruir a los Monarcas, liberar a la humanidad del ciclo de regresión y descubrir la verdad tras el Árbol de la Imaginería.",
    },
  },
];
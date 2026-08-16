export type EtapaDespertar =
    | "Sospecha"
    | "Comprensión"
    | "Vacío"
    | "Teoría"
    | "Prueba"
    | "Edición";

export interface Personaje {
    id: string;
    imagen: string;
    descripcion:string;
    historia: string;

    identidad: {
        nombre: string;
        titulos: string[];
        estadoProgresion: string[];
        facciones: string[];
        piedraRegresion: "Posee" | "Usada" | "Rechazada" | "N/A";
    };
    
    estadisticas: {
        ordenAdaptacion?: string;
        etapaDespertarActual: EtapaDespertar;
        voluntad?: string;
        rangoAmenaza?: string;
    };

    habilidades: {
        habilidadesDespertar: {
            etapa: EtapaDespertar;
            nombreHabilidad: string;
            descripcion: string;
            tipo: "Pasiva" | "Activa";
        }[];

        tecnicas?: string[];

        santuario?: {
            nombre: string;
            estadoManifestacion: "Latente" | "Parcial" | "Materializado" | "Editado";
            descripcion: string;
            efectosActivos: string[];
        };

        manipulacionLeyes?: string[];
        resistencias?: string[];
    };

    equipamiento: {
        armaPrincipal?: string;
        objetosClave?: string[];
        aliados?: string[];
        rivales?: string[];
        objetivo?: string;
    };
}

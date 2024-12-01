

export type DiseaseDTO = {
    id: number;
    disease: string;
    recommended_foods: string;
    restricted_foods: string;
};

export interface MedicationDTO {
    id: number;
    name: string;
    generic_name: string;
    timing: string;
    interactions: string;
    disease_id: number;
    dosage: string;
    frequency?: string;
};
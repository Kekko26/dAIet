export interface UserParametersDTO {
    allergens: string[];
    medications: MedicationDTO[];
    diseases: string[];
    weight: number;
    height: number;
    age: number;
    goal: string;
};

export interface MedicationDTO {
    id: string;
    name: string,
    frequency; string
}





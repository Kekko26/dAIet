export interface UserParameters {
    allergens: string[];
    medications: Medication[];
    diseases: string[];
    weight: number;
    height: number;
    age: number;
    goal: string;
};

export interface Medication {
    id: string;
    name: string,
    frequency: string,
    foodInteractions?: string,
    sideEffects?: string
};

export interface DietRequest {
    configuration: UserParameters;
    furtherIndications: string;
}











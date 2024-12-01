import { DiseaseEntity } from "src/mock-database/diseases";
import { MedicationEntity } from "src/mock-database/medications";

export interface UserParameters {
    weight: number;
    height: number;
    age: number;
    goal: string;
    gender: string;
    allergens: string[];
    // TODO => Da implementare;
    diseases?: DiseaseEntity[];
    medications?: MedicationEntity[];
};

//TODO => Da rivedere;
export interface Medication {
    id: string;
    name: string,
    frequency: string,
    additionalInfo: string;
};

//TODO => Da rivedere
export interface DietRequest {
    configuration: UserParameters;
    furtherIndications: string;
}

export interface PatientProfile {
    weight: number;
    height: number;
    age: number;
    goal: string;
}

export interface NutritionalValues {
    calories: number;
    carbohydrates: number;
    proteins: number;
    fats: number;
}

export interface Meal {
    meal: string;
    hour: string;
    main: string;
    side?: string;
    vegetables?: string;
    dessert?: string;
    nutritionalValues: NutritionalValues;
}

export interface DailyMeals {
    meals: Meal[];
}

export interface MealPlan {
    mon: DailyMeals;
    tue: DailyMeals;
    wed: DailyMeals;
    thu: DailyMeals;
    fri: DailyMeals;
    sat: DailyMeals;
    sun: DailyMeals;
}

export interface DietPlan {
    patientProfile: PatientProfile;
    dailyCaloricNeeds: number;
    caloricIntakePlan: number;
    macronutrientBalance: NutritionalValues;
    mealPlan: MealPlan;
}


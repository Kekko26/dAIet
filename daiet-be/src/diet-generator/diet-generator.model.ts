import { DiseaseDTO } from "src/mock-database/diseases";
import { MedicationDTO } from "src/mock-database/medications";


export interface UserParameters {
    weight: number;
    height: number;
    age: number;
    goal: string;
    gender: string;
    allergens: string[];
    diseases?: DiseaseDTO[];
    medications?: MedicationDTO[];
};

export interface DietRequest {
    configuration: UserParameters;
    // TODO => Da implementare;
    furtherIndications?: string;
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


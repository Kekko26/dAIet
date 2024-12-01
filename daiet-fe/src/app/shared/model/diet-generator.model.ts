import { DiseaseDTO, MedicationDTO } from './typological.model';

export interface UserParameters {
  weight: number;
  height: number;
  age: number;
  goal: string;
  gender: string;
  allergens: string;
  diseases?: DiseaseDTO[];
  medications?: MedicationDTO[];
}

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
  medications: { name: string; hour: string; additionalInfo: string }[];
}

export interface DailyMeals {
  meals: Meal[];
}

export interface MealPlan {
  [k: string]: DailyMeals;
}

export interface DietPlan {
  patientProfile: PatientProfile;
  dailyCaloricNeeds: number;
  caloricIntakePlan: number;
  macronutrientBalance: NutritionalValues;
  mealPlan: MealPlan;
}

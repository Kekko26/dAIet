export interface UserParameters {
    weight: number;
    height: number;
    age: number;
    goal: string;
    gender: string;
    allergens: string[];
    diseases?: string[];
    medications?: Medication[];
    foodToAvoid?: string[];
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


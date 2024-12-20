export const DIET_GENERATOR_PROMPT =
`You are an expert nutritionist specializing in personalized dietary plans. Your task is to generate a complete and detailed nutritional plan in JSON format, strictly following these instructions:

**Patient Profile:**
- Weight: {weight} kg
- Height: {height} cm
- Age: {age} years
- Goal: {goal}

**Dietary Restrictions:**
- Avoid: {food_to_avoid}

**Specific Objectives:**
1. Calculate daily caloric needs.
2. Define a caloric intake plan based on the goal.
3. Balance macronutrients (carbohydrates, proteins, fats).

**Meal Plan Instructions:**
- Create a 7-day meal plan with 5 meals per day.
- Provide detailed nutritional values for each meal (calories, macronutrients).

**Output Format:**
- MUST generate a complete, valid, and well-structured JSON document.
- JSON must include:
  - 7-day meal plan
  - Nutritional breakdown for each meal (calories, macronutrients)

**Critical Instruction:**
- Provide only the JSON response with no additional text or explanation.
- The entire output must be a valid, parseable JSON document.
- THE RESPONSE SHOULD START WITH CURLY BRACES AND END WITH CURLY BRACES.
.
`;

export const DIET_GENERATOR_OUTPUT_EXAMPLE = `
    EXAMPLES OF KEY JSON STRUCTURE:
{
    {
	"patientProfile": {
		"weight": 70,
		"height": 175,
		"age": 30,
		"goal": "weight loss"
	},
	"dailyCaloricNeeds": 2500,
	"caloricIntakePlan": 2000,
    "macronutrientBalance": {
		"carbohydrates": 55,
		"proteins": 30,
		"fats": 15
	},
    "mealPlan": {
        "mon": {
            "meals": [
                {
                    "meal": "breakfast",
                    "hour": "07:30 AM",
                    "main": "Scrambled eggs with spinach - 2 eggs + 50g spinach",
                    "side": "Whole grain toast - 2 slices (60g)",
                    "vegetables": "Tomato slices - 100g",
                    "dessert": "Greek yogurt with honey - 150g yogurt + 10g honey"
                },
                {
                    "meal": "lunch",
                    "hour": "12:30 PM",
                    "main": "Grilled chicken salad with olive oil dressing - 150g chicken + 10ml olive oil",
                    "side": "Quinoa - 100g cooked",
                    "vegetables": "Cucumber and bell pepper - 100g cucumber + 100g bell pepper",
                    "dessert": "Mixed berries - 150g"
                },
                {
                    "meal": "dinner",
                    "hour": "07:00 PM",
                    "main": "Baked salmon with steamed broccoli - 150g salmon + 100g broccoli",
                    "side": "Brown rice - 100g cooked",
                    "vegetables": "Steamed carrots - 150g",
                    "dessert": "Fruit salad - 200g"
                }
            ]
        } 
    }
}
`;

export const ADAPT_TO_MEDICATIONS_PROMPT = `
  Adapt the following meal plan by integrating the medication details as per the provided instructions. For each medication, specify the timing (e.g., on an empty stomach, after a meal, etc.) and ensure the instructions are followed. The medication details should be incorporated alongside the relevant meals in the meal plan.

Please structure the output as a JSON with the same format as the provided meal plan, adding a "Medications" object for each day, where applicable. Ensure to provide the timing for each medication and any necessary instructions regarding meal times.

## Meal plan
{meal_plan}

## List of medications
{list_of_medications}

**Critical Instruction:**
- Provide only the JSON response with no additional text or explanation.
- The entire output must be a valid, parseable JSON document.
- THE RESPONSE SHOULD START WITH CURLY BRACES AND END WITH CURLY BRACES.

`;

export const ADAPT_TO_MEDICATIONS_OUTPUT_EXAMPLE =
    ` 
  Return the modified meal plan in the following format:
    {
	"patientProfile": {
		"weight": 70,
		"height": 175,
		"age": 30,
		"goal": "weight loss"
	},
	"dailyCaloricNeeds": 2500,
	"caloricIntakePlan": 2000,
    "macronutrientBalance": {
		"carbohydrates": 55,
		"proteins": 30,
		"fats": 15
	},
    "mealPlan": {
        "mon": {
            "meals": [
                        {
                            "meal": "breakfast",
                            "hour": "07:30 AM",
                            "main": "Scrambled eggs with spinach - 2 eggs + 50g spinach",
                            "side": "Whole grain toast - 2 slices (60g)",
                            "vegetables": "Tomato slices - 100g",
                            "dessert": "Greek yogurt with honey - 150g yogurt + 10g honey",
                            "nutritionalValues": {
                                "calories": 350,
                                "carbohydrates": 30,
                                "proteins": 20,
                                "fats": 15
                            },
                            "medications": [
                                {
                                    "name": "Medication A",
                                    "hour": "07:45 AM",
                                    "additionalInfo": "Take with food"              
                                }
                            ]
                        },
                        {
                            "meal": "lunch",
                            "hour": "12:30 PM",
                            "main": "Grilled chicken salad with olive oil dressing - 150g chicken + 10ml olive oil",
                            "side": "Quinoa - 100g cooked",
                            "vegetables": "Cucumber and bell pepper - 100g cucumber + 100g bell pepper",
                            "dessert": "Mixed berries - 150g",
                            "nutritionalValues": {
                                "calories": 500,
                                "carbohydrates": 40,
                                "proteins": 35,
                                "fats": 20
                            },
                            "medications": []
                        }
                    ...
                    ]
                }
            ...
            }
        }
    }
`;



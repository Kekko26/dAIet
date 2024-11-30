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
`;



export const DIET_GENERATOR_OUTPUT_EXAMPLE = `
    EXAMPLES OF KEY JSON STRUCTURE:
{
  "mon": {
    "meals": [
      {
        "meal": "breakfast",
        "hour": "07:30 AM",
        "main": "Scrambled eggs with spinach",
        "side": "Whole grain toast",
        "vegetables": "Tomato slices",
        "dessert": "Greek yogurt with honey"
      },
      {
        "meal": "lunch",
        "hour": "12:30 PM",
        "main": "Grilled chicken salad with olive oil dressing",
        "side": "Quinoa",
        "vegetables": "Cucumber and bell pepper",
        "dessert": "Mixed berries"
      },
      {
        "meal": "dinner",
        "hour": "07:00 PM",
        "main": "Baked salmon with steamed broccoli",
        "side": "Brown rice",
        "vegetables": "Steamed carrots",
        "dessert": "Fruit salad"
      }
    ]
  }
}
`;




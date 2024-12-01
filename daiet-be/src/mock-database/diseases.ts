
interface DiseaseEntity {
    id: number;
    disease: string;
    recommended_foods: string;
    restricted_foods: string;
};

export type DiseaseDTO = DiseaseEntity;

export const DISEASES_DATA =
    [
        {
            "id": 64,
            "disease": "Angina pectoris",
            "recommended_foods": "Whole grains, Lean proteins (chicken, turkey), Oats, Leafy greens",
            "restricted_foods": ""
        },
        {
            "id": 65,
            "disease": "Anxiety",
            "recommended_foods": "Leafy greens, Salmon, Oats, Bananas, Walnuts",
            "restricted_foods": ""
        },
        {
            "id": 66,
            "disease": "Bipolar disorder",
            "recommended_foods": "Whole grains, Leafy greens, Fatty fish (salmon), Walnuts",
            "restricted_foods": ""
        },
        {
            "id": 67,
            "disease": "Chronic obstructive pulmonary disease",
            "recommended_foods": "Apples, Carrots, Broccoli, Berries, Spinach, Kale",
            "restricted_foods": ""
        },
        {
            "id": 68,
            "disease": "Congestive heart failure",
            "recommended_foods": "Oats, Fatty Fish (salmon, sardines), Leafy Greens, Berries",
            "restricted_foods": ""
        },
        {
            "id": 69,
            "disease": "Crohn's disease",
            "recommended_foods": "",
            "restricted_foods": ""
        },
        {
            "id": 70,
            "disease": "Fever reduction",
            "recommended_foods": "Fruits (oranges, berries), Vegetables (spinach, kale), Soups, Chicken, Rice",
            "restricted_foods": ""
        },
        {
            "id": 71,
            "disease": "Hypertension",
            "recommended_foods": "Low-sodium foods, Leafy greens, Bananas, Oats, Avocados",
            "restricted_foods": ""
        },
        {
            "id": 72,
            "disease": "Non-Hodgkin's lymphoma",
            "recommended_foods": "",
            "restricted_foods": ""
        },
        {
            "id": 73,
            "disease": "Panic disorder",
            "recommended_foods": "Oats, Salmon, Bananas, Green Tea, Walnuts",
            "restricted_foods": ""
        },
        {
            "id": 74,
            "disease": "Peptic ulcer disease",
            "recommended_foods": "Rice, Bananas, Chicken, Potatoes, Oatmeal, Apples",
            "restricted_foods": ""
        },
        {
            "id": 75,
            "disease": "Pneumonia",
            "recommended_foods": "Protein-rich foods (chicken, beans), Vegetables (carrots, spinach), Berries",
            "restricted_foods": ""
        },
        {
            "id": 76,
            "disease": "Psoriasis",
            "recommended_foods": "",
            "restricted_foods": ""
        },
        {
            "id": 77,
            "disease": "Restless legs syndrome",
            "recommended_foods": "Bananas, Legumes, Green tea",
            "restricted_foods": ""
        },
        {
            "id": 78,
            "disease": "Seizure disorder",
            "recommended_foods": "Spinach, Almonds, Walnuts, Salmon, Seeds (sunflower, chia)",
            "restricted_foods": ""
        },
        {
            "id": 79,
            "disease": "Vomiting",
            "recommended_foods": "Ginger, Bananas, Oatmeal, Rice, Crackers",
            "restricted_foods": ""
        },
        {
            "id": 80,
            "disease": "Anticoagulant",
            "recommended_foods": "Leafy greens (spinach, kale), Avocados, Grapefruit (with caution), Blueberries",
            "restricted_foods": ""
        },
        {
            "id": 81,
            "disease": "Asthma",
            "recommended_foods": "Apples, Carrots, Broccoli, Berries, Spinach, Kale",
            "restricted_foods": "Latte, uova, frutti di mare, frutta secca, alimenti ricchi di solfiti, cibi fritti"
        },
        {
            "id": 82,
            "disease": "Atrial fibrillation",
            "recommended_foods": "Oats, Fatty Fish (salmon, sardines), Leafy Greens, Berries",
            "restricted_foods": ""
        },
        {
            "id": 83,
            "disease": "Atypical hemolytic uremic syndrome",
            "recommended_foods": "Leafy greens, Cranberries, Low-sodium options",
            "restricted_foods": ""
        },
        {
            "id": 84,
            "disease": "Depression",
            "recommended_foods": "Leafy greens, Salmon, Oats, Bananas, Walnuts",
            "restricted_foods": "Grassi trans, cibi fritti, zuccheri raffinati, alcol, caffeina e cibi ad alto contenuto di grassi"
        },
        {
            "id": 85,
            "disease": "Edema",
            "recommended_foods": "Low-sodium foods, Leafy greens, Bananas, Oats, Avocados",
            "restricted_foods": ""
        },
        {
            "id": 86,
            "disease": "Erectile dysfunction",
            "recommended_foods": "Oily fish (salmon, sardines), Walnuts, Almonds, Berries, Pomegranate",
            "restricted_foods": ""
        },
        {
            "id": 87,
            "disease": "Familial hypercholesterolemia",
            "recommended_foods": "Oats, Nuts, Avocados, Olive oil",
            "restricted_foods": ""
        },
        {
            "id": 88,
            "disease": "GERD",
            "recommended_foods": "Rice, Bananas, Chicken, Potatoes, Oatmeal, Apples",
            "restricted_foods": "Cibi piccanti, agrumi, pomodori, cibi fritti, cioccolato, caffeina"
        },
        {
            "id": 89,
            "disease": "Hypercholesterolemia",
            "recommended_foods": "Oats, Fatty Fish (salmon, mackerel), Olive Oil, Avocados",
            "restricted_foods": ""
        },
        {
            "id": 90,
            "disease": "Nausea",
            "recommended_foods": "Ginger, Bananas, Oatmeal, Rice, Crackers",
            "restricted_foods": ""
        },
        {
            "id": 91,
            "disease": "Pain relief",
            "recommended_foods": "Fruits (oranges, berries), Vegetables (spinach, kale), Soups, Chicken, Rice",
            "restricted_foods": ""
        },
        {
            "id": 92,
            "disease": "Parkinson's disease",
            "recommended_foods": "Leafy greens (spinach, kale), Berries, Walnuts, Avocados",
            "restricted_foods": "Alimenti ad alto contenuto di grassi saturi, alimenti ad alto indice glicemico"
        },
        {
            "id": 93,
            "disease": "Paroxysmal nocturnal hemoglobinuria",
            "recommended_foods": "Iron-rich foods, Vitamin C sources",
            "restricted_foods": ""
        },
        {
            "id": 94,
            "disease": "Pulmonary arterial hypertension",
            "recommended_foods": "Beets, Garlic, Leafy greens, Low-sodium foods",
            "restricted_foods": ""
        },
        {
            "id": 95,
            "disease": "Rheumatoid arthritis",
            "recommended_foods": "Fatty fish, Berries, Broccoli, Walnuts",
            "restricted_foods": ""
        },
        {
            "id": 96,
            "disease": "Schizophrenia",
            "recommended_foods": "Whole grains, Leafy greens, Fatty fish (salmon), Walnuts",
            "restricted_foods": "Cibi ricchi di grassi saturi, alcol, cibi ad alto indice glicemico"
        },
        {
            "id": 97,
            "disease": "Skin infections",
            "recommended_foods": "Protein-rich foods (chicken, beans), Vegetables (carrots, spinach), Berries",
            "restricted_foods": ""
        },
        {
            "id": 98,
            "disease": "Tuberculosis",
            "recommended_foods": "High-protein foods, Fruits, Vegetables (spinach, kale), Whole grains",
            "restricted_foods": ""
        },
        {
            "id": 99,
            "disease": "Type 2 diabetes mellitus",
            "recommended_foods": "Whole grains, Leafy greens, Beans, Berries, Lean Proteins (chicken, turkey)",
            "restricted_foods": ""
        }
    ]      

export interface MedicationEntity{
    id: number;
    name: string;
    generic_name: string;
    dosage: string;
    timing: string;
    interactions: string;
    disease_id: number;
}

// TODO => Rimuovere il dosaggio, momentaneamente sovrascritto a FE;
export const MEDICATIONS_DATA = [
    {
      "id": 1,
      "name": "Bisoprolol",
      "generic_name": "Bisoprolol",
      "dosage": "Once a day",
      "timing": "At the same time each day",
      "interactions": "Interact with high-sodium diet, decrease effect of antacids",
      "disease_id": 64
    },
    {
      "id": 2,
      "name": "Metoprolol",
      "generic_name": "Metoprolol",
      "dosage": "2-3 times a day",
      "timing": "Take with the meal",
      "interactions": "Interact with high-sodium diet, decrease effect of antacids",
      "disease_id": 64
    },
    {
      "id": 3,
      "name": "Paroxetine",
      "generic_name": "Paroxetine",
      "dosage": "Once a day in the morning",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 65
    },
    {
      "id": 4,
      "name": "Escitalopram",
      "generic_name": "Escitalopram",
      "dosage": "Once a day in the morning",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 65
    },
    {
      "id": 5,
      "name": "Duloxetine",
      "generic_name": "Duloxetine",
      "dosage": "Once a day in the morning",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 65
    },
    {
      "id": 6,
      "name": "Sertraline",
      "generic_name": "Sertraline",
      "dosage": "Once a day in the morning",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 65
    },
    {
      "id": 7,
      "name": "Amitriptyline",
      "generic_name": "Amitriptyline",
      "dosage": "Once a day at night",
      "timing": "Take with the evening meal",
      "interactions": "",
      "disease_id": 65
    },
    {
      "id": 8,
      "name": "Citalopram",
      "generic_name": "Citalopram",
      "dosage": "Once a day in the morning",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 65
    },
    {
      "id": 9,
      "name": "Fluoxetine",
      "generic_name": "Fluoxetine",
      "dosage": "Once a day in the morning",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 65
    },
    {
      "id": 10,
      "name": "Quetiapine",
      "generic_name": "Quetiapine",
      "dosage": "1-2 times a day",
      "timing": "Take with the meal",
      "interactions": "Interact with grapefruit juice, enhance effect of fatty meals",
      "disease_id": 66
    },
    {
      "id": 11,
      "name": "Lurasidone",
      "generic_name": "Lurasidone",
      "dosage": "Once a day in the morning",
      "timing": "Take with the breakfast",
      "interactions": "Interact with grapefruit juice, enhance effect of fatty meals",
      "disease_id": 66
    },
    {
      "id": 12,
      "name": "Asenapine",
      "generic_name": "Asenapine",
      "dosage": "Once a day in the morning",
      "timing": "Take with the breakfast",
      "interactions": "Interact with grapefruit juice, enhance effect of fatty meals",
      "disease_id": 66
    },
    {
      "id": 13,
      "name": "Risperidone",
      "generic_name": "Risperidone",
      "dosage": "1-2 times a day",
      "timing": "Take with the meal",
      "interactions": "Interact with grapefruit juice, enhance effect of fatty meals",
      "disease_id": 66
    },
    {
      "id": 14,
      "name": "Ipratropium",
      "generic_name": "Ipratropium",
      "dosage": "As needed",
      "timing": "Take with the food",
      "interactions": "",
      "disease_id": 67
    },
    {
      "id": 15,
      "name": "Salbutamol",
      "generic_name": "Salbutamol",
      "dosage": "As needed",
      "timing": "Take with the food",
      "interactions": "",
      "disease_id": 67
    },
    {
      "id": 16,
      "name": "Albuterol",
      "generic_name": "Albuterol",
      "dosage": "As needed",
      "timing": "Take with the food",
      "interactions": "",
      "disease_id": 67
    },
    {
      "id": 17,
      "name": "Levalbuterol",
      "generic_name": "Levalbuterol",
      "dosage": "As needed",
      "timing": "Take with the food",
      "interactions": "",
      "disease_id": 67
    },
    {
      "id": 18,
      "name": "Carvedilol",
      "generic_name": "Carvedilol",
      "dosage": "2 times a day",
      "timing": "Take with the meal",
      "interactions": "Interact with high-sodium diet, decrease effect of antacids",
      "disease_id": 68
    },
    {
      "id": 19,
      "name": "Lisinopril",
      "generic_name": "Lisinopril",
      "dosage": "1-2 times a day",
      "timing": "Take with the meal",
      "interactions": "Interact with high-sodium diet, decrease effect of antacids",
      "disease_id": 68
    },
    {
      "id": 20,
      "name": "Ramipril",
      "generic_name": "Ramipril",
      "dosage": "1-2 times a day",
      "timing": "Take with the meal",
      "interactions": "Interact with high-sodium diet, decrease effect of antacids",
      "disease_id": 68
    },
    {
      "id": 21,
      "name": "Digoxin",
      "generic_name": "Digoxin",
      "dosage": "Once a day",
      "timing": "At the same time each day",
      "interactions": "Interact with high-fiber diet, decrease effect of antacids",
      "disease_id": 68
    },
    {
      "id": 22,
      "name": "Enalapril",
      "generic_name": "Enalapril",
      "dosage": "1-2 times a day",
      "timing": "Take with the meal",
      "interactions": "Interact with high-sodium diet, decrease effect of antacids",
      "disease_id": 68
    },
    {
      "id": 23,
      "name": "Certolizumab",
      "generic_name": "Certolizumab",
      "dosage": "Once a month",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 69
    },
    {
      "id": 24,
      "name": "Acetaminophen",
      "generic_name": "Acetaminophen",
      "dosage": "3-4 times a day",
      "timing": "4-6 hours",
      "interactions": "",
      "disease_id": 70
    },
    {
      "id": 25,
      "name": "Ibuprofen",
      "generic_name": "Ibuprofen",
      "dosage": "3 times a day",
      "timing": "8 hours",
      "interactions": "Stomach upset, interact with blood thinners",
      "disease_id": 70
    },
    {
      "id": 26,
      "name": "Aspirin",
      "generic_name": "Acetylsalicylic acid",
      "dosage": "2-3 times a day",
      "timing": "4-6 hours",
      "interactions": "Stomach upset",
      "disease_id": 70
    },
    {
      "id": 27,
      "name": "Furosemide",
      "generic_name": "Furosemide",
      "dosage": "1-2 times a day",
      "timing": "Take with the meal",
      "interactions": "Interact with high-sodium diet, decrease effect of antacids",
      "disease_id": 71
    },
    {
      "id": 28,
      "name": "Hydrochlorothia",
      "generic_name": "Hydrochlorothiazide",
      "dosage": "1-2 times a day",
      "timing": "Take with the meal",
      "interactions": "Interact with high-sodium diet, decrease effect of antacids",
      "disease_id": 71
    },
    {
      "id": 29,
      "name": "Spirolonactone",
      "generic_name": "Spirolonactone",
      "dosage": "Once a day",
      "timing": "At the same time each day",
      "interactions": "Interact with high-sodium diet, decrease effect of antacids",
      "disease_id": 71
    },
    {
      "id": 30,
      "name": "Bendroflumethia",
      "generic_name": "Bendroflumethiazide",
      "dosage": "1-2 times a day",
      "timing": "Take with the meal",
      "interactions": "Interact with high-sodium diet, decrease effect of antacids",
      "disease_id": 71
    },
    {
      "id": 31,
      "name": "Rituximab",
      "generic_name": "Rituximab",
      "dosage": "Infusion once a week",
      "timing": "Infusion as needed",
      "interactions": "",
      "disease_id": 72
    },
    {
      "id": 32,
      "name": "Alprazolam",
      "generic_name": "Alprazolam",
      "dosage": "2-3 times a day",
      "timing": "8-12 hours",
      "interactions": "Enhance effect of grapefruit juice, interact with caffeine",
      "disease_id": 73
    },
    {
      "id": 33,
      "name": "Omeprazole",
      "generic_name": "Omeprazole",
      "dosage": "Once a day in the morning",
      "timing": "Take 1 hour before breakfast",
      "interactions": "Interact with citrus juice, interact with apple juice",
      "disease_id": 74
    },
    {
      "id": 34,
      "name": "Cefotaxime",
      "generic_name": "Cefotaxime",
      "dosage": "Once a day",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 75
    },
    {
      "id": 35,
      "name": "Ceftriaxone",
      "generic_name": "Ceftriaxone",
      "dosage": "Once a day",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 75
    },
    {
      "id": 36,
      "name": "Minocycline",
      "generic_name": "Minocycline",
      "dosage": "Once a day",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 75
    },
    {
      "id": 37,
      "name": "Tetracycline",
      "generic_name": "Tetracycline",
      "dosage": "Once a day",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 75
    },
    {
      "id": 38,
      "name": "Doxycycline",
      "generic_name": "Doxycycline",
      "dosage": "Once a day",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 75
    },
    {
      "id": 39,
      "name": "Azithromycin",
      "generic_name": "Azithromycin",
      "dosage": "Once a day",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 75
    },
    {
      "id": 40,
      "name": "Erythromycin",
      "generic_name": "Erythromycin",
      "dosage": "Once a day",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 75
    },
    {
      "id": 41,
      "name": "Tigecycline",
      "generic_name": "Tigecycline",
      "dosage": "Once a day",
      "timing": "Take with the breakfast",
      "interactions": "Decrease effect of high-fiber diet, interact with antacids",
      "disease_id": 75
    },
    {
      "id": 42,
      "name": "Daptomycin",
      "generic_name": "Daptomycin",
      "dosage": "Once a day",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 75
    },
    {
      "id": 43,
      "name": "Telithromycin",
      "generic_name": "Telithromycin",
      "dosage": "Once a day",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 75
    },
    {
      "id": 44,
      "name": "Clarithromycin",
      "generic_name": "Clarithromycin",
      "dosage": "Once a day",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 75
    },
    {
      "id": 45,
      "name": "Chloramphenicol",
      "generic_name": "Chloramphenicol",
      "dosage": "Once a day",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 75
    },
    {
      "id": 46,
      "name": "Linezolid",
      "generic_name": "Linezolid",
      "dosage": "Once a day",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 75
    },
    {
      "id": 47,
      "name": "Adalimumab",
      "generic_name": "Adalimumab",
      "dosage": "Once a day",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 76
    },
    {
      "id": 48,
      "name": "Etanercept",
      "generic_name": "Etanercept",
      "dosage": "Once a week",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 76
    },
    {
      "id": 49,
      "name": "Infliximab",
      "generic_name": "Infliximab",
      "dosage": "Infusion once every 4-8 week",
      "timing": "Infusion as needed",
      "interactions": "",
      "disease_id": 76
    },
    {
      "id": 50,
      "name": "Golimumab",
      "generic_name": "Golimumab",
      "dosage": "Once a month",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 76
    },
    {
      "id": 51,
      "name": "Ropinirole",
      "generic_name": "Ropinirole",
      "dosage": "Once a day in the morning",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 77
    },
    {
      "id": 52,
      "name": "Pramipexole",
      "generic_name": "Pramipexole",
      "dosage": "Once a day in the morning",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 77
    },
    {
      "id": 53,
      "name": "Diazepam",
      "generic_name": "Diazepam",
      "dosage": "2-3 times a day",
      "timing": "6-12 hours",
      "interactions": "Enhance effect of grapefruit juice, interact with caffeine",
      "disease_id": 78
    },
    {
      "id": 54,
      "name": "Ondansetron",
      "generic_name": "Ondansetron",
      "dosage": "1-2 times a day",
      "timing": "Take with the meal",
      "interactions": "",
      "disease_id": 79
    },
    {
      "id": 55,
      "name": "Metoclopramide",
      "generic_name": "Metoclopramide",
      "dosage": "1-2 times a day",
      "timing": "Take with the meal",
      "interactions": "Decrease effect of high-fiber diet, interact with antacids",
      "disease_id": 79
    },
    {
      "id": 56,
      "name": "Warfarin",
      "generic_name": "Warfarin",
      "dosage": "Once a day",
      "timing": "At the same time each day",
      "interactions": "Interact with vitamin K, interact with grapefruit juice",
      "disease_id": 80
    },
    {
      "id": 57,
      "name": "Omalizumab",
      "generic_name": "Omalizumab",
      "dosage": "Once every 2-4 weeks",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 81
    },
    {
      "id": 58,
      "name": "Eculizumab",
      "generic_name": "Eculizumab",
      "dosage": "Once a day",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 83
    },
    {
      "id": 59,
      "name": "Vardenafil",
      "generic_name": "Vardenafil",
      "dosage": "As needed",
      "timing": "30-60 minutes before sexual ac",
      "interactions": "Interact with grapefruit juice, enhance effect of fatty meals",
      "disease_id": 86
    },
    {
      "id": 60,
      "name": "Tadalafil",
      "generic_name": "Tadalafil",
      "dosage": "As needed",
      "timing": "30-60 minutes before sexual ac",
      "interactions": "Interact with grapefruit juice, enhance effect of fatty meals",
      "disease_id": 86
    },
    {
      "id": 61,
      "name": "Sildenafil",
      "generic_name": "Sildenafil",
      "dosage": "As needed",
      "timing": "30-60 minutes before sexual ac",
      "interactions": "Interact with grapefruit juice, enhance effect of fatty meals",
      "disease_id": 86
    },
    {
      "id": 62,
      "name": "Lomitapide",
      "generic_name": "Lomitapide",
      "dosage": "Once a day",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 87
    },
    {
      "id": 63,
      "name": "Mipomersen",
      "generic_name": "Mipomersen",
      "dosage": "Once a week",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 87
    },
    {
      "id": 64,
      "name": "Atorvastatin",
      "generic_name": "Atorvastatin",
      "dosage": "Once a day",
      "timing": "At the same time each day",
      "interactions": "Interact with grapefruit juice, interact with antacids",
      "disease_id": 89
    },
    {
      "id": 65,
      "name": "Simvastatin",
      "generic_name": "Simvastatin",
      "dosage": "Once a day at night",
      "timing": "Take with the evening meal",
      "interactions": "Interact with grapefruit juice, interact with antacids",
      "disease_id": 89
    },
    {
      "id": 66,
      "name": "Amlodipine",
      "generic_name": "Amlodipine",
      "dosage": "Once a day",
      "timing": "At the same time each day",
      "interactions": "Interact with grapefruit juice",
      "disease_id": 71
    },
    {
      "id": 67,
      "name": "Losartan",
      "generic_name": "Losartan",
      "dosage": "Once a day",
      "timing": "At the same time each day",
      "interactions": "Interact with high-sodium diet, decrease effect of antacids",
      "disease_id": 71
    },
    {
      "id": 68,
      "name": "Valsartan",
      "generic_name": "Valsartan",
      "dosage": "Once a day",
      "timing": "At the same time each day",
      "interactions": "Interact with high-sodium diet, decrease effect of antacids",
      "disease_id": 71
    },
    {
      "id": 69,
      "name": "Olmesartan",
      "generic_name": "Olmesartan",
      "dosage": "Once a day",
      "timing": "At the same time each day",
      "interactions": "Interact with high-sodium diet, decrease effect of antacids",
      "disease_id": 71
    },
    {
      "id": 70,
      "name": "Apomorphine",
      "generic_name": "Apomorphine",
      "dosage": "As needed",
      "timing": "Take as needed",
      "interactions": "",
      "disease_id": 92
    },
    {
      "id": 71,
      "name": "Rotigotine",
      "generic_name": "Rotigotine",
      "dosage": "Once a day in the morning",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 92
    },
    {
      "id": 72,
      "name": "Bromocriptine",
      "generic_name": "Bromocriptine",
      "dosage": "Once a day in the morning",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 92
    },
    {
      "id": 73,
      "name": "Levodopa",
      "generic_name": "Levodopa",
      "dosage": "2-4 times a day",
      "timing": "6-8 hours",
      "interactions": "Decrease effect of high-protein diet, interact with antacids",
      "disease_id": 92
    },
    {
      "id": 74,
      "name": "Celilizumab",
      "generic_name": "Celilizumab",
      "dosage": "Once a day",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 93
    },
    {
      "id": 75,
      "name": "Ustekinumab",
      "generic_name": "Ustekinumab",
      "dosage": "Once every 12 weeks",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 76
    },
    {
      "id": 76,
      "name": "Treprostinil",
      "generic_name": "Treprostinil",
      "dosage": "Continuous infusion",
      "timing": "Continuous infusion",
      "interactions": "",
      "disease_id": 94
    },
    {
      "id": 77,
      "name": "Iloprost",
      "generic_name": "Iloprost",
      "dosage": "Inhaled once a day",
      "timing": "Inhaled as needed",
      "interactions": "",
      "disease_id": 94
    },
    {
      "id": 78,
      "name": "Epoprostenol",
      "generic_name": "Epoprostenol",
      "dosage": "Continuous infusion",
      "timing": "Continuous infusion",
      "interactions": "",
      "disease_id": 94
    },
    {
      "id": 79,
      "name": "Ambrisentan",
      "generic_name": "Ambrisentan",
      "dosage": "Once a day",
      "timing": "Take with the breakfast",
      "interactions": "Interact with grapefruit juice, enhance effect of fatty meals",
      "disease_id": 94
    },
    {
      "id": 80,
      "name": "Sitaxentan",
      "generic_name": "Sitaxentan",
      "dosage": "Once a day",
      "timing": "Take with the breakfast",
      "interactions": "Interact with grapefruit juice, enhance effect of fatty meals",
      "disease_id": 94
    },
    {
      "id": 81,
      "name": "Bosentan",
      "generic_name": "Bosentan",
      "dosage": "Once a day",
      "timing": "Take with the breakfast",
      "interactions": "Interact with grapefruit juice, enhance effect of fatty meals",
      "disease_id": 94
    },
    {
      "id": 82,
      "name": "Abatacept",
      "generic_name": "Abatacept",
      "dosage": "Infusion once a month",
      "timing": "Infusion as needed",
      "interactions": "",
      "disease_id": 95
    },
    {
      "id": 83,
      "name": "Iloperidone",
      "generic_name": "Iloperidone",
      "dosage": "Once a day in the morning",
      "timing": "Take with the breakfast",
      "interactions": "Interact with grapefruit juice, enhance effect of fatty meals",
      "disease_id": 96
    },
    {
      "id": 84,
      "name": "Paliperidone",
      "generic_name": "Paliperidone",
      "dosage": "Once a day in the morning",
      "timing": "Take with the breakfast",
      "interactions": "Interact with grapefruit juice, enhance effect of fatty meals",
      "disease_id": 96
    },
    {
      "id": 85,
      "name": "Clozapine",
      "generic_name": "Clozapine",
      "dosage": "Once a day at night",
      "timing": "Take with the evening meal",
      "interactions": "Interact with grapefruit juice, enhance effect of fatty meals",
      "disease_id": 96
    },
    {
      "id": 86,
      "name": "Phenytoin",
      "generic_name": "Phenytoin",
      "dosage": "2-3 times a day",
      "timing": "2-4 hours",
      "interactions": "Interact with grapefruit juice, interact with enteral nutrition",
      "disease_id": 78
    },
    {
      "id": 87,
      "name": "Delamanid",
      "generic_name": "Delamanid",
      "dosage": "Once a day",
      "timing": "Take with the breakfast",
      "interactions": "Decrease effect of high-fat diet, interact with warfarin",
      "disease_id": 98
    },
    {
      "id": 88,
      "name": "Bedaquiline",
      "generic_name": "Bedaquiline",
      "dosage": "Once a day",
      "timing": "Take with the breakfast",
      "interactions": "Decrease effect of high-fat diet, interact with warfarin",
      "disease_id": 98
    },
    {
      "id": 89,
      "name": "Streptomycin",
      "generic_name": "Streptomycin",
      "dosage": "Once a day",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 98
    },
    {
      "id": 90,
      "name": "Pyrazinamide",
      "generic_name": "Pyrazinamide",
      "dosage": "Once a day",
      "timing": "Take with the breakfast",
      "interactions": "Decrease effect of high-fat diet, interact with warfarin",
      "disease_id": 98
    },
    {
      "id": 91,
      "name": "Ethambutol",
      "generic_name": "Ethambutol",
      "dosage": "Once a day",
      "timing": "Take with the breakfast",
      "interactions": "",
      "disease_id": 98
    },
    {
      "id": 92,
      "name": "Rifampicin",
      "generic_name": "Rifampicin",
      "dosage": "Once a day",
      "timing": "Take with the breakfast",
      "interactions": "Decrease effect of high-fat diet, interact with warfarin",
      "disease_id": 98
    },
    {
      "id": 93,
      "name": "Isoniazid",
      "generic_name": "Isoniazid",
      "dosage": "Once a day",
      "timing": "Take with the breakfast",
      "interactions": "Decrease effect of high-fat diet, interact with pyridoxine",
      "disease_id": 98
    },
    {
      "id": 94,
      "name": "Glipizide",
      "generic_name": "Glipizide",
      "dosage": "1-2 times a day with meals",
      "timing": "Take with the meal",
      "interactions": "Decrease effect of high-fiber diet, interact with antacids",
      "disease_id": 99
    },
    {
      "id": 95,
      "name": "Metformin",
      "generic_name": "Metformin",
      "dosage": "2-3 times a day with meals",
      "timing": "Take with the meal",
      "interactions": "Decrease effect of high-fiber diet, interact with antacids",
      "disease_id": 99
    },
    {
      "id": 96,
      "name": "Gliclazide",
      "generic_name": "Gliclazide",
      "dosage": "1-2 times a day with meals",
      "timing": "Take with the meal",
      "interactions": "Decrease effect of high-fiber diet, interact with antacids",
      "disease_id": 99
    }
  ]
  

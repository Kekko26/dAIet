# Daiet Project

# dAIet

## Your personal nutritionist

Currently, chronic conditions are widespread, affecting around 40-45% of individuals under 65, with common issues such as hypertension, diabetes, and cardiovascular diseases. Additionally, about 45% of children and adolescents have been prescribed at least one medication. These statistics underscore the growing need for personalized healthcare, especially in managing the complex interactions between medications and nutrition.
Our solution is a personalized diet planning system that tailors meal schedules and content to individual needs, based on demographic and clinical factors—such as age, sex, weight, medical conditions, and medication regimens. The system integrates meal timing with treatment schedules to optimize health outcomes and minimize potential side effects.
Target Audience:
Our system is designed for a diverse audience, including young adults managing their health proactively, adults with chronic conditions and individuals taking medications for various reasons. This includes people who wish to optimize their nutrition in conjunction with medical treatments, caregivers, and healthcare professionals. Additionally, the system is suitable for individuals without chronic conditions who want to ensure that their diet supports a balanced and healthy lifestyle. 
Features:
- Personalized: Custom meal plans considering caloric intake and macronutrient needs.
- Healthy: Adjusts meals based on medications, medical conditions, and allergies, avoiding harmful interactions.
- Fast: Easily adapts to changes in lifestyle, ensuring the meal plan fits your routine.
- Own: Offers a unique, tailored experience, providing relevant health and nutrition suggestions.
It's build on the LLama 3.1 powerful model running on Groq's own LPUs, leveraging the power of custom built database.
By addressing individual needs, dAIet empowers users to maintain a balanced, healthy lifestyle, even while managing complex medical conditions.




###
# Installation
## Prerequisites
- Node.js
- npm (Node Package Manager)

## Project Structure
- **`daiet-fe`**: Angular frontend code
- **`daiet-be`**: NestJS backend code

## Setup Instructions

## 1. Clone the Repository
git clone https://github.com/Kekko26/dAIet.git

cd daiet

## Install frontend packages in daiet/daiet-fe
npm i
## Run frontend
npm run start

## Install backend packages in daiet/daiet-be
npm i
## Add .env file with GROQ_API_KEY
create a .env file under daiet/daiet-be/ containing GROQ_API_KEY variable
## Run backend
npm run start

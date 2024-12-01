import { DietPlan } from "src/diet-generator/diet-generator.model";

export type Conversation = {
    'question': string;
    'qnswer': string;
}[]

export type QuestionDTO = {
    question: string;
    history: Conversation;
    dietPlan: DietPlan;
}
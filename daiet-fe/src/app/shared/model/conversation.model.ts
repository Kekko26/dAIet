import { DietPlan } from "./diet-generator.model";

export type Conversation = {
    'question': string;
    'answer': string;
}[]

export type QuestionDTO = {
    question: string;
    history: Conversation;
    dietPlan: DietPlan;
}


export interface Message {

    content: string,
    isUser: boolean,
    timestamp: Date

}
import { ChatGroq } from '@langchain/groq';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LlmService {

    constructor(
        private readonly config: ConfigService
    ) { }

    
    private readonly _llm = new ChatGroq({
        apiKey: this.config.get('GROQ_API_KEY'),
        temperature: 0,
        model: "llama-3.1-70b-versatile",
        streaming: false,
    })

    get llm() {
        return this._llm;
    }





}
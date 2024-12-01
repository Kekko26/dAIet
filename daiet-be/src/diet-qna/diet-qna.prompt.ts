export const DIET_QNA_PROMPT = `
You are a bot that helps answer questions about this diet plan.
Based on the previous conversation and the diet provided as context, answer the question appropriately.

## Diet Plan
{diet_plan}

## Previous Conversation
{history}

## Question
{question}

Answer:
`
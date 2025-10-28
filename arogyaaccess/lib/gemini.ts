import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

export const geminiModel = genAI.getGenerativeModel({
  model: 'gemini-pro', // Free model - stable version
  generationConfig: {
    temperature: 0.7,
    topK: 40,
    topP: 0.95,
    maxOutputTokens: 2048,
  },
});

export async function chatWithGemini(message: string, history: any[] = []) {
  try {
    // Filter history to ensure it starts with a user message
    // Remove any leading model messages
    let filteredHistory = [...history];
    while (filteredHistory.length > 0 && filteredHistory[0].role === 'model') {
      filteredHistory.shift();
    }

    const chat = geminiModel.startChat({
      history: filteredHistory,
      generationConfig: {
        maxOutputTokens: 2048,
      },
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error chatting with Gemini:', error);
    throw error;
  }
}

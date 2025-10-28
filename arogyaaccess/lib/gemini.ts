import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

export const geminiModel = genAI.getGenerativeModel({
  model: 'gemini-pro',
  generationConfig: {
    temperature: 0.7,
    topK: 40,
    topP: 0.95,
    maxOutputTokens: 1024,
  },
});

export async function chatWithGemini(message: string, history: any[] = []) {
  try {
    const chat = geminiModel.startChat({
      history: history,
      generationConfig: {
        maxOutputTokens: 1024,
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

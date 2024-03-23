const { GoogleGenerativeAI } = require("@google/generative-ai");
const API_KEY = "AIzaSyCUKC-C9LeHEwNXmu23fs7J0nTqFmMDsqA";
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);
let now = run();
let call ="";
let help = "I am down with fever. What should I do?";
// console.log(call);
async function run() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
    const prompt = help;
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    call = response.text();
    // console.log(text);
    // console.log(call);
    // return call;
  }
  
// let no = run();
// console.log(no);
// run();
console.log(now);




// const messageInput = document.getElementById('message-input');
// const sendButton = document.getElementById('send-button');
// const chatHistory = document.querySelector('.chat-history');

// let gemini = '';
// sendButton.addEventListener('click', () => {
//     const messageText = messageInput.value;
//     // Send the message to the chat bot
//     addMessageToChat(messageText, 'user');
//     messageInput.value = '';
//     runChat();
//     addMessageToChat(gemini, 'gemini');
// });

// function addMessageToChat(text, sender) {
//     const messageElement = document.createElement('div');
//     messageElement.classList.add('message');
//     if (sender === 'user') {
//         messageElement.innerHTML = `
//             <p class="bot-name">You</p>
//             <p class="message-text">${text}</p>
//         `;
//     } 
//     else if (sender === 'gemini') {
//         messageElement.innerHTML = `
//             <p class="bot-name">Doctor Name</p>
//             <p class="message-text">${gemini}</p>
//         `;
//     }
//     else {}
//        // else {
//      //   messageElement.innerHTML = `
//       //      <p class="bot-name">Doctor Name</p>
//       //      <p class="message-text">${gemini}</p>
//       //  `;
//   //  }
//     chatHistory.appendChild(messageElement);
//     chatHistory.scrollTop = chatHistory.scrollHeight;
// }

// const {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold
//   } = require("@google/generative-ai");
  
//   const MODEL_NAME = "gemini-1.0-pro";
//     API_KEY = "AIzaSyCUKC-C9LeHEwNXmu23fs7J0nTqFmMDsqA";
  
//   async function runChat() {
//     const genAI = new GoogleGenerativeAI(API_KEY);
//     const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  
//     const generationConfig = {
//       temperature: 0.9,
//       topK: 1,
//       topP: 1,
//       maxOutputTokens: 2048,
//     };
  
//     const safetySettings = [
//       {
//         category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//         threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//       },
//       {
//         category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//         threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//       },
//       {
//         category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
//         threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//       },
//       {
//         category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
//         threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//       },
//     ];
  
//     const chat = model.startChat({
//       generationConfig,
//       safetySettings,
//       history: [
//       ],
//     });
  
//     const result = await chat.sendMessage(messageInput);
//     const response = result.response;
//     gemini = response.text();
//   }
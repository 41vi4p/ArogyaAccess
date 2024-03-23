const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatHistory = document.querySelector('.chat-history');

let gemini = run();
sendButton.addEventListener('click', async () => {
    const messageText = messageInput.value;
    // Send the message to the chat bot
    addMessageToChat(messageText, 'user');
    messageInput.value = '';
    await delayedFunction(20000);
    addMessageToChat(gemini, 'gemini');
});

function delayedFunction(delayInMilliseconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(); // Resolve the promise after the delay
        }, delayInMilliseconds);
    });
    }


function addMessageToChat(text, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    if (sender === 'user') {
        messageElement.innerHTML = `
            <p class="bot-name">You</p>
            <p class="message-text">${text}</p>
        `;
    } 
    else if (sender === 'gemini') {
        messageElement.innerHTML = `
            <p class="bot-name">Doctor Name</p>
            <p class="message-text">${gemini}</p>
        `;
    }
    else {}
       // else {
     //   messageElement.innerHTML = `
      //      <p class="bot-name">Doctor Name</p>
      //      <p class="message-text">${gemini}</p>
      //  `;
  //  }
    chatHistory.appendChild(messageElement);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

const { GoogleGenerativeAI } = require("@google/generative-ai");
const API_KEY = "AIzaSyCUKC-C9LeHEwNXmu23fs7J0nTqFmMDsqA";
  
const genAI = new GoogleGenerativeAI(API_KEY);

let call =" ";
let help = "I am down with fever. What should I do?";

async function run() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
    const prompt = help;
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    call = response.text();
    // console.log(text);
    return call;
  }


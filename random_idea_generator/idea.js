const botMessages = [
    "Build a mobile app for social networking among developers.",
    "Create a platform for online coding challenges and competitions.",
    "Develop a smart home automation system.",
    "Design a web app for collaborative project management.",
    "Build a virtual reality experience for education.",
    "Create an AI-powered chatbot for customer support.",
    "Develop a platform for virtual hackathons.",
    "Build an e-commerce website for handmade products.",
    "Create a fitness and wellness app.",
    "Develop a blockchain-based voting system."
];

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

function generateIdea() {
    const userText = userInput.value.trim().toLowerCase();
    const botMessage = getRandomBotMessage();

    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = userText;

    const botResponse = document.createElement("div");
    botResponse.className = "bot-message";
    botResponse.textContent = botMessage;

    chatBox.appendChild(userMessage);
    chatBox.appendChild(botResponse);
    chatBox.scrollTop = chatBox.scrollHeight;

    userInput.value = "";
}

function getRandomBotMessage() {
    const randomIndex = Math.floor(Math.random() * botMessages.length);
    return botMessages[randomIndex];
}

userInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        generateIdea();
    }
});

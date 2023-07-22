const codeQuestsData = [
    {
        title: "Web Development Challenge",
        description: "Build a responsive website using HTML, CSS, and JavaScript.",
        duration: "1 week",
        level: "Intermediate",
        image: "../assets/codequest1.png"
    },
    {
        title: "Algorithm Master",
        description: "Solve challenging algorithms and data structures problems.",
        duration: "2 weeks",
        level: "Advanced",
        image: "../assets/codequest2.png"
    }
];

const codeStorytellingData = [
    {
        title: "Interactive Storytelling",
        description: "Create an interactive storytelling app using React.",
        duration: "1 week",
        level: "Intermediate",
        image: "../assets/codeathon1.png"
    },
    {
        title: "Fantasy Code Tale",
        description: "Compose a fantasy tale using code snippets.",
        duration: "2 weeks",
        level: "Advanced",
        image: "../assets/codeathon2.png"
    }
];

function renderCards(data, containerId) {
    const container = document.getElementById(containerId);

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card', 'mb-3');

        const cardHeader = document.createElement('div');
        cardHeader.classList.add('card-header');
        cardHeader.innerHTML = `<h5 class="card-title">${item.title}</h5>`;
        card.appendChild(cardHeader);

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        cardBody.innerHTML = `
            <div>
            <img src=${item.image} alt='code'/>
            </div>
            <p>${item.description}</p>
            <p><strong>Duration:</strong> ${item.duration}</p>
            <p><strong>Level:</strong> ${item.level}</p>
        `;
        card.appendChild(cardBody);

        container.appendChild(card);
    });
}
function rsvpEvent(title) {
    alert(`You have RSVPed for the event: ${title}`);
}

function renderCards(data, containerId) {
    const container = document.getElementById(containerId);

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card', 'mb-3');

        const cardHeader = document.createElement('div');
        cardHeader.classList.add('card-header');
        cardHeader.innerHTML = `<h5 class="card-title">${item.title}</h5>`;
        card.appendChild(cardHeader);

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        cardBody.innerHTML = `
        <img src=${item.image} alt='code'/>
            <p>${item.description}</p>
            <p><strong>Duration:</strong> ${item.duration}</p>
            <p><strong>Level:</strong> ${item.level}</p>
            <button class="rsvp-btn" onclick="rsvpEvent('${item.title}')">RSVP</button>
        `;
        card.appendChild(cardBody);

        container.appendChild(card);
    });
}

renderCards(codeQuestsData, 'code-quests');

renderCards(codeStorytellingData, 'code-storytelling');

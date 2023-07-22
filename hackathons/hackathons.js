const hackathonsData = [
    {
        title: "Hackathon 1",
        description: "Join the first exciting hackathon!",
        organizer: "Organizer 1"
    },
    {
        title: "Hackathon 2",
        description: "Join the second exciting hackathon!",
        organizer: "Organizer 2"
    },
];

function renderHackathons(data) {
    const hackathonList = document.getElementById('hackathon-list');

    data.forEach((hackathon, index) => {
        const card = document.createElement('div');
        card.classList.add('hackathon-card');

        const title = document.createElement('h3');
        title.classList.add('hackathon-title');
        title.textContent = hackathon.title;
        card.appendChild(title);

        const description = document.createElement('p');
        description.classList.add('hackathon-description');
        description.textContent = hackathon.description;
        card.appendChild(description);

        const organizer = document.createElement('p');
        organizer.classList.add('hackathon-organizer');
        organizer.textContent = `Organizer: ${hackathon.organizer}`;
        card.appendChild(organizer);

        const actions = document.createElement('div');
        actions.classList.add('hackathon-actions');

        const joinButton = document.createElement('button');
        joinButton.classList.add('hackathon-join-btn');
        joinButton.textContent = 'Join';
        actions.appendChild(joinButton);

        const organizeButton = document.createElement('button');
        organizeButton.classList.add('hackathon-organize-btn');
        organizeButton.textContent = 'Organize';
        actions.appendChild(organizeButton);

        card.appendChild(actions);

        hackathonList.appendChild(card);

        // Event listeners for join and organize buttons
        joinButton.addEventListener('click', () => {
            alert(`You joined Hackathon ${index + 1}: ${hackathon.title}`);
        });

        organizeButton.addEventListener('click', () => {
            alert(`You are organizing Hackathon ${index + 1}: ${hackathon.title}`);
        });
    });
}

const createHackathonForm = document.getElementById('create-hackathon-form');
createHackathonForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const title = document.getElementById('hackathon-title').value;
    const description = document.getElementById('hackathon-description').value;
    const organizer = document.getElementById('hackathon-organizer').value;

    // You can add the logic here to send the data to the server to create a new hackathon
    const newHackathon = {
        title,
        description,
        organizer,
    };

    hackathonsData.push(newHackathon);

    // Clear the form
    createHackathonForm.reset();

    // Clear the hackathon list and re-render the updated list
    const hackathonList = document.getElementById('hackathon-list');
    hackathonList.innerHTML = '';
    renderHackathons(hackathonsData);

    alert(`Hackathon "${title}" created successfully!`);
});

renderHackathons(hackathonsData);

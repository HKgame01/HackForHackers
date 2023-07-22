const mentorGrid = document.getElementById('mentorGrid');
const searchInput = document.getElementById('searchInput');

async function fetchMentors() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=30');
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching mentors:', error);
        return [];
    }
}

function displayMentors(mentors) {
    mentorGrid.innerHTML = '';

    mentors.forEach((mentor) => {
        const mentorCard = document.createElement('div');
        mentorCard.classList.add('mentor-card');
        mentorCard.innerHTML = `
            <img src="${mentor.picture.large}" alt="${mentor.name.first} ${mentor.name.last}">
            <h3>${mentor.name.first} ${mentor.name.last}</h3>
            <p><strong>Email:</strong> ${mentor.email}</p>
            <p><strong>Phone:</strong> ${mentor.phone}</p>
            <p><strong>Location:</strong> ${mentor.location.city}, ${mentor.location.country}</p>
            <p><strong>Expertise:</strong> <span class="expertise">${mentor.login.username}</span></p>
            <button class="connect-btn" onclick="showPopup('${mentor.name.first} ${mentor.name.last}', '${mentor.email}', '${mentor.phone}')">Connect</button>
            <button class="schedule-call-btn" onclick="showPopup('Schedule Call with ${mentor.name.first} ${mentor.name.last}', '${mentor.email}')">Schedule Call</button>
        `;
        mentorGrid.appendChild(mentorCard);
    });
}

function searchMentors() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm === '') {
        // if the search input is empty, display all mentors
        fetchMentors().then((mentors) => displayMentors(mentors));
    } else {
        // if the search input is not empty, filter mentors based on expertise
        fetchMentors().then((mentors) => {
            const filteredMentors = mentors.filter((mentor) =>
                mentor.login.username.toLowerCase().includes(searchTerm)
            );
            displayMentors(filteredMentors);
        });
    }
}

function showPopup(title, email, phone = '') {
    const modal = document.getElementById('mentorModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalEmail = document.getElementById('modalEmail');
    const modalPhone = document.getElementById('modalPhone');

    modalTitle.textContent = title;
    modalEmail.textContent = email;
    modalPhone.textContent = phone;

    modal.style.display = 'block';
}

function closePopup() {
    const modal = document.getElementById('mentorModal');
    modal.style.display = 'none';
}

function connect() {
    alert('Connect button clicked');
    closePopup();
}

function scheduleCall() {
    
    alert('Schedule Call button clicked');
    closePopup();
}

window.addEventListener('load', () => {
    fetchMentors().then((mentors) => displayMentors(mentors));
});

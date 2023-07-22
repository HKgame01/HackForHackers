const projects = [
    {
        title: "Project 1 const",
        description: "This is a sample project description.",
        image: "../assets/location.jpg"
    },
    {
        title: "Project 2",
        description: "Another sample project description.",
        image: "../assets/rocket.png"
    },
    {
        title: "Project 3",
        description: "Yet another sample project description.",
        image: "../assets/profile.jpg"
    }
];

function fetchGitHubProjects() {
    const username = document.getElementById("githubUsername").value;
    const githubProjectsContainer = document.getElementById("githubProjects");
    githubProjectsContainer.innerHTML = "";

    fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
        .then((response) => response.json())
        .then((data) => {
            data.forEach((repo) => {
                githubProjectsContainer.innerHTML += `
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${repo.name}</h5>
                                <p class="card-text">${repo.description}</p>
                                <a href="${repo.html_url}" class="btn btn-primary" target="_blank">View on GitHub</a>
                            </div>
                        </div>
                    </div>
                `;
            });
        })
        .catch((error) => console.error("Error fetching GitHub projects:", error));
}
function displayProjects() {
    const projectContainer = document.getElementById("projectContainer");
    projectContainer.innerHTML = "";

    projects.forEach((project) => {
        // Check if the project has an image
        const imageSrc = project.image ? project.image : "placeholder.jpg";
        projectContainer.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${imageSrc}" class="card-img-top project-image" alt="${project.title}">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.description}</p>
                        <a href="#" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>
        `;
    });
}
function uploadProject() {
    const imageFile = document.getElementById("projectImage").files[0];
    const projectTitle = document.getElementById("projectTitle").value;
    const projectDescription = document.getElementById("projectDescription").value;

    if (imageFile && projectTitle && projectDescription) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const project = {
                image: event.target.result, // Data URL of the uploaded image
                title: projectTitle,
                description: projectDescription,
            };
            projects.push(project);
            displayProjects();
        };
        reader.readAsDataURL(imageFile);
    } else {
        alert("Please fill all fields and upload an image.");
    }
}


displayProjects();
const documentationData = [
    {
        title: "React Documentation",
        description: "Documentation for ReactJS library.",
        link: "https://reactjs.org/docs/getting-started.html",
        category: "Frontend"
    },
    {
        title: "Node.js Documentation",
        description: "Documentation for Node.js.",
        link: "https://nodejs.org/en/docs/",
        category: "Backend"
    },
    {
        title: "Vue.js Documentation",
        description: "Documentation for Vue.js framework.",
        link: "https://vuejs.org/v2/guide/",
        category: "Frontend",
    },
    {
        title: "Express.js Documentation",
        description: "Documentation for Express.js framework.",
        link: "https://expressjs.com/en/5x/api.html",
        category: "Backend",
    },
    {
        title: "Python Documentation",
        description: "Documentation for Python programming language.",
        link: "https://docs.python.org/3/",
        category: "Backend",
    },
    {
        title: "Angular Documentation",
        description: "Documentation for Angular framework.",
        link: "https://angular.io/docs",
        category: "Frontend",
    },
    {
        title: "Django Documentation",
        description: "Documentation for Django web framework.",
        link: "https://docs.djangoproject.com/en/stable/",
        category: "Backend",
    },
    {
        title: "Redux Documentation",
        description: "Documentation for Redux state management library.",
        link: "https://redux.js.org/introduction/getting-started",
        category: "Frontend",
    },
    {
        title: "MongoDB Documentation",
        description: "Documentation for MongoDB NoSQL database.",
        link: "https://docs.mongodb.com/",
        category: "Backend",
    },
    {
        title: "TensorFlow Documentation",
        description: "Documentation for TensorFlow machine learning library.",
        link: "https://www.tensorflow.org/guide",
        category: "Frontend",
    },
];

function performSearchAndFilter(query, category) {

    const filteredResults = documentationData.filter(item => {
        return (
            (item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.description.toLowerCase().includes(query.toLowerCase())) &&
            (category === "All" || item.category === category)
        );
    });

    return filteredResults;
}

function renderSearchResultsAndPagination(results, currentPage, itemsPerPage) {
    const searchResultsContainer = document.getElementById('search-results');
    searchResultsContainer.innerHTML = '';

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedResults = results.slice(startIndex, endIndex);

    paginatedResults.forEach(result => {
        const item = document.createElement('div');
        item.classList.add('result-item');

        const title = document.createElement('h4');
        title.classList.add('result-title');
        title.textContent = result.title;
        item.appendChild(title);

        const description = document.createElement('p');
        description.classList.add('result-description');
        description.textContent = result.description;
        item.appendChild(description);

        const link = document.createElement('a');
        link.href = result.link;
        link.textContent = "View";
        link.target = "_blank";
        item.appendChild(link);

        item.addEventListener('click', () => {
            showDocumentationContent(result.title, result.link);
        });

        searchResultsContainer.appendChild(item);
    });
}

function showDocumentationContent(title, link) {
    const documentationModalLabel = document.getElementById('documentationModalLabel');
    const documentationModalBody = document.getElementById('documentationModalBody');

    documentationModalLabel.textContent = title;
    documentationModalBody.innerHTML = `<iframe src="${link}" width="100%" height="100%" frameborder="0"></iframe>`;

    $('#documentationModal').modal('show');
}

const searchButton = document.getElementById('search-btn');
searchButton.addEventListener('click', () => {
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const query = searchInput.value.trim();
    const category = categoryFilter.value;

    const searchResults = performSearchAndFilter(query, category);
    renderSearchResultsAndPagination(searchResults, 1, 5);
});

const categoryFilter = document.getElementById('category-filter');
categoryFilter.addEventListener('change', () => {
    const searchInput = document.getElementById('search-input');
    const category = categoryFilter.value;

    const query = searchInput.value.trim();
    const searchResults = performSearchAndFilter(query, category);
    renderSearchResultsAndPagination(searchResults, 1, 5);
});

const searchInput = document.getElementById('search-input');
searchInput.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        const category = categoryFilter.value;
        const query = searchInput.value.trim();

        const searchResults = performSearchAndFilter(query, category);
        renderSearchResultsAndPagination(searchResults, 1, 5);
    }
});

renderSearchResultsAndPagination(documentationData, 1, 5);




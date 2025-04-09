// Array of project data
const projects = [
    { name: "Project One", link: "https://github.com/username/project-one" },
    { name: "Project Two", link: "https://github.com/username/project-two" },
    { name: "Project Three", link: "https://github.com/username/project-three" },
];

// Function to dynamically create project boxes
function displayProjects() {
    const container = document.getElementById("projects-container");

    projects.forEach((project) => {
        // Create a div for each project
        const projectBox = document.createElement("div");
        projectBox.classList.add("project-box");

        // Add project name and link
        projectBox.innerHTML = `
            <h3>${project.name}</h3>
            <a href="${project.link}" target="_blank">View Project</a>
        `;

        // Append the project box to the container
        container.appendChild(projectBox);
    });
}

// Call the function to display projects
displayProjects();

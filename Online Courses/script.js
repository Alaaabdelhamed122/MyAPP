// Function to search for courses by title or description
function searchCourses() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const courseCards = document.querySelectorAll('.course-card');

    courseCards.forEach(card => {
        const courseTitle = card.querySelector('h3').innerText.toLowerCase();
        const courseDescription = card.querySelector('p').innerText.toLowerCase();

        if (courseTitle.includes(searchInput) || courseDescription.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

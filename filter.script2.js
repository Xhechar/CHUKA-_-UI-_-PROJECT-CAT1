// script.js
function updateDepartments() {
    const facultySelect = document.getElementById('faculty');
    const departmentSelect = document.getElementById('department');

    // Get the selected faculty
    const selectedFaculty = facultySelect.value;

    // Clear existing options in the department select
    departmentSelect.innerHTML = '<option value="">All</option>';

    // Populate department options based on the selected faculty
    if (selectedFaculty in facultyDepartments) {
        facultyDepartments[selectedFaculty].forEach(department => {
            const option = document.createElement('option');
            option.value = department;
            option.textContent = department;
            departmentSelect.appendChild(option);
        });
    }
}

function applyFilters() {
    // Get selected values from the form
    const faculty = document.getElementById('faculty').value;
    const department = document.getElementById('department').value;
    const year = document.getElementById('year').value;

    // Get all PDF cards
    const pdfCards = document.querySelectorAll('.pdf-card');

    // Iterate through each PDF card and check if it matches the selected filters
    pdfCards.forEach(card => {
        const cardFaculty = card.getAttribute('data-faculty');
        const cardDepartment = card.getAttribute('data-department');
        const cardYear = card.getAttribute('data-year');

        // Check if the card matches the selected filters
        const facultyMatch = faculty === '' || faculty === cardFaculty;
        const departmentMatch = department === '' || department === cardDepartment;
        const yearMatch = year === '' || year === cardYear;

        // Display or hide the card based on the filter criteria
        card.style.display = facultyMatch && departmentMatch && yearMatch ? 'block' : 'none';
    });
}

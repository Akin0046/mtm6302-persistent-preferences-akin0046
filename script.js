// Function to add items to the list
function addItemsToList() {
    const items = ['Red', 'Blue', 'Green', 'Orange', 'Purple']; // List of items
    const listContainer = document.getElementById('list-container');
    
    // Clear the list container first
    listContainer.innerHTML = '';

    // Add Bootstrap's 'list-group-item' class for Bootstrap styling
    items.forEach(item => {
        const listItem = document.createElement('div');
        listItem.classList.add('list-group-item'); // Bootstrap class for list items
        listItem.textContent = item;
        listContainer.appendChild(listItem);
    });
}

// Function to change theme
function changeTheme(theme) {
    // Remove all other theme classes before adding the new one
    document.body.classList.remove('light-theme', 'dark-theme', 'colorful-theme');
    document.body.classList.add(theme + '-theme'); // Append '-theme' to match CSS class names
    localStorage.setItem('theme', theme);
}



// Function to change list style
function changeListStyle(style) {
    const listContainer = document.getElementById('list-container');
    // Remove all other list style classes before adding the new one
    listContainer.classList.remove('expanded', 'compact', 'grid');
    listContainer.classList.add(style); // Add the selected list style class
    localStorage.setItem('list-style', style);
}

// Load preferences from local storage
function loadPreferences() {
    const theme = localStorage.getItem('theme');
    const listStyle = localStorage.getItem('list-style');

    if (theme) {
        changeTheme(theme);
        document.getElementById('theme-selector').value = theme;
    }
    
    if (listStyle) {
        changeListStyle(listStyle);
        document.getElementById('list-style-selector').value = listStyle;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Add list items on page load
    addItemsToList();
    
    // Load any saved preferences
    loadPreferences();
    
    // Set up event listeners for preference changes
    document.getElementById('theme-selector').addEventListener('change', function(event) {
        changeTheme(event.target.value);
    });

    document.getElementById('list-style-selector').addEventListener('change', function(event) {
        changeListStyle(event.target.value);
    });
});

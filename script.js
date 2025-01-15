//your code here!

// Select the list container
const listContainer = document.getElementById('list');

// Function to add items to the list
function addItems(count = 10) {
    for (let i = 0; i < count; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `Item ${listContainer.children.length + 1}`;
        listContainer.appendChild(listItem);
    }
}

// Initial items
addItems();

// Function to handle infinite scrolling
function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = listContainer;

    // Check if the user has scrolled to the bottom of the container
    if (scrollTop + clientHeight >= scrollHeight - 1) {
        addItems(2); // Add 2 more items
    }
}

// Add scroll event listener to the container
listContainer.addEventListener('scroll', handleScroll);

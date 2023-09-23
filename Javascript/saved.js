// Function to save an item for later
function saveForLater(element) {
    const item = {
        content: "",
        image: null,
    };

    const previousElement = element.previousElementSibling;
    if (previousElement.tagName === "IMG") {
        item.image = previousElement.getAttribute("src");
    } else if (previousElement.tagName === "P") {
        item.content = previousElement.innerHTML;
    }

    let savedItems = getSavedItems();
    savedItems.push(item);
    setSavedItems(savedItems);

    updateSavedCount();
}

// Function to retrieve saved items from local storage
function getSavedItems() {
    const savedItems = localStorage.getItem("savedItems");
    return savedItems ? JSON.parse(savedItems) : [];
}

// Function to set saved items in local storage
function setSavedItems(savedItems) {
    localStorage.setItem("savedItems", JSON.stringify(savedItems));
}

// Function to update the saved count and display as an alert
function updateSavedCount() {
    const savedItems = getSavedItems();
    const savedCount = savedItems.length;
    alert(`You have ${savedCount} item(s) saved.`);
}

// Function to display saved items on the Saved Items page
function displaySavedItems() {
    const savedItems = getSavedItems();
    const savedItemsContainer = document.getElementById("savedItemsContainer");

    for (let i = 0; i < savedItems.length; i++) {
        const item = savedItems[i];

        const savedItemDiv = document.createElement("div");
        savedItemDiv.classList.add("savedItem");

        if (item.content) {
            const contentParagraph = document.createElement("p");
            contentParagraph.innerText = item.content;
            savedItemDiv.appendChild(contentParagraph);
        }

        if (item.image) {
            const imageElement = document.createElement("img");
            imageElement.setAttribute("src", item.image);
            savedItemDiv.appendChild(imageElement);
        }

        savedItemsContainer.appendChild(savedItemDiv);
    }
}

window.onload = function () {
    displaySavedItems();
};

function submitContactForm() {
    // Get the values entered by the user
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    alert("Thank you for your message!\n\nName: " + name + "\nEmail: " + email + "\nMessage: " + message);

    // Reset the form after submission
    document.getElementById("contactForm").reset();
}
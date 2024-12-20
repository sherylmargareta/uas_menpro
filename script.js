// Dummy JavaScript File

// Log a message to the console
console.log('Hello World!');

// Function to greet a user
function greetUser(name) {
    return `Hello, ${name}! Welcome to the dummy script.`;
}

// Event listener for a button click
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('greetButton');
    if (button) {
        button.addEventListener('click', () => {
            const message = greetUser('User');
            alert(message);
        });
    }
});

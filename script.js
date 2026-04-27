// JokeAPI endpoint
const API_URL = 'https://v2.jokeapi.dev/joke/Any';

// DOM Elements
const jokeButton = document.getElementById('jokeButton');
const jokeContent = document.getElementById('jokeContent');
const loadingSpinner = document.getElementById('loadingSpinner');
const errorMessage = document.getElementById('errorMessage');

// Event Listener
jokeButton.addEventListener('click', fetchJoke);

/**
 * Fetches a random joke from JokeAPI
 */
async function fetchJoke() {
    try {
        // Clear previous error and show loading state
        errorMessage.classList.add('hidden');
        jokeContent.classList.add('hidden');
        loadingSpinner.classList.remove('hidden');
        jokeButton.disabled = true;

        // Fetch joke from API
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Handle API response
        if (data.error) {
            throw new Error('Failed to fetch joke from API');
        }

        // Display joke based on type
        displayJoke(data);

    } catch (error) {
        console.error('Error fetching joke:', error);
        showError('Oops! Could not fetch a joke. Please try again.');
    } finally {
        // Hide loading spinner and re-enable button
        loadingSpinner.classList.add('hidden');
        jokeButton.disabled = false;
    }
}

/**
 * Displays the joke in the UI
 * @param {Object} data - Joke data from API
 */
function displayJoke(data) {
    let jokeHTML = '';

    if (data.type === 'single') {
        // Single-part joke
        jokeHTML = `<p>${escapeHtml(data.joke)}</p>`;
    } else if (data.type === 'twopart') {
        // Two-part joke (setup and delivery)
        jokeHTML = `
            <p class="setup">${escapeHtml(data.setup)}</p>
            <p class="delivery">${escapeHtml(data.delivery)}</p>
        `;
    }

    jokeContent.innerHTML = jokeHTML;
    jokeContent.classList.remove('hidden');
}

/**
 * Displays an error message
 * @param {string} message - Error message to display
 */
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
    jokeContent.classList.add('hidden');
}

/**
 * Escapes HTML special characters to prevent XSS
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Load a joke on page load
window.addEventListener('load', () => {
    fetchJoke();
});

let headsCount = 0;
let tailsCount = 0;
let totalFlips = 0;

document.getElementById('flipButton').addEventListener('click', () => {
    const result = Math.random() < 0.5 ? 'heads' : 'tails';
    totalFlips++; // Increment total flips on each coin flip

    if (result === 'heads') {
        headsCount++;
        document.getElementById('headsCount').textContent = headsCount;
    } else {
        tailsCount++;
        document.getElementById('tailsCount').textContent = tailsCount;
    }

    // Update probabilities
    updateProbabilities();
});

document.getElementById('resetButton').addEventListener('click', () => {
    headsCount = 0;
    tailsCount = 0;
    totalFlips = 0;

    document.getElementById('headsCount').textContent = headsCount;
    document.getElementById('tailsCount').textContent = tailsCount;

    // Reset probabilities to 0
    updateProbabilities();
});

function updateProbabilities() {
    if (totalFlips > 0) {
        const headsProbability = ((headsCount / totalFlips) * 100).toFixed(2);
        const tailsProbability = ((tailsCount / totalFlips) * 100).toFixed(2);

        document.getElementById('headsProbability').textContent = `${headsProbability}%`;
        document.getElementById('tailsProbability').textContent = `${tailsProbability}%`;
    } else {
        document.getElementById('headsProbability').textContent = `0%`;
        document.getElementById('tailsProbability').textContent = `0%`;
    }
}

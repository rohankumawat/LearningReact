const logDiv = document.getElementById('log'); // Get the log div
const stateDiv = document.getElementById('state'); // Get the state div
// select buttons:
const startButton = document.getElementById('start-btn'); // Get the start button
const stopButton = document.getElementById('stop-btn'); // Get the stop button

startButton.addEventListener('click', () => {
  document.addEventListener('keydown', handleDown); // Add event listener for keydown
  document.addEventListener('keyup', handleUp); // Add event listener for keyup
  startButton.disabled = true; // Disable the start button
  stopButton.disabled = false; // Enable the stop button
});

stopButton.addEventListener('click', () => {
  document.removeEventListener('keydown', handleDown); // Remove event listener for keydown
  document.removeEventListener('keyup', handleUp); // Remove event listener for keyup
  logDiv.textContent = ''; // Clear the log
  stateDiv.textContent = ''; // Clear the state
  startButton.disabled = false; // Enable the start button
  stopButton.disabled = true; // Disable the stop button
})

function handleDown(e) {
  logDiv.textContent = `Keydown: ${e.key} pressed down`; // Log the keydown event
  stateDiv.textContent = 'Key is down.'; // Set the state to keydown
}

function handleUp(e) {
    logDiv.textContent = `Keydown: ${e.key} pressed up`; // Log the keydown event
    stateDiv.textContent = 'Key is up.'; // Set the state to keydown
  }
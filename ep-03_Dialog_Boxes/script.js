// Function to show a simple alert box
function showAlert() {
  // Show an alert box with a message
  alert("Welcome! This is an alert box.");
}

// Function to show a confirm dialog
function showConfirm() {
  // Show a confirm box asking the user "Do you want to continue?"
  // It returns true if user clicks OK, false if user clicks Cancel
  let result = confirm("Do you want to continue?");

  // Log the result in the browser console
  console.log("User clicked:", result);
}

// Function to show a prompt dialog
function showPrompt() {
  // Show a prompt asking the user for their name
  // It returns the text the user types, or null if user clicks Cancel
  let name = prompt("What is your name?");

  // Log what the user entered (or null) in the console
  console.log("User entered:", name);
}

// Function that combines alert, confirm, and prompt together
function fullDemo() {
  // Step 1: Show a welcome alert box
  alert("Welcome to our full demo!");

  // Step 2: Show a confirm box asking if the user wants to continue
  // Store the user's choice (true for OK, false for Cancel)
  let wantsToContinue = confirm("Do you want to continue?");

  // Step 3: Check what the user chose
  if (wantsToContinue) {
    // If user clicked OK, show a prompt asking for their name
    let userName = prompt("Great! What is your name?");

    // Step 4: Check if the user typed something and didn't just click Cancel
    if (userName !== null && userName.trim() !== "") {
      // User entered a non-empty name: greet them in an alert box
      alert("Hello, " + userName + "! Nice to meet you.");
    } else {
      // User clicked Cancel or entered empty text: show a different alert
      alert("You didn't enter your name, but that's okay!");
    }

  } else {
    // User clicked Cancel in the confirm box: show goodbye message
    alert("Maybe next time. Goodbye!");
  }
}

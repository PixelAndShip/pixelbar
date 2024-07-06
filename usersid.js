// Initialize users array (simulated JSON list)
let users = [];
fetch('users.json')
  .then(response => response.json())
  .then(data => {
    users = data; // Assign the parsed JSON data to the users array
  })
  .catch(error => {
    console.error('Error fetching users:', error);
  });


let profile = {
    signedIn: false,
    username: null,
    password: null
};

function signUpOrSignIn(username, password) {
    let userExists = users.some(user => user.username === username && user.password === password);

    if (userExists) {
        profile.signedIn = true;
        profile.username = username;
        profile.password = password;
        console.log(`Signed in as ${username}`);
    } else {
        users.push({ username, password });
        profile.signedIn = true;
        profile.username = username;
        profile.password = password;
        console.log(`Signed up and signed in as ${username}`);
    }
}

function handleSignInUp() {
    // Fetch username and password from the form
    let usernameInput = document.getElementById("username");
    let passwordInput = document.getElementById("password");

    // Check if usernameInput and passwordInput are not null before accessing their value
    if (usernameInput && passwordInput) {
        let username = usernameInput.value;
        let password = passwordInput.value;

        // Call signUpOrSignIn function with the provided username and password
        signUpOrSignIn(username, password);

        // You can add further logic here, such as displaying messages or redirecting the user
        console.log("Updated users list:", users);
        console.log("Current profile:", profile);

        // Clear input fields after sign-in/sign-up
        usernameInput.value = '';
        passwordInput.value = '';
        window.location.href = 'real_page.html';
    } else {
        console.error("Username or password input element not found.");
    }
}

// Add event listener to the button after DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("signInUpButton").addEventListener("click", handleSignInUp);
   
  
    
    
    
    
});

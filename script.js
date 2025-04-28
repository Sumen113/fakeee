// Get the button and input element
const nextButton = document.getElementById('nextBtn');
const passwordInput = document.getElementById('password');

// Function to handle form submission logic
function handleFormSubmission(event) {
    // Prevent form submission
    event.preventDefault();

    // Get the value of the input field
    const password = passwordInput.value;

    // Check if the password matches the specific password
    const correctPassword = 'nositehere'; // Replace with the correct password

    if (password === correctPassword) {
        let win = window.open('', '_blank');

        let html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Home</title>
            <link rel="icon" href="https://img.icons8.com/color/48/google-classroom.png" type="png">
            <style>
            html, body {
                margin: 0;
                padding: 0;
                height: 100%;
            }
            </style>
        </head>
        <body>
            <iframe src="https://sumensite.global.ssl.fastly.net/"
                    style="width:100%; height:100%; border:none;"></iframe>

            <script>
            // Change URL in address bar
            history.replaceState({}, "", "sumensite.lol");
            </script>
        </body>
        </html>
        `;


        if (win) {
        win.document.write(html);
        win.document.close();
        } else {
        alert('Popup blocked!');
        }





    } else {
        // Redirect to a different website if password is incorrect
        window.open("https://classroom.google.com");
    }
}

// Add event listener for button click
nextButton.addEventListener('click', handleFormSubmission);

// Add event listener for "Enter" key press
passwordInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleFormSubmission(event);
    }
});

Palindrome Checker 
This project is one of my capstone projects from FreeCodeCamp's JavaScript curriculum. It demonstrates core JavaScript concepts by creating an interactive web application that checks whether a string is a palindrome.

What I Learned
1. String Manipulation:
Converted user input to lowercase and removed non-alphanumeric characters using regular expressions (replace(/[^a-z0-9]/g, '')).

Reversed the cleaned string to compare with the original cleaned input.

2. DOM Manipulation:
Used document.getElementById to dynamically get and update elements like the input field and result display.

Dynamically changed the content of HTML elements based on user input and results.

3. Validation and Error Handling:
Ensured the program handles cases like empty inputs gracefully by showing an alert.

4. Event Handling:
Added a click event listener to the button for user interaction.

Implemented a keydown event listener to trigger functionality when the "Enter" key is pressed.

5. Logical Thinking:
Applied the logic for palindrome checking by comparing the reversed string with the original cleaned string.

Broke the problem into manageable steps to ensure clarity and maintainability.

6. Dynamic User Interaction:
Provided real-time feedback to users by displaying the result (whether the input is a palindrome or not) directly on the webpage.

Technologies Used
HTML: For structuring the interface.

CSS: (Optional styling for enhancing visuals).

JavaScript: For implementing the palindrome-checking logic and adding interactivity.

How It Works
Input Validation:

Users type in a string in the input field.

The program ensures the input is valid (not empty).

Palindrome Check:

The input is cleaned (lowercase and special characters removed).

The cleaned string is reversed and compared to the original cleaned string.

Interactive Features:

Clicking the "Check" button or pressing the "Enter" key triggers the palindrome-checking function.

Result Display:

Results are dynamically displayed, informing users if their input is a palindrome.

How to Use
Open the HTML file in a browser.

Type a string (word, phrase, etc.) into the input field.

Click the "Check" button or press the "Enter" key.

View the result, which indicates whether the input is a palindrome.

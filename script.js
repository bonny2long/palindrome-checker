const button = document.getElementById('check-btn');
const input = document.getElementById('text-input');

// Function to check for palindrome
function checkPalindrome() {
  const userInput = input.value;

  if (userInput === '') {
    alert('Please input a value');
    return;
  }

  let cleanedUp = userInput.toLowerCase().replace(/[^a-z0-9]/g, '');
  let reversedInput = cleanedUp.split('').reverse().join('');

  let result =
    cleanedUp === reversedInput
      ? `${userInput} is a palindrome!`
      : `${userInput} is not a palindrome!`;

  document.getElementById('result').innerText = result;
}

button.addEventListener('click', checkPalindrome);

document.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    checkPalindrome();
  }
});

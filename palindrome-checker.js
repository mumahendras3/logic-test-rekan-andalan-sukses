/*
  Soal:

  Buatlah sebuah fungsi dengan sebuah inputan sebuah kata dan dapat menentukan apakah inputan tersebut merupakan kata palindrom atau bukan

  Note:
  1. Boleh dikerjakan dengan Flow Chart atau dibuatkan simple programnya
  2. Jika menggunakan simple program mohon untuk dikirim menggunakan github
*/

// Jawaban:

/*
  Simple Palindrome Checker Function
*/
function palindromeChecker(input) {
  // Lowercase all input characters first
  const allLowerCase = input.toLowerCase();

  // Remove all non-alphanumeric characters
  const cleanInput = allLowerCase.replaceAll(/[^a-z0-9]+/g, '');

  // Reverse the cleaned-up input
  let reversedInput = '';
  for (let i = cleanInput.length - 1; i >= 0; i--) {
    reversedInput += cleanInput[i];
  }

  // Compare the reversed input and the cleaned-up input, returning
  // `true` if the input is a palindrome, or `false` otherwise.
  return reversedInput === cleanInput;
}

/*
  Some examples
*/
console.log('===== Examples =====\n');
// Palindromes
console.log('A. Palindromes\n');
console.log('input: 121')
console.log('expected output:', true);
console.log('actual output:', palindromeChecker('121'));
console.log();
console.log('input: Race car')
console.log('expected output:', true);
console.log('actual output:', palindromeChecker('Race car'));
console.log();
console.log('input: _EyE!')
console.log('expected output:', true);
console.log('actual output:', palindromeChecker('_EyE!'));
// Non-palindromes
console.log('\nB. Non-palindromes\n');
console.log('input: 123')
console.log('expected output:', false);
console.log('actual output:', palindromeChecker('123'));
console.log();
console.log('input: hello there!')
console.log('expected output:', false);
console.log('actual output:', palindromeChecker('hello there!'));
console.log();
console.log('input: some?')
console.log('expected output:', false);
console.log('actual output:', palindromeChecker('some?'));
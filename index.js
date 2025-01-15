function isPalindrome(str) {
  const reverseWord = str.split("").reverse().join("");

  return str.toUpperCase() === reverseWord.toUpperCase();
}

const words = {
  kayak: true,
  SOS: true,
  Kayak: true,
  Bonjour: false,
};
for (let word in words) {
  if (isPalindrome(word) !== words[word]) {
    console.log(`isPalindrome(${word})`);
  }
}

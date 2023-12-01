import fs from "fs";
let input: string[] = fs.readFileSync("./input", "utf-8").split("\n");

const numberWords = {
  zero: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

let extractNumbers = (str: string) => {
  //We need to extract the first number and the last number from the string then return the combination
  //We also need to consider that some numbers are written in words
  //example string: nrdtgdftjmfour6fxjninenineblqlthvpcx
  //the first number is 4 and the last number is nine, so the return is 49

  let firstDigit = "";
  let lastDigit = "";

  const findDigit = (s: string, reverse = false) => {
    let index = reverse ? s.length - 1 : 0;
    while (reverse ? index >= 0 : index < s.length) {
      let char = s[index];

      // Check for a single digit
      if (!isNaN(+char) && char !== " ") {
        return char;
      }

      // Check for a word digit
      for (let word in numberWords) {
        let wordPos = reverse ? s.lastIndexOf(word) : s.indexOf(word);
        if (wordPos !== -1 && wordPos === index) {
          return numberWords[word];
        }
      }

      reverse ? index-- : index++;
    }

    return "";
  };

  firstDigit = findDigit(str);
  lastDigit = findDigit(str, true);

  return firstDigit + lastDigit;
};

let runSolution = () => {
  let arr: string[] = [];
  for (let i = 0; i < input.length; i++) {
    arr.push(extractNumbers(input[i]));
  }

  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += +arr[i];
  }

  return result;
};

console.log(runSolution());

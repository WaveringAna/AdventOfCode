import fs from "fs";
let input: string[] = fs.readFileSync("./input", "utf-8").split("\n");

let extractNumbers = (str: string) => {
  //We need to extract the first number and the last number from the string then return the combination
  //example string: nrdtgdftjmfour6fxjninenineblqlthvpcx
  //the first number and last is 6 because it is the only digit, so the return is 66

  let firstDigit = "";
  let lastDigit = "";

  // Find the first digit
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(+str[i]) && str[i] !== " ") {
      firstDigit = String(str[i]);
      break;
    }
  }

  // Find the last digit
  for (let i = str.length - 1; i >= 0; i--) {
    if (!isNaN(+str[i]) && str[i] !== " ") {
      lastDigit = String(str[i]);
      break;
    }
  }

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

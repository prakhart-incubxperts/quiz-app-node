const anyDigitId = (options) => {
  if (typeof options !== "object") {
    options = {};
  } else {
    if (options === null || Array.isArray(options)) {
      options = {};
    }
  }

  let { digit = 6, type = "alphaNumeric", prefix = "", suffix = "" } = options;

  const types = [
    "alphaNumeric",
    "capitalLetters",
    "smallLetters",
    "numbers",
    "onlyLetters",
  ];
  if (typeof digit !== "number" || digit <= 0) {
    digit = 6;
  }
  if (typeof type !== "string" || !types.includes(type)) {
    type = "alphaNumeric";
  }
  if (typeof prefix !== "string") {
    prefix = "";
  }
  if (typeof suffix !== "string") {
    suffix = "";
  }

  let randomId = "";
  const capitalLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const smallLetters = "mnbvcxzlkjhgfdsapoiuytrewq";
  const numbers = "0123456789";

  let helperString = "";
  if (type === "capitalLetters") {
    helperString = capitalLetters;
  } else if (type === "smallLetters") {
    helperString = smallLetters;
  } else if (type === "numbers") {
    helperString = numbers;
  } else if (type === "onlyLetters") {
    helperString = capitalLetters + smallLetters;
  } else {
    helperString = capitalLetters + numbers + smallLetters;
  }

  const prefixNotEmpty = typeof prefix === "string" && prefix !== "";
  const suffixNotEmpty = typeof suffix === "string" && suffix !== "";

  if (prefixNotEmpty && digit - prefix.length >= 1) {
    digit -= prefix.length;
  } else {
    prefix = "";
  }

  if (suffixNotEmpty && digit - suffix.length >= 1) {
    digit -= suffix.length;
  } else {
    suffix = "";
  }

  for (let i = 0; i < digit; i++) {
    randomId += helperString[Math.floor(Math.random() * helperString.length)];
  }

  randomId = prefix + randomId + suffix;

  return randomId;
};

module.exports = anyDigitId;

const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: () => String.fromCharCode(Math.floor(Math.random() * 26) + 97),
  upper: () => String.fromCharCode(Math.floor(Math.random() * 26) + 65),
  number: () => String.fromCharCode(Math.floor(Math.random() * 10) + 48),
  symbol: () => "!@#$%^&*(){}[]=<>/,.".charAt(Math.floor(Math.random() * 22)),
};

clipboardEl.addEventListener("click", () => {
  const password = resultEl.innerText;
  if (!password) return;
  navigator.clipboard.writeText(password).then(() => {
    alert("Password copied to clipboard!");
  });
});

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0) return "";

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  return generatedPassword.slice(0, length);
}

// Project: Password Generator
// Author: Kamran Javed
// Portfolio: https://kamranjaved.com
// Company: OneDigitalLine
// Website: https://onedigitalline.com
// Email: meet@kamranjaved.com
// License: For personal or client use only. Redistribution prohibited.
// © Kamran Javed. All rights reserved.

// SURAJ C S 20BCE1678 CYBERSEC JCOMP 

const result = document.getElementById("result");
		const copybtn = document.getElementById("copy");
const length = document.getElementById("length");
	const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
	const symbols = document.getElementById("symbols");
	const generatebtn = document.getElementById("generate");
		const form = document.getElementById("passwordGeneratorForm");


const UPPER = available(65, 90);
const LOWER = available(97, 122);
const NUM = available(48, 57);
const SYMBOL = available(33, 47)
  .concat(available(58, 64))
  .concat(available(91, 96))
  .concat(available(123, 126));


function available(low, high) {
	const array = [];
	for (let i = low; i <= high; i++) {
	  array.push(i);
	}
	return array;
  }


let generatePassword = (
	characterAmount,
	includeUppercase,
	includeNumbers,
	includeSymbols
  ) => {
	let charCodes = LOWER;
	if (includeUppercase) charCodes = charCodes.concat(UPPER);
	if (includeSymbols) charCodes = charCodes.concat(SYMBOL);
	if (includeNumbers) charCodes = charCodes.concat(NUM);
	const passwordCharacters = [];
	for (let i = 0; i < characterAmount; i++) {
	  const characterCode =
		charCodes[Math.floor(Math.random() * charCodes.length)];
	  passwordCharacters.push(String.fromCharCode(characterCode));
	}
	return passwordCharacters.join("");
  };


copybtn.addEventListener("click", () => {
	const textarea = document.createElement("textarea");
	const passwordToCopy = result.innerText;
	
	if (!passwordToCopy) return;

	textarea.value = passwordToCopy;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand("copy");
	textarea.remove();
	alert("Password Copied to Clipboard");
  });
  
form.addEventListener("submit", (e) => {
	e.preventDefault();
	const characterAmount = length.value;
	const includeUppercase = uppercase.checked;
	const includeNumbers = numbers.checked;
	const includeSymbols = symbols.checked;
	const password = generatePassword(
	  characterAmount,
	  includeUppercase,
	  includeNumbers,
	  includeSymbols
	);
	result.innerText = password;
  });
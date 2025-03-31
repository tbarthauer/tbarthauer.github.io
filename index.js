const ENTER_KEY_CODE = 13;

const headerElement = document.getElementById("header");
const displayElement = document.getElementById("display");
const userInputElement = document.getElementById("userinput");

const headerUpdateInterval = setInterval(updateHeader, 1000);


/* Text literals */
const loginScreen = `This terminal is property of Endliv Medical Solutions Inc. Unauthorized access is strictly prohibited.

Welcome, employee! Please input a valid userid to contine.
`;



/* state functions */

function loginState(userInput, displayElement, currentState) {
	console.log("received userid " + userInput);
	if (userInput === "jlinmann") {
		displayElement.innerText = loginScreen.concat("\nUsername: jlinmann\nPlease enter the passoword for this user:");
		currentState += 1;
	} else {
		displayElement.innerText = loginScreen.concat("\n", "Invalid userid. Please try again.");
	}
}



function passwordState(userInput, displayElement, currentState) {
}


const states = [
	loginState
];
var currentState = 0;



function updateHeader() {
	const date = new Date();
	headerElement.innerText = "E-006 Mainframe Computer © EASYCOM Inc. ("
		+ (date.getMonth() + 1) + "/"
		+ date.getDate() + "/"
		+ date.getFullYear() + " T:"
		+ String(date.getHours()).padStart(2, "0") + ":"
		+ String(date.getMinutes()).padStart(2, "0") + ":"
		+ String(date.getSeconds()).padStart(2, "0") + ")";
}


function onCommandEntered() {
	states[currentState](userInputElement.value, displayElement, currentState);

	userInputElement.value = "";
}


addEventListener("keydown", (event) => {
	if (event.keyCode === ENTER_KEY_CODE) {
		onCommandEntered();
	}
});
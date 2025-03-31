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

function loginState(globalState, displayElement) {
	console.log("received userid " + globalState["userInput"]);
	if (globalState["userInput"] === "jlinmann") {
		displayElement.innerText = loginScreen.concat("\nUsername: jlinmann\nPlease enter the passoword for this user:");
		globalState["currentState"] += 1;
	} else {
		displayElement.innerText = loginScreen.concat("\n", "Invalid userid. Please try again.");
	}
}



function passwordState(globalState, displayElement) {
	console.log("received password " + globalState["userInput"]);
	if (globalState["userInput"] === "password") {
		displayElement.innerText = "Logging in...";
	} else {
		displayElement.innerText = loginScreen.concat("\n", "Invalid userid and password combination. Please try again.");
		globalState["currentState"] -= 1;
	}
}


const states = [
	loginState,
	passwordState
];
const globalState = {
	"currentState": 0,
	"userInput": ""
}



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
	states[globalState["currentState"]](globalState, displayElement);

	userInputElement.value = "";
	globalState["userInput"] = "";
}


addEventListener("keydown", (event) => {
	if (event.keyCode === ENTER_KEY_CODE) {
		globalState["userInput"] = userInputElement.value;
		onCommandEntered();
	}
});
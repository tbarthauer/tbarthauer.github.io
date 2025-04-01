const ENTER_KEY_CODE = 13;

const headerElement = document.getElementById("header");
const displayElement = document.getElementById("display");
const optionsListElement = document.getElementById("optionsList");
const fileTextElement = document.getElementById("fileText");
// const userInputElement = document.getElementById("userinput");


/* Text literals */
const email_1 = `FROM: Sally D.
TO: John L.

Hey, John!

We just finished the new regulator sample! Should be ready for you all to do your magic, starting tomorrow. Olivia wants to do some more tests before then (of course she does), but everything has looked great so far. Nothing exploded, at least!

Also, happy birthday! One of your department managers told me it was your birthday. Not that often you get to turn 50, so make sure you take a break!

All the best,
Sally Diedre
Department Chief, Engineering
Entliv Propulsion Solutions`;

const email_2 = `FROM: John L.
TO: Sally D.

Thanks, Sally. No breaks for me, unfortunately, but Helen took me out to dinner, so not all is wrong with the world. I’ve never been one to care much about my birthday. Not since I was a kid. Age just never felt that important, you know?

As for the regulator, there’s no big rush. We still haven’t cleaned up from Thursday down here.

Peace,
John Linmann
Department Chief, Research & Development
Entliv Propulsion Solutions`;

const email_3 = `FROM: John L.
TO: Alex M.

How’s it going? I heard you finished with the trial. How did it go? Can you get the file to me soon? I hate to rush you, but corporate wants a report before the big test. My bonus is riding on this!

Also, Helen is taking the kids up to the grandparents’ place for a few days and I’m having some of the guys over. Please join us—it’ll be so boring without you.

Peace,
John Linmann
Department Chief, Research & Development
Entliv Propulsion Solutions`;

const email_4 = `FROM: Frank L.
TO: All

Good afternoon,

Congratulations! Endliv had its best quarterly earnings report ever last week and it’s all thanks to the hard work and dedication of our employees. As a thank you, there will be free ice cream available in the lobby.

Sincerely,
Frank L. Lee
Chief Operating Officer
Entliv Propulsion Solutions`;

const email_5 = `FROM: John L.
TO: Alex M.

Hey, Al. We missed you the other night. I’m just writing because I’ve finished the report. I’m still waiting on your file, though, so if you could get those to me before tomorrow night, that would be great.

Peace,
John Linmann
Department Chief, Research & Development
Entliv Propulsion Solutions`;

const email_6 = `FROM: Sally D.
TO: John M.

Hey, John!

I’m sure you’re wondering where your regulator went! Well, Olivia found some sketchy results, so we’ve been running some more diagnostics. It seems like a simple fix, but we’ll need to run it through the full battery again. You know how these things are.

On a side note, have you had any mysterious departures lately? My lab supervisor didn’t show up today, and HR just said he was no longer with the company. It just seems strange. Didn’t even clean out his office. I’m going to see if HR will let me mail him his things.

Anyway, have a great day!

All the best,
Sally Diedre
Department Chief, Engineering
Entliv Propulsion Solutions`;

const email_7 = `FROM: John L.
TO: Sally D.

Don’t worry about it. We found a workaround that will be enough for the upcoming test. And I’m sure you’ll get it sorted out before too long, anyway.

Any fun weekend plans? I’ll just be home with the kids. I’ve got to give poor Helen a break.

Peace,
John Linmann
Department Chief, Research & Development
Entliv Propulsion Solutions`;

const email_8 = `FROM: amarkus6713@easycom.mail
TO: John L.

Here’s the file. Don’t do the test.

-A`;

const email_9 = `FROM: John L.
TO: amarkus6713@easycom.mail

Forget your password again? Lol.

And did you forget to attach the file? I’m not seeing it.`;

const email_10 = `FROM: Sally D.
TO: John L.

Excited for the test tomorrow! I’m buying your whole team a beer after.

All the best,
Sally Diedre
Department Chief, Engineering`;

const email_11 = `FROM: Frank L. Lee
TO: All

Good afternoon,

Unfortunately, there was an accident during testing today. All company buildings will close starting at 4:00 p.m. Do not talk to press or police. More information to come.

Sincerely,
Frank L. Lee
Chief Operating Officer
Entliv Propulsion Solutions`;

const email_12 = `FROM: amarkus6713@easycom.mail
TO: John L.

[Attached file]
ENCLOSED: The preliminary safety report for the Mark VII Vehicle Test Action

CONLUSION: Critical safety flaws, requiring immediate rectification. DO NOT CONDUCT.

FAILURE MODE DESCRIPTION: Rupture of the dorsal turbopump, igniting a pressurized O2 line. Resulting fire compromised the aft tank. Conflagration ensued.

TEST OPERATOR OUTCOMES
TEST OPERATOR #1: Full body burns, loss of vision and hearing, result fatal.
TEST OPERATOR #2: Overpressure damage separating arteries from the heart wall, result fatal.
TEST OPERATOR #3: Head severed by steel fragment from dorsal turbopump, severe burns, result fatal.`;

const emails = [
	email_1,
	email_2,
	email_3,
	email_4,
	email_5,
	email_6,
	email_7,
	email_8,
	email_9,
	email_10,
	email_11,
	email_12
];


const headerUpdateInterval = setInterval(updateHeader, 1000);


function updateHeader() {
	const date = new Date();
	headerElement.innerText = "E-006 Computer Terminal © EASYCOM Inc. ("
		+ date.toDateString() + " T:"
		+ String(date.getHours()).padStart(2, "0") + ":"
		+ String(date.getMinutes()).padStart(2, "0") + ":"
		+ String(date.getSeconds()).padStart(2, "0") + ")";
}


const subjectLines = [
	"New regulator & best birthday wishes",
	"Thanks for the update",
	"Update on the trial?",
	"Congratulations & Ice Cream Party",
	"Update on the trial? Please?",
	"Regulator delays",
	"No worries",
	"Here’s the file. Don’t...",
	"Forget your password again? ...",
	"Excited for the test! Beer!",
	"Closing early today",
	"[Attached file] ..."
];
const subjectDateOffsets = [6, 6, 5, 4, 2, 2, 2, 1, 1, 1, 0, 0];


const options = document.getElementsByClassName("option");
var selection = 0;

var inFile = false;
var receivedEmails = options.length - 2;
var openedEmails = 0;


function setSubjectLines() {
	for (i = 0; i < options.length - 2; i++) {
		const date = new Date(new Date().setDate(new Date().getDate() - subjectDateOffsets[i]));
		var subjectLine = "["
		+ date.toDateString()
		+ "]: " + subjectLines[i];
		/*
		options[i].innerText = "["
			+ (date.getMonth() + 1) + "/"
			+ date.getDate() + "/"
			+ date.getFullYear() + "] "
			+ subjectLines[i];
		*/
		if (i === 8) {
			subjectLine = "[DRAFT] " + subjectLine;
		}

		options[i].innerText = subjectLine;
	}
}


function enterSelection() {
	openedEmails += 1;

	if (openedEmails === 6) {
		receivedEmails += 1;
		option = document.getElementById("newEmailA");
		const date = new Date();
		option.innerText = "[NEW] ["
				+ String(date.getHours()).padStart(2, "0") + ":"
				+ String(date.getMinutes()).padStart(2, "0") + ":"
				+ String(date.getSeconds()).padStart(2, "0") + "]: "
				+ subjectLines[i];
		option.style.display = "block";
	}

	if (openedEmails >= options.length - 2) {
		receivedEmails += 1;
		option = document.getElementById("newEmailB");
		const date = new Date();
		option.innerText = "[NEW] ["
				+ String(date.getHours()).padStart(2, "0") + ":"
				+ String(date.getMinutes()).padStart(2, "0") + ":"
				+ String(date.getSeconds()).padStart(2, "0") + "]: "
				+ subjectLines[i];
		option.style.display = "block";
	}

	if (selection < emails.length) {
		document.getElementById("fileTextBody").innerText = emails[selection];
	}

	const prefix = options[selection].innerText.substring(0, 6);
	if (prefix === "[NEW] ") {
		options[selection].innerText = options[selection].innerText.slice(6);
	}

	optionsListElement.style.display = "none";
	fileTextElement.style.display = "block";
	inFile = true;
}


function goBack() {
	optionsListElement.style.display = "block";
	fileTextElement.style.display = "none";
	inFile = false;
}


function selectOption(index) {
	if (index >= 0 && index < receivedEmails) {
		options[selection].style.color = "#0f0";
		options[selection].style.background = "#000";

		selection = index;
		options[selection].style.color = "#000";
		options[selection].style.background = "#0f0";
	}
}


function moveSelectUp() {
	selectOption(selection - 1);
}


function moveSelectDown() {
	selectOption(selection + 1);
}


addEventListener("keydown", (event) => {
	if (event.keyCode === ENTER_KEY_CODE) {
		if (inFile) {
			goBack();
		} else {
			enterSelection();
		}
	}
});


addEventListener("keydown", (event) => {
	if (event.keyCode === 38) {
		event.preventDefault();
		moveSelectUp();
	} else if (event.keyCode === 40) {
		event.preventDefault();
		moveSelectDown();
	}
})


setSubjectLines();
selectOption(0);
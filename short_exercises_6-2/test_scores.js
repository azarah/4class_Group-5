"use strict"

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

const $ = selector => document.querySelector(selector);

const addScore = () => {
	// get user entries
	const name = $("#name").value.trim();         //CHANGES MADE:: added .trim() to Removes any extra spaces
	const score = parseInt($("#score").value, 10);      //CHANGES MADE:: added radix 10 makes your parsing reliable and clearer 
	let isValid = true;
    
    // check entries for validity
    if (name == "") {
		$("#name").nextElementSibling.textContent = "This field is required.";
		isValid = false;
	} else {
		$("#name").nextElementSibling.textContent = "";
	}
	
	if (isNaN(score) || score < 0 || score > 100) {
		$("#score").nextElementSibling.textContent = "You must enter a valid score.";
		isValid = false;
	} else {
		$("#score").nextElementSibling.textContent = "";
	}
	
	if (isValid) {
		names.push(name);      //CHANGES MADE:: replaced names[names.length] with push()
        scores.push(score);     //CHANGES MADE:: replaced scores[scores.length] with push()

	    $("#name").value = "";
		$("#score").value = "";
	}
    $("#name").focus();
};

//CHANGES MADE:: Added function to display scores
const displayScores = () => {
	const box = $("#scores_display");
	//Clears previous output
	box.value = "";
	for (let i = 0; i < names.length; i++) {
		box.value += `${names[i]} = ${scores[i]}\n`;     //append formatted output
	}
	$("name").focus();
};



document.addEventListener("DOMContentLoaded", () => {
	$("#add").addEventListener("click", addScore);
	
	//CHANGES MADE:: added event listener for Displaying Scores
	$("#display_scores").addEventListener("click", displayScores);    

	$("#name").focus();
});

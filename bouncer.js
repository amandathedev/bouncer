var age = Number(prompt("Can I see some ID? How old are you?"));

if(age < 0){
	alert("This is a fake ID.");
}

else if(age < 18){
	alert("Sorry, you are not old enough to come in. Come back when you are 19.");
}

else if(age === 21){
	alert("Happy 21st birthday! You get a free shot from Allison!");
}

else if(age >= 18 && age < 21){
	alert("Okay, you can come in, but you can't drink.");
}

else{
	alert("Come on in! Do you want some apple pie shots?");
}
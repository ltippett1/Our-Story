//Surprise button
const surpriseButton = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");

surpriseButton.addEventListener("click", function() {
    surpriseMessage.classList.remove("hidden");
    surpriseButton.textContent = "I love you ❤️";
    surpriseButton.disabled = true;
});

//Relationship Counter
    //5 as js starts from 0 not 1
const relationshipStart = new Date(2026, 5, 1);
const today = new Date();
const difference = today - relationshipStart;
const daysTogether = Math.floor(
    difference / (1000 * 60 * 60 * 24)
);

const counter = document.getElementById("relationshipCounter");

if (daysTogether >= 0) {
    counter.textContent = daysTogether + " days ❤️";
} 


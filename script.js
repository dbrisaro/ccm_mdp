let sectionTitleAbout = document.querySelector(".section-title-about");
let sectionTitleTeam = document.querySelector(".section-title-team");
let sectionTitleObjective = document.querySelector(".section-title-objective");

let sectionAbout = document.getElementById("section-about")
let sectionObjective = document.getElementById("section-objective")
let sectionTeam = document.getElementById("section-team")

let sectionParagraphAbout = document.querySelector(".section-paragraph-about")
let sectionParagraphTeam = document.querySelector(".section-paragraph-team")
let sectionParagraphObjective = document.querySelector(".section-paragraph-objective")

let button = document.getElementById("button")
let logo = document.getElementById("ccm-logo")

let footer = document.querySelector(".social-footer")

logo.style.transition = "all 2s ease"

sectionAbout.style.transition = "all 2s ease"
sectionObjective.style.transition = "all 2s ease"
sectionTeam.style.transition = "all 2s ease"
footer.style.transition = "all 2s ease"

sectionTitleAbout.style.transition = "all 2s ease"
sectionTitleTeam.style.transition = "all 2s ease"
sectionTitleObjective.style.transition = "all 2s ease"

sectionParagraphAbout.style.transition = "all 3s ease"
sectionParagraphTeam.style.transition = "all 3s ease"
sectionParagraphObjective.style.transition = "all 3s ease"

button.onclick = () => {
	button.style.animation = "1s movex forwards";
	logo.style.opacity = "1";
	
	sectionTitleAbout.style.cursor = "pointer"

	setTimeout(() => {
		sectionTitleAbout.onclick = () => {
			sectionParagraphAbout.style.color = "black";
		}
		sectionTitleAbout.style.color = "#00ADEA";
		sectionTitleObjective.style.cursor = "pointer"

	}, 2000)
	
	setTimeout(() => {
		sectionTitleObjective.onclick = () => {
			sectionParagraphObjective.style.color = "black";
			sectionObjective.style.backgroundColor = "#F6F6F6";
		}
		sectionTitleObjective.style.color = "#00ADEA";
		sectionTitleTeam.style.cursor = "pointer"
	}, 3000)

	setTimeout(() => {
		sectionTitleTeam.onclick = () => {
			sectionParagraphTeam.style.color = "black";		
			sectionTeam.style.backgroundColor = "#F6F6F6";
	   }
		sectionTitleTeam.style.color = "#00ADEA";
	}, 4000)

	setTimeout(() => {

		footer.style.opacity = "1";

	}, 5000)

}


//~~~~~~~~~~~~~~~~~~'Control' class buttons~~~~~~~~~~~~~~~~~~~~~~
var studyButton = document.querySelector('.study-btn')
var meditateButton = document.querySelector('.meditate-btn')
var exerciseButton = document.querySelector('.exercise-btn')
var startActivityButton = document.querySelector('.start-btn')
//~~~~~~~~~~~~~~~~~~~'Sections'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var homePage = document.querySelector('.main-page')
var currentActivityPage = document.querySelector('.currentActivity-page')
var completedActivityPage = document.querySelector('.completedActivity-page')
var hidden = document.querySelector('.hidden')
//~~~~~~~~~~~~~~~'User Inputs'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var currentGoal = document.querySelector('.goal')
var currentMinutes = document.querySelector('.minutes')
var currentSeconds = document.querySelector('.seconds')
//~~~~~~~~~~~~~~~'Event Listeners'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
studyButton.addEventListener('click', colorStudyBtn);
// startActivityButton.addEventListener('click', goToCurrentActivityPage);
//~~~~~~~~~~~~~~~'Event Handlers'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ITERATION 2 - BUTTON COLORS ON click Event

function colorStudyBtn(event) {
  studyButton.innerHTML = `<img src="./assets/study-active.svg"/>
  <h4 class="study">Study</h4>`;
  }
startActivityButton.addEventListener('click', activateStartButton)
//~~~~~~~~~~~~~~~'Event Handlers'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function activateStartButton(){
  hideHomePage();
  createNewActivity();
  console.log('this is working')
}



/* this is for iteration 3
function handleClick(event) {
  if (event.target.className === '.study-btn') {
    displayCurrentActivityPage();
    displayStudyActivityProperties();
  };
  if (event.target.className === '.meditate-btn'){
    displayCurrentActivityPage();
    displayMeditateActivityProperties();
  };
  if (event.target.className === '.exercise-btn'){
    displayCurrentActivityPage();
    displayExerciseActivityProperties();
  }
  //if (condition === true && event.target.id === 'go-back-button'){
    //displayPreviousPage();
  }
*/


//~~~~~~~~~~The one source of truth~~~~~~~~~~~~~~~ /
var currentActivity
var completedActivities
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

function createNewActivity(){
  currentActivity = new Activity
}
/* handling input from forms in ROMCOM, could be useful for Activity function
function displayMyCover() {
  coverImage.src = userCoverInput.value
  return coverImage.src;
*/
//~~~~~~~~~~~Navigation~~~~~~~~~~~~~~~~~~~~~~~//
function hideHomePage(){
  homePage.classList.add('hidden')
}

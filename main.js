//~~~~~~~~~~~~~~~~~~'Control' class buttons~~~~~~~~~~~~~~~~~~~~~~
var studyButton = document.querySelector('.study-btn')
var meditateButton = document.querySelector('.meditate-btn')
var exerciseButton = document.querySelector('.exercise-btn')
var startActivityButton = document.querySelector('.start-btn')
//~~~~~~~~~~~~~~~~~~~'Sections'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var homePage = document. querySelector('.main-page')
var currentActivityPage = document.querySelector('.currentActivity-page')
var completedActivityPage = document.querySelector('.completedActivity-page')
//add hidden sections somewhere like in ROMCOM//
//~~~~~~~~~~~~~~~'Event Listeners'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
startActivityButton.addEventListener('click', goToCurrentActivity-page)
//~~~~~~~~~~~~~~~'Event Handlers'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

function goToCurrentActivityPage () {
  currentActivity = new Activity(
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = false;
    this.id = id;
  )
  startTimer(){

  }
  markComplete(){

  }
  saveToStorage(){

  }
}
function displayStudyActivityProperties(){
  this.category = 'Study',
  this.description = message.value;
  this.minutes = minutes.value;
  this.seconds = seconds.value;
  this.completed = false;
  this.id = ???
}

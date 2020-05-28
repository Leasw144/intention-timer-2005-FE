//~~~~~~~~~~~~~~~~~~'Control' class buttons~~~~~~~~~~~~~~~~~~~~~~
var studyButton = document.querySelector('.study-btn')
var meditateButton = document.querySelector('.meditate-btn')
var exerciseButton = document.querySelector('.exercise-btn')
//~~~~~~~~~~~~~~~~~~~'Sections'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var homePage = document. querySelector('.main-page')
var currentActivityPage = document.querySelector('.currentActivity-page')
var completedActivityPage = document.querySelector('.completedActivity-page')
//~~~~~~~~~~~~~~~'Event Listeners'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
selectStudyButton.addEventListener('click', goToCurrentActivity-page)
//~~~~~~~~~~~~~~~'Event Handlers'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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

function goToCurrentActivitySection () {
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

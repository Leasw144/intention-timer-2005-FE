//~~~~~~~~~~~~~~~~~~'Control' class buttons~~~~~~~~~~~~~~~~~~~~~~
var studyButton = document.querySelector('.study-btn')
var meditateButton = document.querySelector('.meditate-btn')
var exerciseButton = document.querySelector('.exercise-btn')
var startActivityButton = document.querySelector('.start-btn')
var startTimerButton = document.querySelector('.start-timer')
//~~~~~~~~~~~~~~~~~~~'Sections'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var homePage = document.querySelector('.main-page')
var currentActivityPage = document.querySelector('.currentActivity-page')
var completedActivityPage = document.querySelector('.completedActivity-page')
var sectionLeft = document.querySelector('.section-left')
var currentSectionLeft = document.querySelector('.current-section-left')
var hidden = document.querySelector('.hidden')
//~~~~~~~~~~~~~~~'User Inputs'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var currentGoal = document.querySelector('.goal')
var currentMinutes = document.querySelector('.minutes')
var currentSeconds = document.querySelector('.seconds')
//~~~~~~~~~~~~~~~'Event Listeners'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
studyButton.addEventListener('click', colorStudyBtn);
exerciseButton.addEventListener('click', colorExerciseBtn);
meditateButton.addEventListener('click', colorMeditateBtn);
startActivityButton.addEventListener('click', activateStartButton)
//~~~~~~~~~~~~~~~'Event Handlers'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ITERATION 2 - BUTTON COLORS ON click Even

function colorStudyBtn(event) {
  studyButton.innerHTML = `<img src="./assets/study-active.svg"/>
  <h4 class="study">Study</h4>`;
  meditateButton.innerHTML = `<img src="./assets/meditate.svg"/>
  <h4 class="text-main">Meditate</h4>`;
  exerciseButton.innerHTML = `<img src="./assets/exercise.svg"/>
  <h4 class="text-main">Exercise</h4>`;
  }
function colorExerciseBtn(event) {
  exerciseButton.innerHTML = `<img src="./assets/exercise-active.svg"/>
  <h4 class="exercise">Exercise</h4>`;
  studyButton.innerHTML = `<img src="./assets/study.svg"/>
  <h4 class="text-main">Study</h4>`;
  meditateButton.innerHTML = `<img src="./assets/meditate.svg"/>
  <h4 class="text-main">Meditate</h4>`;
  }
function colorMeditateBtn(event) {
  meditateButton.innerHTML = `<img src="./assets/meditate-active.svg"/>
  <h4 class="meditate">Meditate</h4>`;
  studyButton.innerHTML = `<img src="./assets/study.svg"/>
  <h4 class="text-main">Study</h4>`;
  exerciseButton.innerHTML = `<img src="./assets/exercise.svg"/>
  <h4 class="text-main">Exercise</h4>`
}

//~~~~~~~~~~~~~~~'Event Handlers'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function activateStartButton(){
  if (currentGoal !== null && currentMinutes !== null && currentSeconds !== null && (studyButton.innerHTML === `<img src="./assets/study-active.svg"/><h4 class="study">Study</h4>` || exerciseButton.innerHTML === `<img src="./assets/exercise-active.svg"/> <h4 class="exercise">Exercise</h4>` || meditateButton.innerHTML ===`<img src="./assets/meditate-active.svg"/> <h4 class="meditate">Meditate</h4>`)){
  createNewActivity();
  renderCurrentActivity();
  console.log('this is working')
} else {
  alert ('You need to complete all four forms before continuing!')
}
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
var completedActivities = []; 
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
function createNewActivity() {
  currentActivity = new Activity (
    'meditate',
    currentGoal.value,
    currentMinutes.value,
    currentSeconds.value,
  )
  console.log(currentActivity)
}

function renderCurrentActivity(){
  createNewActivity();
    sectionLeft.innerHTML =  `
      <section class="text-main current-activity-page">
        <h2 class="new-activity-title">Current Activity</h2>
        <div class="container">
          <h2 class="description"> ${currentActivity.category}</h2>
          <h1>${currentActivity.description}
          <div class="timer-container">
            <p id="timer"> ${currentActivity.minutes} min : ${currentActivity.seconds} secs</p>
          </div>
          <button type='button' class='start-timer text-main ${currentActivity.category}'>start</button>
        </div>
      </section>`
}
/* handling input from forms in ROMCOM, could be useful for Activity function
function displayMyCover() {
  coverImage.src = userCoverInput.value
  return coverImage.src;
*/
//~~~~~~~~~~~Navigation~~~~~~~~~~~~~~~~~~~~~~~//
function hideHomePage(){
  sectionLeft.classList.add('hidden')
  currentSectionLeft.classList.remove('hidden')
}

//~~~~~~~~~~~~~~~~~~'Control' class buttons~~~~~~~~~~~~~~~~~~~~~~
var studyButton = document.querySelector('.study-btn')
var meditateButton = document.querySelector('.meditate-btn')
var exerciseButton = document.querySelector('.exercise-btn')
var startActivityButton = document.querySelector('.start-btn')
var startTimerButton = document.querySelector('.start-timer')
var categoryBoxes = document.querySelector('.category-boxes')
var eachButton = document.querySelector('.choice-button')
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
// categoryBoxes.addEventListener('click', activateCategory)
studyButton.addEventListener('click', colorStudyBtn);
exerciseButton.addEventListener('click', colorExerciseBtn);
meditateButton.addEventListener('click', colorMeditateBtn);
startActivityButton.addEventListener('click', activateStartButton)
document.addEventListener('click', function (event) {
  if (event.target.matches('.study-btn') || event.target.matches('study-button') || event.target.matches('h4')) {
    console.log(`study button has been pressed`)
    colorStudyBtn();
  } else if (event.target.matches('.meditate-btn') || event.target.matches('meditate-button') || event.target.matches('h4')) {console.log(`study button has been pressed`)
    colorMeditateBtn();
  } else if (event.target.matches('.exercise-btn') || event.target.matches('exercise-button') || event.target.matches('h4')) {

    console.log(`study button has been pressed`)
    colorExerciseBtn();
  }
}, false);

//~~~~~~~~~~~~~~~'Event Handlers'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ITERATION 2 - BUTTON COLORS ON click Even
function activateCategory(event) {
  if (event.target.closest('.study-btn')) {
    console.log(`study button has been pressed`)
    colorStudyBtn();
  } else if (event.target.closest('.meditate-btn')) {
    colorMeditateBtn();
  } else if (event.target.closest('.exercise-btn')) {
  console.log(`study button has been pressed`)
  colorExerciseBtn();
  }
}

function colorStudyBtn(event) {
  studyButton.innerHTML = `<img src="./assets/study-active.svg"/>
  <span class="study">Study</span>`;
  meditateButton.innerHTML = `<img src="./assets/meditate.svg"/>
  <span class="text-main">Meditate</span>`;
  exerciseButton.innerHTML = `<img src="./assets/exercise.svg"/>
  <span class="text-main">Exercise</span>`;
  studyButton.classList.add('study')
  meditateButton.classList.remove('meditate')
  exerciseButton.classList.remove('exercise')
  }

function colorExerciseBtn(event) {
  exerciseButton.innerHTML = `<img src="./assets/exercise-active.svg"/>
  <span class="exercise">Exercise</span>`;
  studyButton.innerHTML = `<img src="./assets/study.svg"/>
  <span class="text-main">Study</span>`;
  meditateButton.innerHTML = `<img src="./assets/meditate.svg"/>
  <span class="text-main">Meditate</span>`;
  exerciseButton.classList.add('exercise')
  meditateButton.classList.remove('meditate')
  studyButton.classList.remove('study')
  }

function colorMeditateBtn(event) {
  meditateButton.innerHTML = `<img src="./assets/meditate-active.svg"/>
  <span class="meditate">Meditate</span>`;
  studyButton.innerHTML = `<img src="./assets/study.svg"/>
  <span class="text-main">Study</span>`;
  exerciseButton.innerHTML = `<img src="./assets/exercise.svg"/>
  <span class="text-main">Exercise</span>`;
  meditateButton.classList.add('meditate')
  studyButton.classList.remove('study')
  exerciseButton.classList.remove('exercise')
}

//~~~~~~~~~~~~~~~'Event Handlers'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function activateStartButton(){
  createNewActivity()
    if(
    currentActivity.category == undefined && currentActivity.description == undefined &&
    currentActivity.minutes == undefined && currentActivity.seconds == undefined){
  alert ('You need to complete all four forms before continuing!')
    } else {
    createNewActivity()
    renderCurrentActivity();
    console.log('this is working')
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
// use an id 

//~~~~~~~~~~The one source of truth~~~~~~~~~~~~~~~ /
var currentActivity
var completedActivities = [];
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
function checkActiveCategory() {
  var btnArray = document.querySelectorAll(".choice-button");
  console.log('checkActiveCategory', btnArray)
  for(var i = 0; i < btnArray.length; i++) {
    console.log(btnArray[i].innerHTML)
    if(btnArray[i].innerHTML.includes("active")) {
      console.log('checkActiveCategory is working')
    }
  }
}

function createNewActivity() {
  currentActivity = new Activity (
    // 'meditate', if this btn or this btn or this btn has the active property
    checkActiveCategory(),
    currentGoal.value,
    currentMinutes.value,
    currentSeconds.value,
  )
  return currentActivity
}

function renderCurrentActivity(){
  createNewActivity();
    sectionLeft.innerHTML =  `
      <section class="text-main current-activity-page">
        <h2 class="new-activity-title">Current Activity</h2>
        <div class="container">
          <h1 class="current-activity-description">${currentActivity.description}</h1>
          <div class="timer-container">
            <p id="timer"> ${currentActivity.minutes}:${currentActivity.seconds}</p>
          </div>
          <button type='button' class="start-timer text-main"${currentActivity.category}>start</button>
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

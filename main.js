//~~~~~~~~~~~~~~~~~~'Control' class buttons~~~~~~~~~~~~~~~~~~~~~~
var studyButton = document.querySelector('.study-btn')
var meditateButton = document.querySelector('.meditate-btn')
var exerciseButton = document.querySelector('.exercise-btn')
var startActivityButton = document.querySelector('.start-activity-area')
var startTimerButton = document.querySelector('.start-timer')
var eachButton = document.querySelector('.choice-button')
var logActivityButton = document.querySelector('.log-activity-button')
//~~~~~~~~~~~~~~~~~~~'Sections'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var homePage = document.querySelector('.main-page')
var currentActivityPage = document.querySelector('.currentActivity-page')
var completedActivityPage = document.querySelector('.completedActivity-page')
var sectionLeft = document.querySelector('.section-left')
var currentSectionLeft = document.querySelector('.current-section-left')
var hidden = document.querySelector('.hidden')
var secondLine = document.querySelector('.second-line')
//~~~~~~~~~~~~~~~'User Inputs'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var currentGoal = document.querySelector('.goal')
var currentMinutes = document.querySelector('.minutes')
var currentSeconds = document.querySelector('.seconds')
//~~~~~~~~~~~~~~~'Event Listeners'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
sectionLeft.addEventListener('click', activateCategory);
secondLine.addEventListener('onKeyDown', checkInput);
//~~~~~~~~~~~~~~~'Event Handlers'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function activateCategory(event) {
  if (event.target.closest('.study-btn')) {
    console.log(`study button has been pressed`)
    colorStudyBtn();
  } else if (event.target.closest('.meditate-btn')) {
    colorMeditateBtn();
  } else if (event.target.closest('.exercise-btn')) {
  colorExerciseBtn();
} else if (event.target.closest('.start-timer')) {
  currentActivity.startTimer()
} else if (event.target.closest('.start-activity-button')){
  activateStartButton();
}
}

// function startCircleButton() {
//   if(event.target.closest('.start-timer')) {
//     currentActivity.startTimer()
//   }
// }
//~~~~~~~~~~~~~~~~~~~MAIN FUNCTIONS~~~~~~~~~~~~~~~~~~~~~//

//function logActivityButton() {
//if(event.target.closest('.log-activity-button')) {
//console.log('the log activity button is working')
//}

function checkInput(event){
  if (event.which !== 8 && event.which !== 0 && event.which < 48 || event.which > 57) {
    event.preventDefault()
  }
}

function colorStudyBtn() {
  studyButton.innerHTML = `<img src="./assets/study-active.svg"/>
  <span class="study">Study</span>`;
  meditateButton.innerHTML = `<img src="./assets/meditate.svg"/>
  <span class="text-main-color">Meditate</span>`;
  exerciseButton.innerHTML = `<img src="./assets/exercise.svg"/>
  <span class="text-main-color">Exercise</span>`;
  studyButton.classList.add('study')
  studyButton.classList.add('active')
  meditateButton.classList.remove('meditate')
  exerciseButton.classList.remove('exercise')
}

function colorExerciseBtn() {
  exerciseButton.innerHTML = `<img src="./assets/exercise-active.svg"/>
  <span class="exercise">Exercise</span>`;
  studyButton.innerHTML = `<img src="./assets/study.svg"/>
  <span class="text-main-color">Study</span>`;
  meditateButton.innerHTML = `<img src="./assets/meditate.svg"/>
  <span class="text-main-color">Meditate</span>`;
  exerciseButton.classList.add('exercise')
  exerciseButton.classList.add('active')
  meditateButton.classList.remove('meditate')
  studyButton.classList.remove('study')
  }

function colorMeditateBtn() {
  meditateButton.innerHTML = `<img src="./assets/meditate-active.svg"/>
  <span class="meditate">Meditate</span>`;
  studyButton.innerHTML = `<img src="./assets/study.svg"/>
  <span class="text-main-color">Study</span>`;
  exerciseButton.innerHTML = `<img src="./assets/exercise.svg"/>
  <span class="text-main-color">Exercise</span>`;
  meditateButton.classList.add('meditate')
  meditateButton.classList.add('active')
  studyButton.classList.remove('study')
  exerciseButton.classList.remove('exercise')
}
//~~~~~~~~~~~~~~~'Event Handlers'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function activateStartButton(){
  var errorCheckResult = checkError()
  if(errorCheckResult === false) {
      createNewActivity()
      renderCurrentActivity();
      console.log('this is working')
    }
}

function checkError() {
  var checkBox = checkActiveCategory();
  var categoryBoxes = document.querySelector('.category-boxes')
  if (currentGoal.value === '') {
    console.log(`currentGoals is working!!!!!`)
    currentGoal.insertAdjacentHTML('afterend', `<span class='error'><img src='./assets/warning.svg'/>You need a description</span>`)
    return true
  } else if (currentMinutes.value === '' || currentSeconds.value === '') {
    secondLine.insertAdjacentHTML(`afterend`, `<span class='error' display='flex'><img src='./assets/warning.svg'/>A time is needed</span>`)
    return true
  } else if(checkBox === false) {
    categoryBoxes.insertAdjacentHTML(`afterend`, `<span class='error' display='flex'><img src='./assets/warning.svg'/>A category is needed</span>`)
    return true
  }
  return false
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
function checkActiveCategory() {
  var btnArray = document.querySelectorAll(".choice-button");
  for(var i = 0; i < btnArray.length; i++) {
    console.log(btnArray[i].innerHTML)
    if(btnArray[i].innerHTML.includes("active")) {
      console.log('checkActiveCategory is working')
      return true
    }
  }
  return false
}

function determineCategory() {
  if (studyButton.classList.contains('active')) {
    return `study`
  } else if(exerciseButton.classList.contains('active')) {
    return `exercise`
  } else if (meditateButton.classList.contains('active'))
  return `meditate`
}

function createNewActivity() {
  currentActivity = new Activity (
    determineCategory(),
    currentGoal.value,
    currentMinutes.value,
    currentSeconds.value,
  )
  return currentActivity
}

function renderCurrentActivity(){
  createNewActivity();
    sectionLeft.innerHTML =  `
      <section class="text-main-color current-activity-page">
        <h2 class="new-activity-title">Current Activity</h2>
        <div class="container">
          <h1 class="current-activity-description">${currentActivity.description}</h1>
          <div class="timer-container">
            <p id="timer"> ${currentActivity.minutes}:${currentActivity.seconds < 10 ? '0' + currentActivity.seconds : currentActivity.seconds}</p>
          </div>
          <button type='button' class="start-timer text-main-color ${currentActivity.category}">start</button>
        </div>
      </section>`
}

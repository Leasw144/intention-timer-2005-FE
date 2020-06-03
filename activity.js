
class Activity {
  constructor(category, description, minutes, seconds) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = false;
    this.id = Date.now();
  }

  startTimer(){
    var timer = document.querySelector('#timer');
    timer.setAttribute('disabled', false)
    var timeLeft = setInterval(function() {
      timer.innerHTML = `${currentActivity.minutes}:${currentActivity.seconds < 10 ? '0' + currentActivity.seconds : currentActivity.seconds}`
      currentActivity.seconds--
      if(currentActivity.seconds < 0) {
        currentActivity.seconds = 59
        currentActivity.minutes--
      } else if(currentActivity.minutes < 0) {
        clearInterval(timeLeft)
        currentActivity.markComplete()
      }

    }, 1000)
  }

  markComplete(){
    this.completed = true;
    sectionLeft.innerHTML = `
      <h2 class="new-activity-title">Current Activity</h2>
      <div class="container">
        <h1 class="current-activity-description">${currentActivity.description}</h1>
        <div class="timer-container">
          <p id="timer"> 0:00 </p>
        </div>
      <div>
        <button type='button' class="start-timer text-main-color ${currentActivity.category}">COMPLETED!!</button>
      </div>
      <div class="logActivityContainer">
        <button type='button' class='LogActivityButton' text-main-color> Log Activity </button>
      <div>`
  }

  saveToStorage(){
    if (this.completed = true){
    completedActivities.push(currentActivity);
    for (let i = 0; i < completedActivities.length; i++){
    completedActivities.innerHTML = `<div class="logged-card">
      <h3 class="category-card-title ${this.category}"></h3>
      <p class="logged-time"> ${this.minutes} min : ${this.seconds} sec </p>
      <p class="logged-activity">${this.description}</p>
    </div>`
      }
    }
  }
}

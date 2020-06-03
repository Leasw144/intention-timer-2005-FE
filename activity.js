
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
        console.log(`!!!`)
        clearInterval(timeLeft)
        currentActivity.markComplete()
      }
      
    }, 1000) 
  console.log(`than umm uh I guess we completely stop the clock`)
  }

  markComplete(){
    alert("Congratulations!");
    this.completed = true;
    timer.innerHTML = `0:00`
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


// convert number of minutes into Seconds
// set total number of seconds = to num var
// create a for loop that calculates time per second,
// for each second subtracted,
}

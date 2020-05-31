
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
    var counter = 0
    var timeLeft = ((this.minutes) + (this.seconds))
    function timeIt(){
      counter++;
      console.log(timeLeft-counter)
      timer.innerHTML = (timeLeft-counter)
    }
    setInterval(timeIt, 1000);
  }

  markComplete(){

  }

  saveToStorage(){

  }


// convert number of minutes into Seconds
// set total number of seconds = to num var
// create a for loop that calculates time per second,
// for each second subtracted,
}

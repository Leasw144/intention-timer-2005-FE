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

  }

  markComplete(){

  }

  saveToStorage(){

  }

}

// convert number of minutes into Seconds
// set total number of seconds = to num var
// create a for loop that calculates time per second,
// for each second subtracted,

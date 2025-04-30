//? 1. What is the difference between setTimeout and setInterval ?
//!  Answer:
"setTimeout runs a function once after a delay." 
"etInterval` runs a function repeatedly at a set time interval."
setTimeout(() => {
    console.log("Runs once after 2 seconds");
  }, 2000);
  
  setInterval(() => {
    console.log("Runs every 2 seconds");
  }, 2000);  
import clock from "clock";
import document from "document";
import * as util from "../common/utils";
import * as messaging from "messaging";
import { preferences } from "user-settings";

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const myHour = document.getElementById("myHour");
const myHour2 = document.getElementById("myHour2");
const myMin = document.getElementById("myMin");
const myMin2 = document.getElementById("myMin2");
const myDay = document.getElementById("myDay");
const myDate = document.getElementById("myDate");
let myBG = document.getElementById("myBG");

//get settings detail
messaging.peerSocket.onmessage = (evt) => updateBackground(evt);
  

//update clock backgroung
function updateBackground(evt)
{
  //set background image based on selected setting
  let selectedColor = evt.data.value;
  if(selectedColor == "salmon")
    {
      myBG.href = "ClockFaceRose.jpg";
    }
  else
    if(selectedColor == "dodgerblue")
      {
        myBG.href = "ClockFaceBlue.jpg";
      }
  else
    if(selectedColor == "gold")
      {
        myBG.href = "ClockFaceYellow.jpg";
      }
  else
    if(selectedColor == "silver")
      {
        myBG.href = "ClockFaceSilver.jpg";
      }
}

//update clock face
function updateClock()
{
  let currentDay = new Date();
  let hours = currentDay.getHours();
  let mins = util.zeroPad(currentDay.getMinutes());
  let date = currentDay;  
  let day = currentDay.getDay();
  let year= currentDay.getFullYear();
  
  //check user preference
  let pref = preferences.clockDisplay;
  
  if(pref == "12h")
  {
    //convert hours to 12 hr format
    if(hours>12)
    {
      hours = hours - 12;
    }
  }
  
  hours = util.zeroPad(hours);
  hours = hours+"";
  mins = mins+"";
  // Update time and date
  myHour.text = hours.substring(0,1);
  myHour2.text = hours.substring(1,2);
  myMin.text = mins.substring(0,1);
  myMin2.text = mins.substring(1,2);
  myDate.text = util.zeroPad(currentDay.getDate())+" "+util.monthName[currentDay.getMonth()]+" "+year;
  myDay.text = util.dayName[day];
  
}

// Update the <text> element every tick with the current time
clock.ontick = (evt) => updateClock();

updateClock();
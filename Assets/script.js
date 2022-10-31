const store = window.localStorage;

const container = $(".container");

const now = moment();

const Time = { text: moment().format("h:00 A"), hour: moment().hour() };

$("#day").text(now.format("dddd MMMM DD "));

var currentTime=moment().hour();
var allTimeBlocks = document.getElementsByClassName('hour')

for (var i=0;i<allTimeBlocks.length; i++) {
  // if timeblock < current time
  //give that timeblock the past color
  // ParseInt() takes a number and converts it to a string
  if (parseInt(allTimeBlocks[i].id) < currentTime) {
    var textArea = allTimeBlocks[i].nextElementSibling
    textArea.classList.add( 'past')
  }
  else if (parseInt(allTimeBlocks[i].id) == currentTime) {
    var textArea = allTimeBlocks[i].nextElementSibling
    textArea.classList.add( 'present')
  }
  else {
    var textArea = allTimeBlocks[i].nextElementSibling
    textArea.classList.add( 'future')
  }
}
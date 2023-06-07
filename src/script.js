let tokyoTime = moment().tz("Asia/Tokyo").format("dddd, MMMM, D, YYYY H:m:s");
let tokyoElement = document.querySelector("#tokyo");
tokyoElement.innerHTML = tokyoTime;

let today = moment().format("dddd, MMMM Do, YYYY");
let todayElement = document.querySelector("#today");
todayElement.innerHTML = `Today is ${today}`;

let tomorrow = moment().add(1, "day").format("dddd, MMMM Do, YYYY");
let tomorrowElement = document.querySelector("#tomorrow");
tomorrowElement.innerHTML = `Tomorrow will be ${tomorrow}`;

let tenYearsFromNow = moment()
  .add(10, "year")
  .format("dddd, MMMM Do, YYYY H:mm:s");
let tenYearsElement = document.querySelector("#tenYearsFromNow");
tenYearsElement.innerHTML = `10 years from now, it will be ${tenYearsFromNow}`;

let localTimeZone = moment.tz.guess();
let localElement = document.querySelector("#local");
localElement.innerHTML = `Your current Time Zone is ${localTimeZone} and the current time is ${moment().format(
  "H:m"
)}`;

let honoluluDate = moment()
  .tz("Pacific/Honolulu")
  .format("dddd, MMMM D, YYYY h:m A");
let honoluluElement = document.querySelector("#honolulu");
honoluluElement.innerHTML = `It is ${honoluluDate} in Honolulu, Hawaii`;

let parisDate = moment()
  .tz("Europe/Paris")
  .add(10, "years")
  .format("dddd, MMMM D, YYYY h:m A");
let parisElement = document.querySelector("#parisTen");
parisElement.innerHTML = `10 years from now, it will be ${parisDate} in Paris, France`;

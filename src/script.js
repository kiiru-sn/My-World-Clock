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

//<br />
//     <div id="tokyo"></div>
//     <br />
//     <div id="today"></div>
//     <br />
//     <div id="tomorrow"></div>
//     <br />
//     <div id="tenYearsFromNow"></div>

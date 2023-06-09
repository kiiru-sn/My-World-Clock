function updateTime() {
  //San Diego
  let sanDiegoElement = document.querySelector("#san-diego");
  if (sanDiegoElement) {
    let sanDiegoDateElement = sanDiegoElement.querySelector(".date");
    let sanDiegoTimeElement = sanDiegoElement.querySelector(".time");
    let sanDiegoTime = moment().tz("America/Los_Angeles");

    sanDiegoDateElement.innerHTML = sanDiegoTime.format("MMMM Do, YYYY");
    sanDiegoTimeElement.innerHTML = sanDiegoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Stockholm
  let stockholmElement = document.querySelector("#stockholm");
  if (stockholmElement) {
    let stockholmDateElement = stockholmElement.querySelector(".date");
    let stockholmTimeElement = stockholmElement.querySelector(".time");
    let stockholmTime = moment().tz("Europe/Stockholm");

    stockholmDateElement.innerHTML = stockholmTime.format("MMMM Do, YYYY");
    stockholmTimeElement.innerHTML = stockholmTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //Dublin
  let dublinElement = document.querySelector("#dublin");
  if (dublinElement) {
    let dublinDateElement = dublinElement.querySelector(".date");
    let dublinTimeElement = dublinElement.querySelector(".time");
    let dublinTime = moment().tz("Europe/Dublin");

    dublinDateElement.innerHTML = dublinTime.format("MMMM Do, YYYY");
    dublinTimeElement.innerHTML = dublinTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small> ${cityTime.format("A")}</small></div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);

//let tokyoTime = moment().tz("Asia/Tokyo").format("dddd, MMMM, D, YYYY H:m:s");
//let tokyoElement = document.querySelector("#tokyo");
//tokyoElement.innerHTML = tokyoTime;

//let today = moment().format("dddd, MMMM Do, YYYY");
//let todayElement = document.querySelector("#today");
//todayElement.innerHTML = `Today is ${today}`;

//let tomorrow = moment().add(1, "day").format("dddd, MMMM Do, YYYY");
//let tomorrowElement = document.querySelector("#tomorrow");
//tomorrowElement.innerHTML = `Tomorrow will be ${tomorrow}`;

//let tenYearsFromNow = moment()
// .add(10, "year")
// .format("dddd, MMMM Do, YYYY H:mm:s");
//let tenYearsElement = document.querySelector("#tenYearsFromNow");
//tenYearsElement.innerHTML = `10 years from now, it will be ${tenYearsFromNow}`;

//<br />
//     <div id="tokyo"></div>
//     <br />
//     <div id="today"></div>
//     <br />
//     <div id="tomorrow"></div>
//     <br />
//     <div id="tenYearsFromNow"></div>

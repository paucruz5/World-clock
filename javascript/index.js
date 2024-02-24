function updateTime() {
  let cuiaba = document.querySelector("#cuiaba");
  if (cuiaba) {
    let cuiabaDate = cuiaba.querySelector(".date");
    let cuiabaTime = cuiaba.querySelector(".time");
    let cuiabaDT = moment().tz("America/Cuiaba");

    cuiabaDate.innerHTML = cuiabaDT.format("MMMM Do YYYY");
    cuiabaTime.innerHTML = cuiabaDT.format("h:mm:ss [<small>]A[</small>]");
  }

  let merida = document.querySelector("#merida");
  if (merida) {
    let meridaDate = merida.querySelector(".date");
    let meridaTime = merida.querySelector(".time");
    let meridaDT = moment().tz("America/Merida");

    meridaDate.innerHTML = meridaDT.format("MMMM Do YYYY");
    meridaTime.innerHTML = meridaDT.format("h:mm:ss [<small>]A[</small>]");
  }

  let lagos = document.querySelector("#lagos");
  if (lagos) {
    let lagosDate = lagos.querySelector(".date");
    let lagosTime = lagos.querySelector(".time");
    let lagosDT = moment().tz("Africa/Lagos");

    lagosDate.innerHTML = lagosDT.format("MMMM Do YYYY");
    lagosTime.innerHTML = lagosDT.format("h:mm:ss [<small>]A[</small>]");
  }

  let athens = document.querySelector("#athens");
  if (athens) {
    let athensDate = athens.querySelector(".date");
    let athensTime = athens.querySelector(".time");
    let athensDT = moment().tz("Europe/Athens");

    athensDate.innerHTML = athensDT.format("MMMM Do YYYY");
    athensTime.innerHTML = athensDT.format("h:mm:ss [<small>]A[</small>]");
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
      <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
       <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
      </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelection = document.querySelector("#city");

citiesSelection.addEventListener("change", updateCity);

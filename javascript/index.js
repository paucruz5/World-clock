function updateTime() {
  let cuiaba = document.querySelector("#cuiaba");
  let cuiabaDate = cuiaba.querySelector(".date");
  let cuiabaTime = cuiaba.querySelector(".time");
  let cuiabaDT = moment().tz("America/Cuiaba");

  cuiabaDate.innerHTML = cuiabaDT.format("MMMM Do YYYY");
  cuiabaTime.innerHTML = cuiabaDT.format("h:mm:ss [<small>]A[</small>]");

  let tizimin = document.querySelector("#tizimin");
  let tiziminDate = tizimin.querySelector(".date");
  let tiziminTime = tizimin.querySelector(".time");
  let tiziminDT = moment().tz("America/Merida");

  tiziminDate.innerHTML = tiziminDT.format("MMMM Do YYYY");
  tiziminTime.innerHTML = tiziminDT.format("h:mm:ss [<small>]A[</small>]");

  let lagos = document.querySelector("#lagos");
  let lagosDate = lagos.querySelector(".date");
  let lagosTime = lagos.querySelector(".time");
  let lagosDT = moment().tz("Africa/Lagos");

  lagosDate.innerHTML = lagosDT.format("MMMM Do YYYY");
  lagosTime.innerHTML = lagosDT.format("h:mm:ss [<small>]A[</small>]");

  let lesbos = document.querySelector("#lesbos");
  let lesbosDate = lesbos.querySelector(".date");
  let lesbosTime = lesbos.querySelector(".time");
  let lesbosDT = moment().tz("Europe/Athens");

  lesbosDate.innerHTML = lesbosDT.format("MMMM Do YYYY");
  lesbosTime.innerHTML = lesbosDT.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);


document.getElementById("button").addEventListener("click", getJSON);

function getJSON() {
  fetch("https://www.boredapi.com/api/activity")
    .then((response) => response.json())
    .then((data) => document.querySelector("#print-here").innerHTML =
      data.activity)
};

document.getElementById("button").textContent="Get random activities";
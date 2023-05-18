let city = prompt("Введіть назву міста ");
let div = document.querySelector(".weather-top");
let h1 = document.createElement("h1");
h1.innerHTML = `${city}`;
div.prepend(h1);

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`
)
  .then((response) => response.json())

  .then((items) => {
    let div = document.querySelector(".weather-top-text-one");
    let li = document.createElement("li");
    li.innerHTML = " + " + " " + ` ${items.main.temp}` + " " + "°С";

    div.appendChild(li);
  });
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`
)
  .then((response) => response.json())

  .then((items) => {
    let div = document.querySelector(".weather-top-text-three");
    let li = document.createElement("li");
    li.innerHTML = items.weather[0].description;
    div.appendChild(li);
  });
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`
)
  .then((response) => response.json())
  .then((items) => {
    let div = document.querySelector(".pack-wind");
    let li = document.createElement("li");
    li.innerHTML = `${items.wind.speed}` + "  " + "m/s";
    div.appendChild(li);
  });

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`
)
  .then((response) => response.json())
  .then((items) => {
    let div = document.querySelector(".pack-humidity");
    let li = document.createElement("li");
    li.innerHTML = `${items.main.humidity}` + "  " + "%";
    div.appendChild(li);
  });

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`
)
  .then((response) => response.json())
  .then((items) => {
    let div = document.querySelector(".pack-meter");
    let li = document.createElement("li");
    li.innerHTML = `${items.main.pressure}` + "  " + "mm Hg";
    div.appendChild(li);
  });

// .then((items) => {
//   let div = document.querySelector(".weather-top-text-two");
//   let img = document.createElement("img");
//   let scr = document.createElement("scr");
//   let scrImg = `http://openweathermap.org/img/w/${items.weather[0].icon}.png`;
//   scr.innerHTML = scrImg;
//   img.appendChild(scr);
//   div.appendChild(img);

//   console.log(div);
// });

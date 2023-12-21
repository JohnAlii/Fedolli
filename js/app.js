// UI elements
const burger = document.querySelector(".burger");

// Function
function navToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    gsap.to(".line1", 0.5, { rotate: "45", y: 9, background: "black" });
    gsap.to(".line2", 0.5, { rotate: "-45", y: -9, background: "black" });
    gsap.set(".logo-img", { attr: { src: "./images/logo-black.png" } });
    gsap.to(".nav-bar", 1, { clipPath: "circle(2500px at 100% -10%)" });
    document.querySelector("#main").classList.remove("hide");
  } else {
    e.target.classList.remove("active");
    gsap.to(".line1", 0.5, { rotate: "0", y: 0, background: "white" });
    gsap.to(".line2", 0.5, { rotate: "0", y: 0, background: "white" });
    gsap.set(".logo-img", { attr: { src: "./images/logo-white.png" } });
    gsap.to(".nav-bar", 1, { clipPath: "circle(50px at 100% -10%)" });
    document.querySelector("#main").classList.add("hide");
  }
}

const countdown = () => {
  const countDate = new Date("March 1, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  if (gap > 0) {
    document.getElementById("day").innerText = textDay;
    document.getElementById("hour").innerText = textHour;
    document.getElementById("minute").innerText = textMinute;
    document.getElementById("second").innerText = textSecond;
  } else {
    document.getElementById("day").innerText = "0";
    document.getElementById("hour").innerText = "0";
    document.getElementById("minute").innerText = "0";
    document.getElementById("second").innerText = "0";
  }
};

setInterval(countdown, 1000);

// Event listeners
burger.addEventListener("click", navToggle);

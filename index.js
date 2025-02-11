const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-nav");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("-translate-x-full");
});

class Mode {
  static #value = "light";

  static #changeModeValue = function () {
    Mode.#value === "light" ? (Mode.#value = "dark") : (Mode.#value = "light");
  };

  static #changes = [
    {
      from: "text-black",
      to: "text-white",
    },
    {
      from: "bg-[#F4F6F5]",
      to: "bg-[#1c1e21]",
    },
    {
      from: "after:bg-white",
      to: "after:bg-[#23272f]",
    },
  ];

  static change = function () {
    if (Mode.#value === "light") {
      document.body.classList.replace("bg-slate-50", "bg-[#23272f]");
      document.body.classList.replace("light-mode", "dark-mode");

      document.getElementById("modeSwitch").innerHTML = "Light Mode";

      Mode.#changes.forEach((ele) => {
        Array.from(document.getElementsByClassName(ele.from)).forEach((e) => {
          e.classList.replace(ele.from, ele.to);
        });
      });

      document.getElementById("shopLogo").src = "./images/logo-white.png";

      Mode.#value = "dark";
    } else if (Mode.#value === "dark") {
      document.body.classList.replace("bg-[#23272f]", "bg-slate-50");
      document.body.classList.replace("dark-mode", "light-mode");

      document.getElementById("modeSwitch").innerHTML = "Dark Mode";

      Mode.#changes.forEach((ele) => {
        Array.from(document.getElementsByClassName(ele.to)).forEach((e) => {
          e.classList.replace(ele.to, ele.from);
        });
      });

      document.getElementById("shopLogo").src = "./images/logo-black.png";

      Mode.#value = "light";
    }

    console.log("Mode Changed.");
  };
}

const modeChanger_1 = document.getElementById("darkModeToggle"),
  modeChanger_2 = document.getElementById("modeSwitch");

modeChanger_1.addEventListener("click", Mode.change);
modeChanger_2.addEventListener("click", Mode.change);

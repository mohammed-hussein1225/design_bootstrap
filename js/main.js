let links = document.querySelectorAll(".page-link");

links.forEach((item) => {
  item.onclick = () => {
    links.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
  };
});

let nav = document.querySelectorAll(".nav-link");

nav.forEach((item) => {
  item.onclick = () => {
    nav.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
  };
});
document.getElementById("mySwitch").addEventListener("change", function () {
  if (this.checked) {
    //  أضف الوضع المظلم
    document.body.classList.add("bg-dark");
    document.querySelector(".form-check-label").innerHTML = "light Mode";
    document.querySelector(".form-check-label").classList.add("text-white");
  } else {
    // ازالت الوضع المظلم
    document.body.classList.remove("bg-dark");
    document.querySelector(".form-check-label").innerHTML = "Dark Mode";
    document.querySelector(".form-check-label").classList.remove("text-white");
  }
});

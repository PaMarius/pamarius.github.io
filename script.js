"use script";
const openMsgAlert = document.querySelector(".alert");
const closeBtnAlert = document.querySelector(".close-btn-alert");
const infoButton = document.querySelector(".info-button");
const accButton = document.querySelector(".acc-button");

const showAlert = function () {
  alert("Coming soon");
};

const closeAlert = function () {
  openMsgAlert.classList.add("hidden");
};

const openAlert = function () {
  openMsgAlert.classList.remove("hidden");
};

infoButton.addEventListener("click", showAlert);
accButton.addEventListener("click", openAlert);
closeBtnAlert.addEventListener("click", closeAlert);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !openMsgAlert.classList.contains("hidden")) {
    closeAlert();
  }
});

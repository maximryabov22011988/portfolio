var searchForm = document.getElementById("modal-content");
var popup = document.querySelector(".search .btn");
var arrivalDate = document.getElementById("arrival-date");

popup.onclick = function() {
  searchForm.classList.toggle("open");
  arrivalDate.focus();
};

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (searchForm.classList.contains("open")) {
        searchForm.classList.remove("open");
        }
    }
});
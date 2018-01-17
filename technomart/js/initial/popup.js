var link = document.querySelector(".send-message-btn");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var firstName = popup.querySelector("[name=first-name]");
var email = popup.querySelector("[name=email]");
var form = popup.querySelector("form");
/*var storage = localStorage.getItem("contacts");*/

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    firstName.focus();

    if (storage) {
        firstName.value = storage;
        email.focus();
    } else {
        firstName.focus();
    }
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
    if (!firstName.value || !email.value) {
            event.preventDefault();
            popup.classList.add("modal-error");
    } else {
        localStorage.setItem("contacts", firstName.value);
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
        popup.classList.remove("modal-content-show");
        }
    }
});
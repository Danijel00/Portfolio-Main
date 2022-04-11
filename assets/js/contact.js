/*  ========= SEND EMAIL =========  */

const successMsg = document.querySelector(".popup__success");
const errorMsg = document.querySelector(".popup__error");
const formContact = document.getElementById("form");
function send(event) {
  event.preventDefault();
  Email.send({
    name: document.getElementById("name").value,
    Host: "smtp.mailtrap.io",
    Username: "a56d8073395d28",
    Password: "05420a29e3c1a2",
    To: "daki.kocic12@gmail.com",
    From: document.getElementById("email").value,
    Subject: document.getElementById("subject").value,
    Body: document.getElementById("message").value,
  }).then(function (response) {
    if (response == "OK") {
      successMsg.classList.add("popup__success-sticky");
      setTimeout(() => {
        successMsg.classList.remove("popup__success-sticky");
      }, 4000);

      formContact.reset();
    } else {
      errorMsg.classList.add("popup__error-sticky");
      setTimeout(() => {
        errorMsg.classList.remove("popup__error-sticky");
      }, 4000);
    }
  });
}

/*  ========= SEND EMAIL =========  */

const successMsg = document.querySelector(".popup__success");
const errorMsg = document.querySelector(".popup__error");
const formContact = document.getElementById("form");

async function handleSubmit(event) {
  event.preventDefault();
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  }).then((response) => {
    if (response.ok) {
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

formContact.addEventListener("submit", handleSubmit);

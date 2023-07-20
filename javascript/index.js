const form = document.getElementById("form");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmedPassword = document.getElementById("password2");

function showError(element, errorMsg) {
  const parentElement = element.parentElement;
  parentElement.className = "form-control error";
  const errorElement = parentElement.querySelector("small");
  errorElement.innerText = errorMsg;
}

function showSuccess(element) {
  const parentElement = element.parentElement;
  parentElement.className = "form-control success";
}

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

document.addEventListener("submit", (e) => {
  e.preventDefault();
  if (username.value === "") {
    showError(username, "Please enter your username");
  } else {
    showSuccess(username);
  }
  if (email.value === "") {
    showError(email, "Please enter your email");
  } else if (!validateEmail(email.value)) {
    showError(email, "Mail is not in valid format");
  } else {
    showSuccess(email);
  }
  if (password.value === "") {
    showError(password, "Please enter your password");
  } else {
    showSuccess(password);
  }
  if (confirmedPassword.value === "") {
    showError(confirmedPassword, "Please enter your password again");
  } else {
    showSuccess(confirmedPassword);
  }
});

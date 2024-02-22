const form = document.getElementById("form");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmedPassword = document.getElementById("confirmed-password");

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

function generateElementName(input) {
  const text = input.id;
  return text[0].toUpperCase() + text.slice(1);
}

function checkEmpty(inputArray) {
  let notEmpty = false;
  inputArray.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, generateElementName(input));
      notEmpty = true;
    } else {
      showSuccess(input);
    }
  });
  return notEmpty;
}

function checkEmail(input) {
  if (!validateEmail(input.value)) {
    showError(input, "Mail is not in valid format");
  } else {
    showSuccess(input);
  }
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${generateElementName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${generateElementName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

function matchPassword(password1, password2) {
  if (password1.value !== password2.value) {
    showError(password2, "Passwords do not match");
  } else {
  }
}

document.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!checkEmpty([username, email, password, confirmedPassword])) {
    checkEmail(email);
    checkLength(username, 5, 15);
    checkLength(password, 7, 25);
    matchPassword(password, confirmedPassword);
  }
});

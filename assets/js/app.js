const form = document.getElementById("form");
const Name = document.getElementById("Name");
const company = document.getElementById("subject");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const error = document.getElementsByClassName('error')
const thank = document.querySelector('.thank_you p')



//Error Message
function errorMessage(input, message) {
  const inputElement = input.parentElement;
  inputElement.className = "form-control error";
  const small = inputElement.querySelector("small");
  small.innerText = message;
}

//Success message

function successMessage(input) {
    const inputElement = input.parentElement;
    inputElement.className = "form-control success";
}



//Check Input Elements
function checkInputElement(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() == "") {
      errorMessage(input, `${inputFieldName(input)} is requerd`);
    } else {
      successMessage(input);
    }
  });
}

//Check Input inputElementNone
function inputElementValueEmpty(inputArr) {
  inputArr.forEach(function (input) {
  input.value = "";

  const inputElement = input.parentElement;
  inputElement.classList.remove("success");
  });
}

//Check length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    errorMessage(
      input,
      `${inputFieldName(input)}`
    );
  } else if (input.value.length > max) {
    errorMessage(
      input,
      `${inputFieldName(input)}`
    );
  } else {
    successMessage(input);
  }
}
function checkNumber(input, min, max) {
  if (input.value.length < min) {
    errorMessage(
      input,
      `${inputFieldName(input)}`
    );
  } else if (input.value.length > max) {
    errorMessage(
      input,
      `${inputFieldName(input)}`
    );
  } else {
    successMessage(input);
  }
}

//Check email
function checkEmail(email) {
  const regx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regx.test(email.value.trim())) {
    successMessage(email);
  } else {
    errorMessage(email, "Email is not valid");
  }
}


//Input fields name
function inputFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


//add event listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkInputElement([Name,company,phone,message,email]);
  checkLength(Name, 3, 25);
  checkLength(company, 3, 25);
  checkLength(message, 10, 10000000);
  checkEmail(email);
  checkNumber(phone,2,1000000);
  if (error.length === 0) {
    inputElementValueEmpty([Name,company,phone,message,email]);
    thank.style.display = "block";
    const myTimeout = setTimeout(()=>{
      thank.style.display = "none";
    }, 2000);
  }
});





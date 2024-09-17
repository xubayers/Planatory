import loadEverything from "./personCard.js";

// show sing up
document.querySelector("#signUpBtn").addEventListener("click", openSignUp);
function openSignUp() {
  document.querySelector("#formPage").classList.remove("hidden");
}

// close sign up
document.querySelector(".close").addEventListener("click", closeSignUpForm);
function closeSignUpForm() {
  document.querySelector("#formPage").classList.add("hidden");
}
// handle form
export let users = [];
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let newUser = {
    isLoaggedIn: false,
  };
  for (let inp of form) {
    switch (inp.placeholder) {
      case "First Name":
        newUser["FirstName"] = inp.value;
        inp.value = "";
        break;
      case "Last Name":
        newUser["LastName"] = inp.value;
        inp.value = "";
        break;
      case "Enter Email":
        newUser["emailAddress"] = inp.value;
        inp.value = "";
        break;
      case "Password":
        newUser["password"] = inp.value;
        inp.value = "";
        break;
    }
  }
  newUser.isLoaggedIn = true;

  users.push(newUser);
  setTimeout(() => {
    closeSignUpForm();
  }, 1500);

  document.querySelector("#signUpBtn").classList.add("hidden");
  let userName = document.querySelector("#showLoggedUserName");
  userName.classList.remove("hidden");

  for (let user of users) {
    if (user.isLoaggedIn) {
      userName.innerText = user.FirstName;
    }
  }
});

// popular people

window.addEventListener("load", loadEverything);

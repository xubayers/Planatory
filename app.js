// show sing up
function showSignUpPage() {
  const formPage = document.querySelector("#formPage");
  formPage.classList.remove("hidden");
}
// close sign up
function closeSignUpForm() {
  const formPage = document.querySelector("#formPage");
  formPage.classList.add("hidden");
}

// handle form
let users = [];
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let newUser = {};
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
  users.push(newUser);
  setTimeout(() => {
    closeSignUpForm();
  }, 1000);

  document.querySelector("#signUpBtn").classList.add("hidden");
  let userName = document.querySelector("#showLoggedUserName");
  userName.classList.remove("hidden");

  for (let user of users) {
    userName.innerText = user.FirstName;
  }
});

// is User Logged in

import { users } from "./app.js";
import persons from "./data.js";
export default function loadEverything() {
  persons.map((person, index) => {
    let parentNode = document.createElement("div");
    let personBox = `<div class="card">
            <div class="md:w-40 md:h-32 h-36">
              <img class="imgBox" src="${person.picture}" alt="" />
            </div>
            <div class="nam">
              <div>
                <h2 id="personName" class="text-2xl text-gray-200">
                  ${person.name}
                </h2>
                <p
                  id="personBio"
                  class="md:text-[16px] text-[14px] mt-1 text-zinc-300"
                >
                  ${person.bio}
                </p>
              </div>
              <button id="subscribeBtn-${index}" class="sBtn">Subscribe</button>
            </div>
          </div>`;
    parentNode.innerHTML = personBox;

    document.querySelector("#persons-container").appendChild(parentNode);

    // Add event listener after the button is added to the DOM
    let subscribeBtn = document.getElementById(`subscribeBtn-${index}`);
    subscribeBtn.addEventListener("click", function () {
      if (!users[index]) {
        document.querySelector("#popup").classList.add("popUpShow");
        setTimeout(() => {
          document.querySelector("#popup").classList.remove("popUpShow");
        }, 4500);
        return;
      }
      for (let user of users) {
        console.log(user.isLoaggedIn);

        if (user.isLoaggedIn) {
          if (subscribeBtn.innerText === "Subscribe") {
            subscribeBtn.innerText = "Unsubscribe";
          } else {
            subscribeBtn.innerText = "Subscribe";
          }
          return;
        }
        alert("please log in first");
      }
      console.log("clicked");
    });
  });
}

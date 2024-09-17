import persons from "./data.js";

export default function loadEverything() {
  persons.map((person) => {
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
              <button class="sBtn">Subscribe</button>
            </div>
          </div>`;
    document.querySelector("#persons-container").innerHTML += personBox;
  });
}

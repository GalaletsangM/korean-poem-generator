function generatePoem(event) {
  event.preventDefault();



  new Typewriter("#poem", {
    strings: "Write poem here <br/> White poem here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElenent = document.querySelector("#poem-generator-form");
poemFormElenent.addEventListener("submit", generatePoem);

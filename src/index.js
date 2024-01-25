function generatePoem(event) {
  event.preventDefault();

  function displayPoem(response) {
    console.log(response.data.answer);

    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }

  let userInput = document.querySelector("#user-input");

  let key = "tb8746f8a332o55bf03481bf03f90fe4";
  let prompt = `write a short poem in korean about the word "${userInput.value}", also write in the way the whole poem should be prnounced. Use html format, example : <p>hello</p>`;
  let context =
    "you are a great poet and you like writing short poems. Sign the poem with 'SheCodes AI' inside a <strong> element at the bottom. ";
  let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  axios.get(url).then(displayPoem);
}

let poemFormElenent = document.querySelector("#poem-generator-form");
poemFormElenent.addEventListener("submit", generatePoem);

/* TODO: inserite il codice JavaScript necessario a completare il MHW! */

console.log(RESULTS_MAP);
const risposte = document.querySelectorAll(".choice-grid div");
const selected = [];

risposte.forEach((risposta) => {
  risposta.addEventListener("click", onClick);
});

function onClick(event) {
  const myres = event.currentTarget;
  risposte.forEach((risp) => {
    if (risp.dataset.questionId === myres.dataset.questionId) {
      risp.style.opacity = 1;
      risp.style.backgroundColor = "#cfe3ff";
      risp.querySelector(".checkbox").src = "images/unchecked.png";
    }
  });

  myres.style.backgroundColor = "lightskyblue";
  myres.querySelector(".checkbox").src = "images/checked.png";
  for (const risp of risposte) {
    if (risp.dataset.questionId === myres.dataset.questionId && risp != myres) {
      risp.style.opacity = "0.6";
    }
  }

  switch (myres.dataset.questionId) {
    case "one":
      selected[0] = myres.dataset.choiceId;
      break;
    case "two":
      if (selected.length >= 1) {
        selected[1] = myres.dataset.choiceId;
      }

      break;
    case "three":
      if (selected.length >= 2) {
        selected[2] = myres.dataset.choiceId;
      }
      break;
  }
  let toView = "";
  if (selected.length === 3) {
    for (let i = 0; i < selected.length; i++) {
      for (let j = i + 1; j < selected.length; j++) {
        if (selected[i] === selected[j]) {
          toView = selected[i];
        }
      }
    }
    if (toView === "") {
      toView = selected[0];
    }

    const resultView = document.querySelector(".result");
    resultView.querySelector("h1").innerText = RESULTS_MAP[toView].title;
    resultView.querySelector("p").innerText = RESULTS_MAP[toView].contents;
    resultView.classList.add("is-visible");
  }
  console.log(toView);
}

console.log(selected);

// Fonctionnalité 1 :
function clique() {
  let compteur = 0;
  let footer = document.getElementsByTagName("footer")[0];
    footer.addEventListener("click", function () {
      compteur++;
      console.log(compteur);
  });
}

clique();


// Fonctionnalité 2 :
function collapse() {
  let button = document.getElementsByClassName("navbar-toggler")[0];
  button.addEventListener("click", function () {
    document.getElementById("navbarHeader").classList.toggle("collapse");
  });
}

collapse();

// Fonctionnalité 3 :

function editFirstCardText() {
  let btn = document.getElementsByClassName("btn-outline-secondary")[0];
  btn.addEventListener("click", function () {
    document.getElementsByClassName('card-text')[0].style.color = "red";
  });
}

editFirstCardText();

// Fonctionnalité 4 :
function editSecondCardText() {
  let btn = document.getElementsByClassName("btn-outline-secondary")[1];
  btn.addEventListener("click", function () {
    if (document.querySelectorAll('p.card-text')[1].classList.contains('text-success')) {
      document.querySelectorAll('p.card-text')[1].classList.remove('text-success');
    } else {
      document.querySelectorAll('p.card-text')[1].classList.add('text-success');
    };
  });
}

editSecondCardText();


// Fonctionnalité 5 :
let header = document.getElementsByTagName("header")[0];
header.addEventListener("dblclick", function () {
  if (document.getElementsByTagName("link")[0].href.includes("bootstrap.min.css")) {
    if (document.getElementsByTagName("link")[0].hasAttribute("disabled")) {
    document.getElementsByTagName("link")[0].removeAttribute("disabled");
    } else {
    document.getElementsByTagName("link")[0].setAttribute("disabled", "");
    }
  }
});

// Fonctionnalité 6 :
let array = [...document.querySelectorAll("button")]
  .filter((el) => el.textContent === "View");
  for (let i = 0; i < array.length; i++) {
    array[i].addEventListener("mouseover", function () {
      let cardText = document.querySelectorAll('p.card-text')[i];
      let img = document.getElementsByClassName("card-img-top")[i];
      if (cardText.classList.contains("collapse")) {
        cardText.classList.remove("collapse");
        img.style.width = "100%";
      } else {
        cardText.classList.add("collapse");
        img.style.width = "20%";
      }
    });
  }

// Fonctionnalité 7 :
const btnNext = document.querySelectorAll("section.jumbotron")[0].getElementsByClassName("container")[0].getElementsByTagName("p")[0].lastElementChild;
const cardsParent = document.getElementsByClassName("album")[0].getElementsByClassName("container")[0].getElementsByClassName("row")[0];
btnNext.addEventListener("click", function () {
  cardsParent.insertBefore(cardsParent.lastElementChild, cardsParent.firstElementChild);
});

// Fonctionnalité 8 :
const btnPrevious = document.querySelectorAll("section.jumbotron")[0].getElementsByClassName("container")[0].getElementsByTagName("p")[0].firstElementChild;
const cardsParentBis = document.getElementsByClassName("album")[0].getElementsByClassName("container")[0].getElementsByClassName("row")[0];
btnPrevious.addEventListener("click", function (e) {
  e.preventDefault();
  cardsParentBis.appendChild(cardsParentBis.firstElementChild);
});


// Fonctionnalité 9 :
function handler(e) {
  document.getSelection().toString();
  let body = document.getElementsByTagName("body")[0];
    if (e.key === "a") {
      console.log("Touche pressée : a");
      body.className = "";
      body.classList.add("col-4", "mr-auto");
    } else if (e.key === "p") {
      console.log("Touche pressée : p");
      body.className = "";
      body.classList.add("col-4", "ml-auto");
    } else if (e.key === "y") {
      console.log("Touche pressée : y");
      body.className = "";
      body.classList.add("col-4", "mx-auto");
    } else if (e.key === "b") {
      console.log("Touche pressée : b");
      body.className = "";
    } else {
      console.log("error");
    }
}

addEventListener("keypress", handler);
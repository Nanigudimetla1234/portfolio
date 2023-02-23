// const options = {
//   method: "POST",
//   headers: {
//     "content-type": "application/json",
//     "X-RapidAPI-Key": "7e4d46dc85msh4f03f1a4e929061p191d0cjsn3afedf048961",
//     "X-RapidAPI-Host": "rapidprod-sendgrid-v1.p.rapidapi.com",
//   },
//   body: '{"personalizations":[{"to":[{"email":"nanigudimetla990@gmail.com"}],"subject":"Hello, World!"}],"from":{"email":"nanigudimetla990@gmail.com"},"content":[{"type":"text/plain","value":"Hello, World!"}]}',
// };

// fetch("https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

let cycleboy = document.getElementById("cycleboy");
didAnimationStart = false;
function animateCycle() {
    if(didAnimationStart) return;

    didAnimationStart = true;
    cycleboy.style.animation = "cycle 2s ease-in-out";
    setTimeout(() => {
        cycleboy.style.animation = "";
        didAnimationStart = false;
    }, 2000);
}
cycleboy.addEventListener("mouseover", animateCycle);

let developerI = document.getElementById("developerI")
let coffeeI = document.getElementById("coffeeI");
didCoffeeCome = false;

function animateCoffee() {
    if(didCoffeeCome) return;

    didCoffeeCome = true;
    coffeeI.style.display = "inline";
    coffeeI.style.animation = "coffee 1s linear alternate";
    setTimeout(() => {
        didCoffeeCome = false;
        coffeeI.style.animation = "";
        coffeeI.style.right = "5rem";
        setTimeout(() => 
        coffeeI.style.display = "none", 1000);
    }, 1000);
}
developerI.addEventListener("mouseover", animateCoffee);

let book = document.getElementById("book");
let boy = document.getElementById("boy");
didBookCame = false;

function animateBook() {
  if (didBookCame) return;

  didBookCame = true;
  book.style.display = "inline";
  book.style.animation = "book 1s linear alternate";
  setTimeout(() => {
    didBookCame = false;
    book.style.animation = "";
    book.style.right = "7.2rem";
    setTimeout(() => book.style.display = "none", 1000);
  }, 1000);
}
boy.addEventListener("mouseover", animateBook);
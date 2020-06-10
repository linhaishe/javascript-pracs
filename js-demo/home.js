// show the title
// showMessage("Title...");
// let price = 149.99;
/*
    Detail complex logic...
    Some algorithm....

*/

// let price = 25;
// let name = "Hiking Boots";
// let discounted = false;

// showMessage(name);

// let price;
// console.log(price);//undefined

// changePercentOff(30);

// let message = "hello";

// function changeMessage(message) {
//   message = "hi";
// }

// changeMessage(message);//hi
// showMessage(message);//hello

//output hello

// let person = {
//   name: "jack",
//   age: 24,
//   partTime: false,
// };

// function incrementAge(p) {
//   p.age++;
// }

// incrementAge(person); //33
// showMessage(person.age); //33

//pass by reference

const button = document.getElementById("see-review");

button.addEventListener("click", function () {
  //console.log("click");
  const review = document.getElementById("review");

  if (review.classList.contains("d-none")) {
    review.classList.remove("d-none");
    button.textContent = "CLOSE REVIEW";
  } else {
    review.classList.add("d-none");
    button.textContent = "SEE REVIEW";
  }
});

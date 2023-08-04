let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let url = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";
let getBev = () => {
  let userInp = document.getElementById("user-inp").value;
  if (userInp.length == 0) {
    result.innerHTML = `<h3 class="msg">The input field cannot be empty</h3>`;
  } else {
    fetch(url + userInp)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("user-inp").value = "";
        console.log(data);
        console.log(data.drinks[0]);
        let myBev = data.drinks[0];
        console.log(myBev.strDrink);
        console.log(myBev.strDrinkThumb);
        console.log(myBev.strInstructions);
        let count = 1;
        let ingredients = [];
        for (let i in myBev) {
          let ingredient = "";
          let measure = "";
          if (i.startsWith("strIngredient") && myBev[i]) {
            ingredient = myBev[i];
            if (myBev[`strMeasure` + count]) {
              measure = myBev[`strMeasure` + count];
            } else {
              measure = "";
            }
            count += 1;
            ingredients.push(`${measure} ${ingredient}`);
          }
        }
        console.log(ingredients);
        result.innerHTML = `
      <img src=${myBev.strDrinkThumb}>
      <h2>${myBev.strDrink}</h2>
      <h3>Ingredients:</h3>
      <ul class="ingredients"></ul>
      <h3>Instructions:</h3>
      <p>${myBev.strInstructions}</p>
      `;
        let ingredientsCon = document.querySelector(".ingredients");
        ingredients.forEach((item) => {
          let listItem = document.createElement("li");
          listItem.innerText = item;
          ingredientsCon.appendChild(listItem);
        });
      })
      .catch(() => {
        result.innerHTML = `<h3 class="msg">Please enter a valid input</h3>`;
      });
  }
};
window.addEventListener("load", getBev);
searchBtn.addEventListener("click", getBev);

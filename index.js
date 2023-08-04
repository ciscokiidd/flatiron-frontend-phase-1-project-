const searchBar = document.body.querySelector.querySelector("#search-bar");

const getCocktailNames = async () => {
  const cocktailNamesApiURL =
    "www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  try {
    const response = await fetch(cocktailNamesApiURL);
    const data = await response.json();
    const names = data.names;
    return names;
  } catch (error) {
    console.log(error);
    alert("Invalid, try again later");
  }
};

cons;

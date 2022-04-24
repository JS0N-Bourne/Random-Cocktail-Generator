//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks)
      document.querySelector('h2').innerText = data.drinks[0].strDrink
      document.querySelector('.randomDrink').src = data.drinks[0].strDrinkThumb
      document.querySelector('p').innerText = data.drinks[0].strInstructions
      document.querySelector('.ingredient1').innerText = data.drinks[0].strIngredient1
      document.querySelector('.ingredient2').innerText = data.drinks[0].strIngredient2
      document.querySelector('.ingredient3').innerText = data.drinks[0].strIngredient3
      document.querySelector('.ingredient4').innerText = data.drinks[0].strIngredient4
      document.querySelector('.ingredient5').innerText = data.drinks[0].strIngredient5
      document.querySelector('.ingredient6').innerText = data.drinks[0].strIngredient6
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}

// this function will reset the game clearing out the drink photo and information.

function refreshPage(){
  window.location.reload();
} 

//For a random cocktail selection, the user will click the big red button. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('.redContainer').addEventListener('click', getRandom)

function getRandom() {

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data.drinks)
    document.querySelector('h2').innerText = data.drinks[0].strDrink
    document.querySelector('.randomDrink').src = data.drinks[0].strDrinkThumb
    document.querySelector('p').innerText = data.drinks[0].strInstructions
    document.querySelector('.ingredient1').innerText = data.drinks[0].strIngredient1
    document.querySelector('.ingredient2').innerText = data.drinks[0].strIngredient2
    document.querySelector('.ingredient3').innerText = data.drinks[0].strIngredient3
    document.querySelector('.ingredient4').innerText = data.drinks[0].strIngredient4
    document.querySelector('.ingredient5').innerText = data.drinks[0].strIngredient5
    document.querySelector('.ingredient6').innerText = data.drinks[0].strIngredient6
  })
  .catch(err => {
      console.log(`error ${err}`)
  });

}
"use strict";
const coffeeTemplate = document.querySelector("[data-coffee-template]");
const coffeeContainer = document.querySelector("[data-coffee-contaier]");
const searchInput = document.querySelector("[data-search]");
document.getElementById("search-submit").addEventListener("click", function(event){
    event.preventDefault()
  });
var coffees = [];
// function coffeeRun() {
    // coffees.sort();
    // }

//     Add functionality to search through the coffees by name,
//   and display only the coffees that match the provided search term
//   and to update the displayed coffee as the user types into the search box
//   (You will need to add an input field to the existing form for this)
    searchInput.addEventListener("input", (e) => {
        const value = e.target.value;
        console.log(value.toLowerCase());
        // -    Make your name search case insensitive
        return value.toLowerCase();
        });
        coffees.map(coffee => {
            const card = coffeeTemplate.content.cloneNode(true).children[0];
            const cName = card.querySelector('[data-coffee-name]');
            const cRoast = card.querySelector('[data-coffee-roast]');
            cName.textContent = coffee.name;
            cRoast.textContent = coffee.roast;
            // console.log(coffee);
            return {name: coffee.name, roast: coffee.roast, element: card};
            // coffeeContainer.append(card)
        })
//    Allow the user to add new coffees to the page
    function addToSearch() {
        //     make new coffees into cookies
        return;
    }

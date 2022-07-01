"use strict";
const coffeeTemplate = document.querySelector("[data-coffee-template]"); // hidden html template to auto-fill with js
const coffeeContainer = document.querySelector("[data-coffee-contaier]"); // empty div that shows the serched coffees
const searchInput = document.querySelector("[data-search]"); // serach data coffee input bar
const searchButton = document.getElementById("search-submit") // search coffee submit button
const searchCoffeeRoast = document.getElementById("search-coffee-roast").value; // roast selection for coffee search
const searchCoffeeName = document.getElementById("search-coffee-name").value; // name search for coffee search
let searchCoffees = []; // empty array to push coffees into
            // coffees.map(coffee => {
        //     const card = coffeeTemplate.content.cloneNode(true).children[0];
        //     const cName = card.querySelector('[data-coffee-name]');
        //     const cRoast = card.querySelector('[data-coffee-roast]');
        //     cName.textContent = coffee.name;
        //     cRoast.textContent = coffee.roast;
        //     console.log(coffee);
        //     return {name: coffee.name, roast: coffee.roast, element: card};
        // })
searchInput.addEventListener("input", (e) => {
        const value = e.target.value;
        console.log(value.toLowerCase());
        console.log(searchCoffeeRoast.value);
        return value.toLowerCase();
    });
searchButton.addEventListener("click", function(event){
        event.preventDefault();
        let searchCoffee = {
            name: searchCoffeeName, 
            roast: searchCoffeeRoast
        }
        searchCoffees.push(searchCoffee);  
        console.log(`serached for ${searchCoffees}`);
    });
function addCoffeeToList() {

    }
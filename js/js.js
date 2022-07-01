"use strict";
const coffeeTemplate = document.querySelector("[data-coffee-template]"); // hidden html template to auto-fill with js
let coffeeContainer = document.querySelector("#coffeeContainer"); // empty div that shows the serched coffees
const searchInput = document.querySelector("[data-search]"); // serach data coffee input bar
const searchButton = document.getElementById("search-submit") // search coffee submit button
const searchCoffeeRoast = document.getElementById("search-coffee-roast"); // roast selection for coffee search
const searchCoffeeName = document.getElementById("search-coffee-name"); // name search for coffee search
let searchCoffees = []; // empty array to push coffees into

let coffees = `[
    {"id": 1, "name": "Light City", "roast": "light"},
    {"id": 2, "name": "Half City", "roast": "light"},
    {"id": 3, "name": "Cinnamon", "roast": "light"},
    {"id": 4, "name": "City", "roast": "medium"},
    {"id": 5, "name": "American", "roast": "medium"},
    {"id": 6, "name": "Breakfast", "roast": "medium"},
    {"id": 7, "name": "High", "roast": "dark"},
    {"id": 8, "name": "Continental", "roast": "dark"},
    {"id": 9, "name": "New Orleans", "roast": "dark"},
    {"id": 10, "name": "European", "roast": "dark"},
    {"id": 11, "name": "Espresso", "roast": "dark"},
    {"id": 12, "name": "Viennese", "roast": "dark"},
    {"id": 13, "name": "Italian", "roast": "dark"},
    {"id": 14, "name": "French", "roast": "dark"}
]`;
let coffeesList = JSON.parse(coffees);
coffeesList.forEach(coffeetype => {
    coffeeContainer.innerHTML = `${coffetype["names"]} , ${coffeetype["roast"]}`;    
});
//coffeeContainer.innerHTML = `<h1>${coffeesList[0].name} </h1> `//<p>${coffeesList.roast} </p>`;
console.log(coffeesList);
    searchInput.addEventListener("input", (e) => {
        const value = e.target.value;
        console.log(value.toLowerCase());
        console.log(searchCoffeeRoast.value);
        return value.toLowerCase();
    });
    searchButton.addEventListener("click", function (event) {
        event.preventDefault();
        let searchCoffee = {
            // id: Date.now(),
            name: searchCoffeeName.value, 
            roast: searchCoffeeRoast.value
        }
        searchCoffees.push(searchCoffee);  
        console.log(`serached for ${searchCoffees[0].name} with ${searchCoffee.roast}`);
        console.log(searchCoffees);
    });
                // coffees.map(coffee => {
        //     const card = coffeeTemplate.content.cloneNode(true).children[0];
        //     const cName = card.querySelector('[data-coffee-name]');
        //     const cRoast = card.querySelector('[data-coffee-roast]');
        //     cName.textContent = coffee.name;
        //     cRoast.textContent = coffee.roast;
        //     console.log(coffee);
        //     return {name: coffee.name, roast: coffee.roast, element: card};
        // })
//confirm do you want to add selection to the list... then alert after if canceled
function addOrNot (){
    if ( confirm("do you want to add selection to the list")) {
        alert('coffee will be added');
        localStorage.setItem("coffeeList", JSON.stringify(addedCoffees));
    } else {
        alert('No coffee added to list');
        localStorage.clear();
    }
}
let addedCoffees = [];
let addCoffeeSubmit = document.getElementById("add-submit");
addCoffeeSubmit.addEventListener("click", function(event){
    event.preventDefault();
    let addCoffee = {
        id: Date.now(),
        addedRoast: document.getElementById("add-roast-selection").value,
        coffeeName: document.getElementById("add-coffee-name").value
    }
    addedCoffees.push(addCoffee);
    addOrNot();
    document.forms[1].reset();
    console.warn(`added to coffee list storage`);
});
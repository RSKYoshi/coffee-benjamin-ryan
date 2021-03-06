"use strict";
let coffeeContainer = document.querySelector("#coffeeContainer"); // empty div that shows the searched coffees
const searchInput = document.querySelector("[data-search]"); // search data coffee input bar
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
function renderCoffeeList() {
    let disp = coffeesList.slice();
    let roastValue = searchCoffeeRoast.value;
    let filterValue = searchCoffeeName.value;
    if (roastValue !== "all") {
        disp = disp.filter(function(coffee) {
            return coffee.roast == roastValue;
        });}
    if (filterValue) {
        disp = disp.filter(function(coffee) {
            return coffee.name.toLowerCase().includes(filterValue.toLowerCase());
         });}
    disp = disp.map(function(coffee) {
        return `<h1><em>${coffee.name}</em> - ${coffee.roast}</h1>`;
    });
    coffeeContainer.innerHTML = disp.join("\n");
}
renderCoffeeList();
searchCoffeeRoast.addEventListener("input", (e) => {
    renderCoffeeList();
})
searchInput.addEventListener("input", (e) => {
    renderCoffeeList();
});
searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    lofiPlay();
    let searchCoffee = {
        name: searchCoffeeName.value, 
        roast: searchCoffeeRoast.value
    }
    searchCoffees.push(searchCoffee);  
    console.log(`searched for ${searchCoffees[0].name} with ${searchCoffee.roast}`);
    console.log(searchCoffees);
    // this.style.backgroundColor = 'blue';
});
//confirm do you want to add selection to the list... then alert after if canceled
function addOrNot (){
    if ( confirm("do you want to add selection to the list")) {
        alert('coffee will be added');
        localStorage.setItem("coffeesList", JSON.stringify(coffeesList));
    } else {
        alert("Remember, more coffee is better...");
        // localStorage.clear();
    }
}
let addCoffeeSubmit = document.getElementById("add-submit");
document.getElementById("add-form").addEventListener("submit", function(event) {
    console.log("submitted");
    event.preventDefault();
        let coffee = {
        id: Date.now(),
        roast: document.getElementById("add-roast-selection").value,
        name: document.getElementById("add-coffee-name").value
    }
    coffeesList.push(coffee);
    addOrNot();
    document.forms[1].reset();
    console.warn(`added to coffee list storage`);
    renderCoffeeList();
});









function alr(params) {
    alert('Too much work to edit form now, check in again some other time');
    run();
}
    const showList1 = document.getElementById("editBtn");
    let modal1 = document.getElementById("editModal");
    let span1 = document.getElementsByClassName("close")[1];
    let lis = document.getElementById("editList");
    let list = [];
    let  li;
    showList1.addEventListener("click", run)

        function run() {
            console.log("click");
            modal1.style.display = "block";
            if (list.length <= (list.length * 2 -1)){
                console.log(" no add");
            }
            else {
            for (let i = 0; i < coffeesList.length; i++) {
                // console.log(`${localStorage.key(i)} =[${localStorage.getItem(localStorage.key(i))}`);
                coffeesList.sort();
                li = `<div  class="coffBox"><h3 class='left'>${coffeesList[i].name}</h3><h4 class='clear'>${coffeesList[i].roast}</h4></div>`;
                list.push(li);
            }
            list.forEach(function (item) {
                lis.innerHTML  +=  item;
            });}
        }
    // modal here
    span1.onclick = () => {
        modal1.style.display="none";
    }
    window.onclick = function (e)  {
        if (e.target === modal1) {
            modal1.style.display = "none";
        }
    }
    function lofiPlay() {
        let lofi = document.getElementById("lofi");
        // lofi.muted = false;
        // let count = 1;
        // let myInt = setInterval(function update()  {
        //     if (count === 0){
                lofi.play();
        //     }
        //     else if (count >  0){
        //         console.log(count);
        //     }
        //     count--;
        // },1000);
    }


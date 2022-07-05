// "use strict";
//     function renderCoffee(coffee) {
//         var html = '<tr class="coffee">';
//         html += '<td>' + coffee.id + '</td>';
//         html += '<td>' + coffee.name + '</td>';
//         html += '<td>' + coffee.roast + '</td>';
//         html += '</tr>';

//         return html;
//     }
//     function renderCoffees(coffees) {
//         var html = '';
//         for(var i = coffees.length - 1; i >= 0; i--) {
//             html += renderCoffee(coffees[i]);
//         }
//         return html;
//     }
//     function updateCoffees(e) {
//         e.preventDefault(); // don't submit the form, we just want to update the data
//         var selectedRoast = roastSelection.value;
//         var filteredCoffees = [];
//         coffees.forEach(function(coffee) {
//             if (coffee.roast === selectedRoast) {
//                 filteredCoffees.push(coffee);
//             }
//         });
//         tbody.innerHTML = renderCoffees(filteredCoffees);
//     }
// //from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
//     var coffees = [
//         {id: 1, name: 'Light City', roast: 'light'},
//         {id: 2, name: 'Half City', roast: 'light'},
//         {id: 3, name: 'Cinnamon', roast: 'light'},
//         {id: 4, name: 'City', roast: 'medium'},
//         {id: 5, name: 'American', roast: 'medium'},
//         {id: 6, name: 'Breakfast', roast: 'medium'},
//         {id: 7, name: 'High', roast: 'dark'},
//         {id: 8, name: 'Continental', roast: 'dark'},
//         {id: 9, name: 'New Orleans', roast: 'dark'},
//         {id: 10, name: 'European', roast: 'dark'},
//         {id: 11, name: 'Espresso', roast: 'dark'},
//         {id: 12, name: 'Viennese', roast: 'dark'},
//         {id: 13, name: 'Italian', roast: 'dark'},
//         {id: 14, name: 'French', roast: 'dark'},
//     ];
//     var tbody = document.querySelector('#coffees');
//     var submitButton = document.querySelector('#submit');
//     var roastSelection = document.querySelector('#roast-selection');
//     tbody.innerHTML = renderCoffees(coffees);
//     submitButton.addEventListener('click', updateCoffees);


const showList = document.getElementById("removeBtn");
showList.addEventListener("click", showLocalStorage);

function showLocalStorage(){
    console.log("click");
    for(let i=0; i<localStorage.length;i++){
        console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
        }
    }
// modal here
let modal = document.getElementById("modal");
let btn = document.getElementById("removeBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick=function()  {
    modal.style.display="block";
}
span.onclick = function() {
    modal.style.display="none";
}
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
var li = document.getElementById("list");
li.innerHTML = `${coffeesList[1].name}  ${coffeesList[1].roast}`;





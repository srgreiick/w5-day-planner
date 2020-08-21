//Prepare JS before running it






$(document).ready(function () {
let currentDate = moment().format(" Do MMMM YYYY");
$("#currentDay").text("--------"+currentDate+" --------");
let i = 0
let now = moment().format("HH:MM")
let containerArray = $( ".container" ).get( );
let eachHourArray = containerArray[0].children;
console.log(containerArray)
console.log(eachHourArray)



let eventClass;
let event;
let allBlocks = document.getElementById('masterBlock')

console.log(allBlocks)
allBlocks.addEventListener('click', (e) => {
    eventClass = e.target.className
    event = e.target
    run()
})
run = function(){
    console.log(eventClass)
    if (eventClass === "far fa-save") {
        console.log(event.parentElement.parentElement.children[1].value)
        console.log(event.parentElement.parentElement.children[0].textContent)
        localStorage.setItem(event.parentElement.parentElement.children[0].textContent,event.parentElement.parentElement.children[1].value)
    }
    else{
    }
    
}


})
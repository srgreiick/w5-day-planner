//Prepare JS before running it






$(document).ready(function () {
let currentDate = moment().format(" Do MMMM YYYY");
$("#currentDay").text("--------"+currentDate+" --------");
let i = 0
let now = moment().format("HH:MM")
let containerArray = $( ".container" ).get( );
let eachHourArray = containerArray[0].children;



let eventClass;
let event;
let allBlocks = document.getElementById('masterBlock')


allBlocks.addEventListener('click', (e) => {
    eventClass = e.target.className
    event = e.target
    run()
})

run = function(){
    console.log(eventClass)
    if (eventClass === "far fa-save") {
        let keyPre = event.parentElement.parentElement.children[0].textContent.substring(0, 3)
        let key = parseInt(keyPre);
        localStorage.setItem(key,event.parentElement.parentElement.children[1].value)
    }
}
for (let i = 0; i < 8; i++) {
   
    let notes = localStorage.getItem(i+7)
    console.log(notes)
    allBlocks.children[i].children[1].textContent = notes
    //allBlocks.children[1].textContent = notes
}
     
})



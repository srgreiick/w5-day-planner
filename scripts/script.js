//Prepare JS before running it


$(document).ready(function () {

let containerArray = $( ".container" ).get( );
let eachHour = containerArray[0].children;
console.log(eachHour.length);

for (let i = 0; i < eachHour.length; i++) {
    console.log(eachHour[i]);
    
    

}

})
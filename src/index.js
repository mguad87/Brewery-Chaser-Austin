//JS code goes here

//fetch GET request that grabs API data. I need to put this in an object that I can call later on.
const breweryURL = "https://api.openbrewerydb.org/breweries?by_city=austin"
function getAllBreweries (){
  fetch(breweryURL)
  .then (res => res.json())
  //.then (data => console.log(data))
  .then (breweryData => breweryData.forEach(brewery => renderOneBrewery(brewery)))
}


//function to create cards from fetch data. This adds the html elements to the specific section of the html. I probably need to add the form here as well. I found code to not display the phone number p tag if the object value for that key was blank for a specific brewery. Pretty cool!
function renderOneBrewery(brewery){
  let card = document.createElement('div')
  card.className = 'card';
  // 3.23 - added if else statement to hide info for breweries that were "planning"
  if (brewery.brewery_type === "planning"){
    card.innerHTML = `
    <h3 class="card-title">${brewery.name}</h3>
    This brewery is coming soon! When the brewery type moves from planning to micro, this section will be updated.
    <p> last date of updated information: ${brewery.updated_at}`
    } else {
      card.innerHTML = `
  <h3 class="card-title">${brewery.name}</h3>
  <div class="check">Have you been here?<i class="fa fa-check" id="checkmark" style="black"></i></div>
  <p>Brewery Type: ${brewery.brewery_type}<br>
  Address:<a href="https://www.google.com/maps/search/${brewery.street}+${brewery.city}+${brewery.state}+${brewery.postal_code}" target="_blank">${brewery.street} ${brewery.city} ${brewery.state} ${brewery.postal_code}</a><br>
  ${brewery.phone ? `Phone Number: ${brewery.phone}` : "no phone number listed"} 
  <br>
  <span class="fa fa-star"></span>
  <span class="fa fa-star"></span>
  <span class="fa fa-star"></span>
  <span class="fa fa-star"></span>
  <span class="fa fa-star"></span>
  <span class="fa fa-star"></span>
  <div class="input-group mb-3">
  <input type="text" class="form-control">
  <span class="input-group-text" id="basic-addon2">leave a comment</span>
</div>
<div class="comment-section">comments will go here?</div>
  `
    }
  
  
//this part of the function adds the above to the card
document.querySelector('.brewery-collection').appendChild(card)
}



//clickevent for button - change class color. We have to use window.onload here because class is not loaded from HTML, it's being loaded from JS
window.onload = function(){ 
  const checkmark = document.querySelectorAll(".fa-check") //this selects all the checkmarks
  checkmark.forEach(checkmark => checkmark.addEventListener('click', handleCheckmarkClick)) //this is a foreach that iterates through the array created by the const above and applies the event listener to each of them
  
  function handleCheckmarkClick(event) { //this function checks the color to see if it is black, if it is it turns it green on click, and toggles it.
    if (event.target.style.color === 'black'){
        event.target.style.color = 'green'
    } else {
        event.target.style.color = 'black'
    }
  }
}



//clickeven for stars - change class color


//submit event for comment


function initialize (){
  getAllBreweries()
}
initialize()


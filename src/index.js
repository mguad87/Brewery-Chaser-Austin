//JS code goes here

//fetch GET request that grabs API data. I need to put this in an object that I can call later on.
const breweryURL = "https://api.openbrewerydb.org/breweries?by_city=austin"
function getAllBreweries (){
  fetch(breweryURL)
  .then (res => res.json())
  //.then (data => console.log(data))
  .then (breweryData => breweryData.forEach(brewery => renderOneBrewery(brewery)))
}


//function to create cards from fetch data. This adds the html elements to the specific section of the html. I probably need to add the form here as well.
function renderOneBrewery(brewery){
  let card = document.createElement('div')
  card.className = 'card'
  card.innerHTML = `
  <p>${brewery.name}</p>
  <p>Brewery Type: ${brewery.brewery_type}</p>
  <p>Address: ${brewery.street} ${brewery.address_2} ${brewery.address_3} ${brewery.city} ${brewery.state} ${brewery.postal_code}</p>
  <p>Phone number: ${brewery.phone}</p>
  <div class="checkbutton>CHECKBOX BUTTON GOES HERE</div>
  <div class="rating">RATING CAN GO HERE FOR NOW</div>
  <div class="input-group mb-3">
  <input type="text" class="form-control">
  <span class="input-group-text" id="basic-addon2">leave a comment</span>
</div>
  `
//this part of the function adds the above to the card
document.querySelector('.brewery-collection').appendChild(card)
}


//clickevent for button


//submit event for comment


function initialize (){
  getAllBreweries()
}
initialize()
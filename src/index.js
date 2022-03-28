const breweryURL = "https://api.openbrewerydb.org/breweries?by_city=austin"
function getAllBreweries(){
  fetch(breweryURL)
  .then (res => res.json())
  .then (breweryData => breweryData.forEach(brewery => renderOneBrewery(brewery)))
}


function renderOneBrewery(brewery){
  let namecard = document.createElement('div')
  namecard.className = `brewery-name ${brewery.brewery_type}`;
  namecard.innerHTML = `
  <p>${brewery.name}</p>
  <p>Brewery Type: ${brewery.brewery_type}</p>
  <div class="check">Have you been here?</div>
  `//this part of the function adds the above to the card
document.querySelector('.brewery-collection').appendChild(namecard)

}
getAllBreweries()




window.onload = function(){ //I put my eventlisteners in this window onload function so that they would work after the brewery cards from the API loaded


//Initially I did not have this in a function, but I put this first event listener in a function so I could call it for my second event listner. This one controls the ability to click on whether someone has been to the brewery or not.
function breweryChecker(){ 
  let beenHere = document.querySelectorAll(".check") 
  beenHere.forEach(beenHere => beenHere.addEventListener('click', changeCheckText)) 
  function changeCheckText(event) { 
    event.target.classList = "checkmark-hidden"
    event.target.innerHTML = `✓`
  }
}

//Second event listener. This controls the form submission for adding a new brewery
document.querySelector('.add-brewery-form').addEventListener('submit', handleBrewerySubmit)

function handleBrewerySubmit(e){
  e.preventDefault()
  let breweryObj = {
    name: e.target.breweryname.value,
    brewery_type: e.target.brewerytype.value
  }
  renderOneBrewery(breweryObj)
  breweryChecker(breweryObj)
  handleChange(breweryObj)
}


//third event listener - this should filter breweries by showing selected type only
const breweryFilterDropDown = document.querySelector("#filtertype")



breweryFilterDropDown.addEventListener('change', handleChange)



  
function handleChange (event) {
  let breweryType = event.target.value
  let planning = document.querySelectorAll('.planning')
  let micro = document.querySelectorAll('.micro')
  let contract = document.querySelectorAll('.contract')
  let brewpub = document.querySelectorAll('.brewpub')
  let regional = document.querySelectorAll('.regional')
  if (breweryType === 'all'){
    planning.forEach(planning => planning.style.display ="inline-block")  
      micro.forEach(micro => micro.style.display ="inline-block")
      contract.forEach(contract => contract.style.display ="inline-block")
      brewpub.forEach(brewpub => brewpub.style.display ="inline-block")
      regional.forEach(regional => regional.style.display ="inline-block")
  }
  
  
  if (breweryType === "planning") {
      planning.forEach(planning => planning.style.display ="inline-block")  
      micro.forEach(micro => micro.style.display ="none")
      contract.forEach(contract => contract.style.display ="none")
      brewpub.forEach(brewpub => brewpub.style.display ="none")
      regional.forEach(regional => regional.style.display ="none")
  } 
  if (breweryType === "micro") {
    micro.forEach(micro => micro.style.display ="inline-block")
    planning.forEach(planning => planning.style.display ="none")
    contract.forEach(contract => contract.style.display ="none")
    brewpub.forEach(brewpub => brewpub.style.display ="none")
    regional.forEach(regional => regional.style.display ="none")
}
if (breweryType === "contract") {
  contract.forEach(contract => contract.style.display ="inline-block")
  planning.forEach(planning => planning.style.display ="none")
  micro.forEach(micro => micro.style.display ="none")
  brewpub.forEach(brewpub => brewpub.style.display ="none")
  regional.forEach(regional => regional.style.display ="none")
}
if (breweryType === "regional") {
  regional.forEach(regional => regional.style.display ="inline-block")
  planning.forEach(planning => planning.style.display ="none")
  contract.forEach(contract => contract.style.display ="none")
  brewpub.forEach(brewpub => brewpub.style.display ="none")
  micro.forEach(micro => micro.style.display ="none")
}
if (breweryType === "brewpub") {
  brewpub.forEach(brewpub => brewpub.style.display ="inline-block")
  planning.forEach(planning => planning.style.display ="none")
  contract.forEach(contract => contract.style.display ="none")
  regional.forEach(regional => regional.style.display ="none")
  micro.forEach(micro => micro.style.display ="none")
}

  }

breweryChecker()


}


let reloadButton = document.getElementById("button")
//Variables
let url = "https://api.thedogapi.com/v1/images/search?limit=10"
let container = document.getElementById("imageContainer")

//Grab Data
fetch(url)
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {

    for (let x = 0; x < data.length; x++) {
      let img = document.createElement("img")
      img.src = data[x].url
      container.appendChild(img)
      
    }
  })

//End

let url2 = "https://pokeapi.co/api/v2/pokemon/ditto"


let container2 = document.getElementById("imageContainer2")
console.log(document.getElementById("imageContainer2"))



fetch(url2)
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    console.log(data)
    console.log(data.species.url);


    // for(let y = 0; y < 18; y++)
    for (let y = 0; y < Object.keys(data).length; y++) {
      let img2 = document.createElement("img")
      console.log(data.sprites.other.dream_world.front_default)
      img2.src = data.sprites.other.dream_world.front_default
      console.log(img2)
      console.log(container2)
      container2.appendChild(img2)
      console.log(container2)
    }
  })

 reloadButton.addEventListener("click", pokemon)

 function pokemon() {
   location.reload();
 }
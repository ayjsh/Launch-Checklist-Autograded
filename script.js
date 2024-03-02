// Write your JavaScript code here!

window.addEventListener("load", function() {
    let form = document.getElementById("launchForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
      let document = window.document;
      let pilotInput = document.querySelector("input[name=pilotName]");
      let copilotInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoLevelInput = document.querySelector("input[name=cargoMass]");
      let list = document.getElementById("faultyItems");
        if (
            pilotInput.value === "" ||
            copilotInput.value === "" ||
            fuelLevelInput.value === "" ||
            cargoLevelInput.value === "") 
        {
            alert("All fields are required!");
              
        } else {
        formSubmission(document, list, pilotInput.value, copilotInput.value, fuelLevelInput.value, cargoLevelInput.value);
        }
    });


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        // console.log(listedPlanets);
    }).then(function () {
        // console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
          let planet = pickPlanet(listedPlanets);
          let name = planet.name;
          let diameter = planet.diameter;
          let star = planet.star;
          let distance = planet.distance;
          let moons = planet.moons;
          let imageUrl = planet.image;
          addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
    });
 }); 


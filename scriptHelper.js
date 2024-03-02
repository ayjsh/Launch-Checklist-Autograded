// Write your helper functions here!

require('cross-fetch/polyfill');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
//     // Here is the HTML formatting for our mission target div.
//     /*
    let planetName = name;
    let planetDiameter = diameter;
    let planetStar = star;
    let planetDistance = distance;
    let planetMoons = moons;
    let planetImageURL = imageUrl;
    document.getElementById("missionTarget")
      .innerHTML =
                `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name:${planetName} </li>
                     <li>Diameter:${planetDiameter} </li>
                     <li>Star: ${planetStar}</li>
                     <li>Distance from Earth: ${planetDistance}</li>
                     <li>Number of Moons: ${planetMoons}</li>
                 </ol>
                 <img src="${planetImageURL}">`;
//     */
 }
  
 function validateInput(testInput) {
    let input = testInput;
    if (input === "") {
        return "Empty";
    } else if (isNaN(input) === false) {
        return "Is a Number"; 
    } else {
        return "Not a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let launchStatus = document.getElementById("launchStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let newList = list;
    // let newPilotName = pilot;
    // let newCopilotName = copilot;
    // let newFuelLevel = Number(fuelLevel.value);
    // let newCargoLevel = Number(cargoLevel.value);
        if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" ||
        validateInput(cargoLevel) === "Empty") {
            return;
        } else { 
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`; 
        newList.style.visibility = "hidden";
        };
            if (validateInput(fuelLevel) === "Is a Number" && validateInput(cargoLevel) === "Is a Number") {
                if (cargoLevel > 10000 && fuelLevel < 10000) {
                    newList.style.visibility = "visible"; 
                    fuelStatus.innerHTML = "Fuel level too low for launch";
                    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
                    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                    launchStatus.style.color = "red";
                } else if (fuelLevel < 10000) {
                    newList.style.visibility = "visible"; 
                    fuelStatus.innerHTML = "Fuel level too low for launch";
                    cargoStatus.innerHTML = "Cargo mass low enough for launch";
                    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                    launchStatus.style.color = "red";      
                } else if (cargoLevel > 10000) {
                    newList.style.visibility = "visible";
                    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
                    fuelStatus.innerHTML = "Fuel level high enough for launch";
                    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                    launchStatus.style.color = "red";    
                    } else { 
                    newList.style.visibility = "visible";
                    cargoStatus.innerHTML = "Cargo mass low enough for launch";
                    fuelStatus.innerHTML = "Fuel level high enough for launch";
                    launchStatus.innerHTML = "Shuttle is Ready for Launch";
                    launchStatus.style.color = "green";  
                }
            } else {
                return;
            };          
}

 
 async function myFetch() {
     let planetsReturned;
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json()
     });
      return planetsReturned;      
 }
 
 function pickPlanet(planets) {
    let pickedPlanet = Math.floor(Math.random() * planets.length);
    return planets[pickedPlanet];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;

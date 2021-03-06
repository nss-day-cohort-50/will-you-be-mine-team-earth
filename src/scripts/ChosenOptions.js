//refer to cars-r-us orders.js
//need to set up the html that is triggered by clicking purchase button
 
import { getOrderBuilder, getFacilityMinerals, getFacilities } from "./database.js"


//a fucntion to match the name of the facility to the id of the transient state
const orderBuilder = getOrderBuilder()





const findChosenFacility = () => {
    const facilities = getFacilities()
    let chosenFacility = ""
    for (const facility of facilities) {
        if (facility.id === orderBuilder.facilityId) {
            chosenFacility = facility.name
        }
    }

    return chosenFacility
}

//a fucntion to match the name of the mineral to the id of the transient state
const findChosenMineral = () => {
    const facilityMinerals = getFacilityMinerals()
    let chosenMineral = ""
    for (const mineral of facilityMinerals) {
        if (mineral.id === orderBuilder.facilityMineralId) {
            chosenMineral = mineral.type
        }
    }

    return chosenMineral
}


// //a fucntion to match the name of the mineral to the id of the transient state
export const ChosenOptions = () => {
const chosenOptions = document.getElementById("choices")
const chosenFacility =  findChosenFacility()
const chosenMineral =  findChosenMineral()
let html = `<div>1 ton of ${chosenMineral} from ${chosenFacility}</div>`
chosenOptions.innerHTML += html

return chosenOptions.innerHTML
}
    

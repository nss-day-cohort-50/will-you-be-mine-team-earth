import { getOrderBuilder, getFacilityMinerals, getFacilities } from "./database.js"


// document.addEventListener(
//     "click",
//     (event) => {
//         const itemClicked = event.target.name
//         if (itemClicked === "mineral") {
//         const chosenMineral = 
//         const mineralList = document.getElementById(mineralListId)
//         mineralList.innerHTML = minerals
//         setFacility(parseInt(mineralListId))
//         }
//     }
// )


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
    debugger
const chosenOptions = document.getElementsByClassName("choices")
const chosenFacility =  findChosenFacility()
const chosenMineral =  findChosenMineral()
let html = chosenOptions.innerHTML 
html += `<div>1 ton of ${chosenMineral} from ${chosenFacility}</div>`

return html
}
    
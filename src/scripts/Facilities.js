import { getFacilities } from "./database.js"
import { getOrderBuilder } from "./database.js"
import { facilityMinerals } from "./FacilityMinerals.js"

//captures event click and creates a var with id of event target
//calls facilityMinerals to render minerals radio list in the element with 
//same id number-string as event.target displaying the minerals below the button clicked
document.addEventListener(
    "click",
    (event) => {
        const itemClicked = event.target
        if (itemClicked.id.startsWith("facility")) {
        const [,mineralListId] = itemClicked.id.split("--")
        const minerals = facilityMinerals()
        const mineralList = document.getElementById(mineralListId)
        mineralList.innerHTML = minerals
        }
    }
)


//import builder object and save in var state
//state hold governorId after governor has been selected by users
//the governor id is checked and then the button are rendered usable
const facilities = getFacilities()
export const FacilityList = () => {
    const state = getOrderBuilder()
    let html = `
    <div class="facilityList">`

    const facilitiesArray = facilities.map(
        (facility) => {
            if (facility.isActive) {
                return `
                <div class="facilityId--${facility.id}">
                <h1>${facility.name}</h1>
                <button ${state.governorId > 0 ? "" : "disabled"}
                class="facility__selector" 
                id="facility--${facility.id}">
                ${facility.name} is Open <br></br> Enter and Collect Thy Metals  </button>
                <div id="${facility.id}"></div>
                </div>`
            } else {
                return `<div class="facilityId--${facility.id}"><h1>${facility.name}</h1> </div>`
            }
        }
    ) 
    html += facilitiesArray.join("")
    html += `</div>`
    return html
}



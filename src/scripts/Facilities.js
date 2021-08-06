import { getFacilities } from "./database.js"
import { getOrderBuilder } from "./database.js"



// document.addEventListener(
//     "click",
//     (event) => {
        
//         const itemClicked = event.target
//         if (itemClicked.class = "portal") {  
//             const id = ".facilityMineralId--" + event.target.value
//             let el = document.querySelector(id)
//             el.innerHTML = `<h1>fooook</h1>`
//         }
//     }
// )


const facilities = getFacilities()
export const FacilityList = () => {
    const state = getOrderBuilder()
    console.log(state)
    let html = `
    <div class="facilityList">`

    const facilitiesArray = facilities.map(
        (facility) => {
            if (facility.isActive) {
                debugger
                return `
                <div class="facilityId--${facility.id}">
                <h1>${facility.name}</h1>
                <button ${state.governorId > 0 ? "" : "disabled"}
                class="facility__selector" 
                id=facility--"${facility.id}">
                ${facility.name} is Open <br></br> Enter and Collect Thy Metals  </button>
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



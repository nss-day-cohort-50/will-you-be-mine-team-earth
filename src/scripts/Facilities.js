
//facilities active only enabled when gov is chosen

//when choose facility --> current mineral names/amounts displays
//If mineral amount = 0, don't display

//HOW DOES IT DISPLAY? render entire radio buttion list beneath button when clicked.

//click new facility button, previously rendered facility's list should disappear

import { getFacilities } from "./database.js"

const facilities = getFacilities()

export const FacilityList = () => {
    
    let html = `<div class="facilityList">`

    const facilitiesArray = facilities.map(
        (facility) => {
            return `<div><button name="portal-1" value="${facility.id}"> ${facility.name} <br></br> Enter the Portal and Collect Thy Metals  </button></div>`

        }

    ) 
    html += facilitiesArray.join("")
    html += `</div>`
    return html
}



import { getFacilities } from "./database.js"
import { Minerals } from "./Minerals.js"


document.addEventListener(
    "click",
    (event) => {
        debugger
        const itemClicked = event.target
        const id = ".facilityMineralId--" + event.target.value
        if (itemClicked.class = "portal") {
            window.alert('fuuouk')  
            let el = document.querySelector(id)
            el.innerHTML = "Minerals()"
        }
    }
)


const facilities = getFacilities()
export const FacilityList = () => {
    let html = `
    <div class="facilityList">`

    const facilitiesArray = facilities.map(
        (facility) => {
            if (facility.isActive) {
                return `<div class="facilities"><h1>${facility.name}</h1><button class="portal--${facility.id}" value="${facility.id}">${facility.name} is Open <br></br> Enter and Collect Thy Metals  </button></div><div class="facilityMineralId--${facility.id}>`
            } else {
                return `<div class="facilityMineralId--${facility.id}"><h1>${facility.name}</h1>`
            }
        }

    ) 
    html += facilitiesArray.join("")
    html += `</div>`
    return html
}



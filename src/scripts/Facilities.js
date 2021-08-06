import { getFacilities } from "./database.js"


document.addEventListener(
    "click",
    (event) => {
        const itemClicked = event.target
        const id = ".facilityMineralId--" + event.target.value
        if (itemClicked.class = "portal") {  
            let el = document.querySelector(id)
            //el.innerHTML = ""
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
                return `<div class="facilityMineralId--${facility.id}"><h1>${facility.name}</h1><button class="portal--${facility.id}" value="${facility.id}">${facility.name} is Open <br></br> Enter and Collect Thy Metals  </button></div><div class="facilityMineralId--${facility.id}></div>`
            } else {
                return `<div class="facilityMineralId--${facility.id}"><h1>${facility.name}</h1> </div>`
            }
        }
    ) 
    html += facilitiesArray.join("")
    html += `</div>`
    return html
}



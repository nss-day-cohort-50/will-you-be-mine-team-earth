import { Governors } from "./Governors.js"
import { FacilityList } from "./Facilities.js"
// import { Colonies } from "./Colonies.js"
// import { availableResources } from "./database.js"

export const BeMine = () => {
    return `
    <h1>Active Mining Facilities</h1>
        ${FacilityList()}


        <form class="governors">
            ${Governors()}
        </form>
    `   
}





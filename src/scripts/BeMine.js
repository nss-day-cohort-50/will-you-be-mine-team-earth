import { Governors } from "./Governors.js"
import { FacilityList } from "./Facilities.js"


export const BeMine = () => {
    return `
    <h1>Active Mining Facilities</h1>
        ${FacilityList()}

    <h1>You have chosen the following minerals</h1>
    <div id="choices"></div>
        <form class="governors">
            ${Governors()}
        </form>
    `   
}





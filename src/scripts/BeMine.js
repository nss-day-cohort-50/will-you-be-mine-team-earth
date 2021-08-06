import { Minerals } from "./Minerals.js"
import { Governors } from "./Governors.js"

import { FacilityList } from "./Facilities.js"
// import { Colonies } from "./Colonies.js"
// import { availableResources } from "./database.js"

export const BeMine = () => {
    return `
    <h1>Active Mining Facilities</h1>
        ${FacilityList()}
        </div>


    <article class="orderBuilder"> 
    <h2>Chosen Minerals</h2>
       
    </article>


    <article class="governorsAndAvailableResources">


    <article>
     <button id="orderButton">Purchase All Minerals</button>
    </article>

    <article class="governorsAndAvailableResources">

    <form class="governors">
        ${Governors()}
        </select>
    </form>
    <div class="availableResources">
    <h2>Available Resources for Colony</h2>
   
    </div>

    </article>
    `
}





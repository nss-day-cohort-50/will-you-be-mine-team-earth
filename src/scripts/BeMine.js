import { Governors } from "./Governors.js"
import { FacilityList } from "./Facilities.js"
// import { Colonies } from "./Colonies.js"
// import { availableResources } from "./database.js"

export const BeMine = () => {
    return `
    <h1>Active Mining Facilities</h1>
        ${FacilityList()}

    <article class="governorsColonyAvailableResources">
       
    <form class="governors">
            ${Governors()}
        </form>

        <div class="ColonyAvailableResources">
            <h3>Your Colony's Mineral Inventory</h3>
            ${ColonyAvailableResources()}
        </div>
        
    </article>
    `   
}


//CT- Article wrapped around governer form and colony permanent state renderding div for flexbox purposes


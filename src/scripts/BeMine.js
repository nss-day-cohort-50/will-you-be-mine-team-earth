import { Governors } from "./Governors.js"
import { FacilityList } from "./Facilities.js"
import { ColonyAvailableResources } from "./ChosenOptions.js"

export const BeMine = () => {
    return `
    <h1>Active Mining Facilities</h1>
        ${FacilityList()}

   
    <div id="choices"></div>
        <form class="governors">
            ${Governors()}
        </form>

        <article class="mineralsPurchased">
        <h2>You have chosen the following minerals</h2>
        <section>
            <button id="purchaseButton">Purchase All Minerals</button>
        </section>
        </article>

        <article class="colonyResources">
        <h2>Available Resources For Colony</h2>
            ${ColonyAvailableResources()}
        </article>
    `   
}





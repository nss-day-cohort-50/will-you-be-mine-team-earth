import { Governors } from "./Governors.js"
import { FacilityList } from "./Facilities.js"
import { ColonyAvailableResources } from "./ChosenOptions.js"

export const BeMine = () => {
    return `
    <h1>Mining Marketplace</h1>
        ${FacilityList()}

        <article class="chosenMinerals">
        <h2>You have chosen the following minerals</h2>
        <div id="choices"></div>
            <button id="purchaseButton">Purchase All Minerals</button>     
        </article>

        <aside class="aside">
        <form class="governors">
            ${Governors()}
        </form>
            <section class="purchasedMinerals">
        <h2>Available Resources For Colony</h2>
            ${ColonyAvailableResources()}
            </section>
        </aside>
    `   
}




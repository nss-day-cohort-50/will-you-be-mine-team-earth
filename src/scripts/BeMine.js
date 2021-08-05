import { Minerals } from "./Minerals.js"
import { Governors } from "./Governors.js"
import { Facilities } from "./Facilities.js"
import { Colonies } from "./Colonies.js"
import { availableResources } from "./database.js"

export const BeMine = () => {
    return `
    <h1>Active Mining Facilities</h1>

    <article class="facilities">
       
        <div class="facilityList">
            ${facilityList()}
        </div>

    </article>

    <article class="orderBuilder"> 
    <h2>Chosen Minerals</h2>
        ${orderBuilder()}
    </article>

    <article>
     <button id="orderButton">Purchase All Minerals</button>
    </article>

    <article class="governorsAndAvailableResources">

    <article class="facilities">
        <div class="facility--1">
          <h2>Facility 1</h2>
          <button id="btn-facility-1">Choose Minerals</button>
          <div id="minerals_1"></div>
        </div>
        <div class="facility--2">
            <h2>Facility 2</h2>
            ${Minerals()}
        </div>
        <div class="facility--3">
            <h2>Facility 3</h2>
            ${Minerals()}
        </div>
        <div class="facility--4">
            <h2>Facility 4</h2>
            ${Minerals()}
        </div>
    </article>

    <form class="governors">
        ${Governors()}
        </select>
        <br><br>
        <input type="submit" value="Submit">
    </form>
    <div class="availableResources">
    <h2>Available Resources for Colony</h2>
    ${}
    </div>

    </article>
    `
}

    `



import { Minerals } from "./Minerals.js"
import { Governors } from "./Governors.js"
import { Facility } from "./Facilities.js"



export const BeMine = () => {
    return `
    <h1>Active Mining Facilities</h1>
    <article class="facilities">
        <div class="facility--1">
          <h2>Facility 1</h2>
          <button id="btn-facility-1">Choose Minerals</button>
          <div id="minerals_1"></div>
        </div>
        <div class="facility--2">
            ${Facility(11, "Portal One")}
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
    </form>
    `
}
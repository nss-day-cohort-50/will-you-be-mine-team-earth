import { Minerals } from "./Minerals.js"



export const BeMine = () => {
    return `
    <h1>Active Mining Facilites</h1>
    <article class="facilites">
        <div class="facility--1">
          <h2>Facility 1</h2>
            ${Minerals()}
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
    </article>`

}
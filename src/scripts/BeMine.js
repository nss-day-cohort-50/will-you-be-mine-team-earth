import { Minerals } from "./Minerals.js"



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
        <label for="governors">Choose a Governor:</label>

        <select name="governers" id="governors" required autofocus>
            <option value="omni-man">Omni-man</option>
            <option value="doc-seismic">Doc Siesmic</option>
            <option value="doc-seismic">Doc Siesmic</option>
            <option value="allen-the-alien">Allen the Alien</option>
            <option value="atom-eve">Atom Eve</option>
            <option value="machine-head">Machine Head</option>
        </select>
        <br><br>
        <input type="submit" value="Submit">
    </form>
    `
}
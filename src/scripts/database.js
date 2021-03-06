const database = {
    facilityMinerals: [
        {id: 1, type: "sneezium", stock: 8},
        {id: 2, type: "meethril", stock: 8},
        {id: 3, type: "adimantium", stock: 8 },
        {id: 4, type: "hopium", stock: 8},
    ],
    governors: [

        {id: 1, name: "Omni-man", isActive: true, colonyId: 4 },
        {id: 2, name: "Machine Head", isActive: true, colonyId: 3},
        {id: 3, name: "Atom Eve", isActive: false, colonyId: 2},
        {id: 4, name: "Allen the Alien", isActive: true, colonyId: 1}
    ], 
    colonies: [
        {id: 1, name: "Stevetopia"},
        {id: 2, name: "Scottsville"},
        {id: 3, name: "Ericopolis"},
        {id: 4, name: "Abyss"}
    ],
    facilities: [
        {id: 1, name: "Portal 1",  isActive: true},
        {id: 2, name: "Portal 2",  isActive: true},
        {id: 3,name: "Portal 3",  isActive: true},
        {id: 4, name: "Portal 4", isActive: true} 
    ],
    coloniesMinerals: [
        {id: 1, colonyId: 1, mineralType: "sneezium", mineralStock: 6 },
        {id: 2, colonyId: 4, mineralType: "hopium", mineralStock: 1 }
    ],
    // availableResources: [{id: 1, mineralType: "sneezium", mineralStock: 8}],

    orderBuilder: {} //hint from slack:  property:key pairs of {chosenGovernor: integer, selectedFacility: integer, selectedMinerals: []


    }


    export const getFacilityMinerals = () => {
        return database.facilityMinerals.map(facilityMineral => ({...facilityMineral}))
    }
    export const getGovernors = () => {
        return database.governors.map(governor => ({...governor}))
    }

    export const getColonies = () => {
        return database.colonies.map(colony => ({...colony}))
    }
    export const getFacilities = () => {
        return database.facilities.map(facility => ({...facility}))
    }

    export const getColoniesMinerals = () => {
        return database.coloniesMinerals.map(colonyMineral => ({...colonyMineral}))
    }

    export const setFacilityMineral = (id) => {
        database.orderBuilder.facilityMineralId = id
    }
    export const setFacility = (id) => {
        database.orderBuilder.facilityId = id
    }
    export const setGovernor = (id) => {
        database.orderBuilder.governorId = id
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
    export const setColony = (id) => {
        database.orderBuilder.colonyId = id
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
    export const getOrderBuilder = () => {
        return database.orderBuilder
    }
    
    export const addPurchase = () => {
        let lastIndex = 0
    console.log(database.coloniesMinerals.length)

    const newOrder = {...database.orderBuilder}
    newOrder.id = database.coloniesMinerals[lastIndex].id + 1
    database.coloniesMinerals.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}


// if (database.coloniesMinerals.length === 0) {
//     let lastIndex = 0
// } else {
//     let lastIndex = database.coloniesMinerals.length - 1
// }  
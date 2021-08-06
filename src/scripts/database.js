const database = {
    minerals: [
        {id: 1, type: "sneezium", stock: 8},
        {id: 2, type: "meethril", stock: 8},
        {id: 3, type: "adimantium", stock: 8 },
        {id: 4, type: "hopium", stock: 8},
    ],
    governors: [

        {id: 1, name: "Omni-man", isActive: true, colonyId: 1 },
        {id: 2, name: "Machine Head", isActive: true, colonyId: 2},
        {id: 3, name: "Atom Eve", isActive: false, colonyId: 3},
        {id: 4, name: "Allen the Alien", isActive: true, colonyId: 4}
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
        {id: 4, name: "Portal 4", isActive: false} 
    ],

    availableResources: [],

    orderBuilder: {} //hint from slack:  property:key pairs of {chosenGovernor: integer, selectedFacility: integer, selectedMinerals: []


    }


    export const getMinerals = () => {
        return database.minerals.map(mineral => ({...mineral}))
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


    export const setMineral = (id) => {
        database.orderBuilder.mineralId = id
    }
    export const setFacility = (id) => {
        database.orderBuilder.facilityId = id
    }
    export const setGovernor = (id) => {
        debugger
        database.orderBuilder.governorId = id
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
    export const getOrderBuilder = () => {
        return database.orderBuilder
    }
    
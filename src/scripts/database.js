const database = {
    minerals: [
        {id: 1, type: "sneezium", stock: 8},
        {id: 2, type: "meethril", stock: 8},
        {id: 3, type: "adimantium", stock: 8 },
        {id: 4, type: "hopium", stock: 8},
    ],
    governors: [
        {id: 1, name: "Omni-Man", isActive: true},
        {id: 2, name: "Machine Head", isActive: true},
        {id: 3, name: "Atom Eve", isActive: false},
        {id: 4, name: "Allen the Alien", isActive: true},
        {id: 5, name: "Dupli-Kate", isActive: false}
    ],
    facilities: [
        {id: 1, name: "Portal 1", isActive: true}
    ]

    }


    export const getMinerals = () => {
        return database.minerals.map(mineral => ({...mineral}))
    }
    export const getGovernors = () => {
        return database.governors.map(governor => ({...governor}))
    }
    export const getFacilities = () => {
        return database.facilities.map(facility => ({...facility}))
    }
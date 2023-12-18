const {
    trails,
    rivers
}= require("./data.js")

// Get the sum of all trail miles
const totalTrailMiles = () => {
    let total = 0
    for (const trail of trails) {
        total += trail.length
    }

    return Math.round(total)
}

// Get the shortest of all trails
const shortestTrail = (trailArray) => {
    let shortest = Math.max(trails.length)
    for (const trail of trailArray) {
        if(trail.length < shortest) {
            shortest = trail.length
        }
    }

    return shortest
}

// Get the longest of all trails
const longTrail = (allTrails) => {
    let longest = 0
    for (const trail of allTrails) {
        if(trail.length > longest) {
            longest = trail.length
        }
    }

    return longest
} 

const totalRiverMiles = () => {
    let total = 0
    for (const river of rivers) {
        total += river.length
    }

    return(Math.round(total)) 
} 



//get the shortest river 
const shortestRiver = () => {
    let shortest = Math.max(rivers.length)
    for (const river of rivers) {
        if(river.length< shortest){
        shortest = river.length
    }
}
    return(shortest)
}


//get the longest river
const longestRiver = () => {
    let longest = Math.max(rivers.length)
    for (const river of rivers) {
        if(river.length>longest){
        longest = river.length
        }
    }
    return (longest)
}



const leastExpensiveTrails = () => {
    const leastExpensiveTrailNames = []
    for (const trail of trails) {
        if (trail.price === "$") {
            leastExpensiveTrailNames.push("\n" + "\t" + trail.trailName)
        }
    }
    return leastExpensiveTrailNames

}

const mostExpensiveTrails = () => {
    const mostExpensiveTrailNames = []
    for (const trail of trails) {
        if (trail.price.length >= 4){
            mostExpensiveTrailNames.push("\n" + "\t" + trail.trailName)
        }
    }
    return mostExpensiveTrailNames
}


const leastExpensiveRiver = () => {
    const leastExpensiveRiverNames = []
    for (const river of rivers) {
        if (river.price === "$") {
            leastExpensiveRiverNames.push("\n" + "\t" + river.river)
        }
    }
    return leastExpensiveRiverNames

}

const mostExpensiveRiver = () => {
    const mostExpensiveRiverNames = []
    for (const river of rivers) {
        if (river.price.length >= 4){
            mostExpensiveRiverNames.push("\n" + "\t" + river.river)
        }
    }
    return mostExpensiveRiverNames.join("")
}
const getTrailDetails = () => {
    for (const trail of trails) {
    console.log(`${trail.trailName}starts at [${trail.latitude}, ${trail.longitude}] and is ${trail.length} long. \nThe highlighted plant for the trip is ${trail.plantHighlight} \n`)
    }
}



const getRiverDetails = () => {
    for (const river of rivers) {
    console.log(`${river.river} starts at [${river.latitude}, ${river.longitude}] and is ${river.length} long. \nThe highlighted plant for the trip is ${river.plantHighlight} \n`)
    }
}

module.exports = {
    totalTrailMiles, shortestTrail, longTrail, 
    totalRiverMiles, shortestRiver, longestRiver, 
    leastExpensiveTrails, mostExpensiveTrails, leastExpensiveRiver,
    mostExpensiveRiver, getTrailDetails, getRiverDetails

}


// What did you do yesterday?
// What will you do today?
// What (if anything) is blocking your progress?
// green to red
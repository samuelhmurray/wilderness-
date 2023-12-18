const {
    totalTrailMiles, shortestTrail, longTrail, 
    totalRiverMiles, shortestRiver, longestRiver, 
    leastExpensiveTrails, mostExpensiveTrails, leastExpensiveRiver,
    mostExpensiveRiver, getTrailDetails, getRiverDetails
} = require("./functions.js")
const {
    wildlife, rivers, trails  
} = require("./data.js")


console.log(`
    B J Ö R N ' S   W I L D N E R N E S S   A D V E N T U R E S
    ***********************************************************

                                                        ###
        ______                                         #o###
       /     /\\      (            ______            #####o###
      /     /  \\      )          /     /\\         #o# #|#/###
     /_____/----\\_    (          /     / \\         ### |/#o#
    '     '          ).         /_____/---- _         # }|{\\#
   _ ___          O (:') o     '  '     '   '           }|{
  (@))_))        O ~/~~ ~ o                             }|{
                  o     O                         ____/    \\____
                     O
`)


console.log('***************************************************')
console.log('*****              T R A I L S                *****')
console.log('***************************************************')
const trailTotal = totalTrailMiles(trails)
console.log(`We service ${trailTotal} kilometers of wilderness trails across the US`)

const shortTrail = shortestTrail(trails)
console.log(`The shortest trail is ${shortTrail} kilometers`)

const longest = longTrail(trails)
console.log(`The longest trail is ${longest} kilometers`)

let totalRiverMil = totalRiverMiles()

let shortestRiv = shortestRiver()

let longestRiv = longestRiver()

console.log("***************************************************")
console.log('*****              R I V E R S                *****')
console.log('***************************************************')

console.log(`We offer expert guidance on ${totalRiverMil} kilometers of scenic rivers across the US`)
console.log(`The shortest river tour is ${shortestRiv} kilometers`)
console.log(`The longest river tour is ${longestRiv} kilometers`)


const mostExpTra  = mostExpensiveTrails()
const leastExpTra = leastExpensiveTrails()
console.log("***************************************************")
console.log('*****              TRAIL PRICE                *****')
console.log("***************************************************")


console.log(`The least expensive trails are ${leastExpTra} \n`)
console.log(`The most expensive trails are ${mostExpTra}\n`)


const mostExpRiv  = mostExpensiveRiver()
const leastExpRiv = leastExpensiveRiver()



console.log("***************************************************")
console.log('*****              RIVER PRICE                *****')
console.log("***************************************************")


console.log(`The least expensive rivers are ${leastExpRiv} \n`)
console.log(`The most expensive rivers are ${mostExpRiv} \n`)



console.log("***************************************************")
console.log('*****                 TRAILS                  *****')
console.log('***************************************************\n')


getTrailDetails()

console.log("***************************************************")
console.log('*****                 RIVERS                  *****')
console.log('***************************************************\n')



getRiverDetails()
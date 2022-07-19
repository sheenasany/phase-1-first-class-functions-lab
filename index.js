const returnFirstTwoDrivers = function(firstTwo) {
    return firstTwo.slice(0, 2)
}

const returnLastTwoDrivers = function(lastTwo) {
    return lastTwo.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return function(fare) {
        return fare * integer
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array, drivers) {
    return drivers(array)
}
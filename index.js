const ourBlock = 42

function distanceFromHqInBlocks(theirBlock){
        if (theirBlock > ourBlock) { 
            return theirBlock - ourBlock
        } else  {
            return ourBlock - theirBlock
}}

const blockFeet = 264
const rate1 = .02
const flatFee = 25
const freeFeet = 400

function distanceFromHqInFeet(theirFeet) {
    return distanceFromHqInBlocks(theirFeet) * blockFeet
}

function distanceTravelledInFeet(startBlock, finishBlock){
    return (distanceFromHqInFeet(finishBlock) - distanceFromHqInFeet(startBlock))
}
function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance < freeFeet){
        return 0;
    } else if (distance>freeFeet && distance<2000){
        return (distance - freeFeet) * rate1;
    } else if (distance>2000 && distance<2500){
            return flatFee
    } else if (distance>2500) {
        return 'cannot travel that far'
    }

    }
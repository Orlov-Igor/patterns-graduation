const TimeCostStrategy = require( "./TimeCostStrategy" );
const {GREAT_PHILOSOPHER_REDUCTION_FACTOR,
    MEDIUM_PHILOSOPHER_REDUCTION_FACTOR,
    LOW_SCIENTIST_INCREASE_FACTOR} = require( "../data/constants" );

class PhilosopherStrategy extends TimeCostStrategy {
    getTimeCost(timeCost, correspondingSkill, playerSkill) {
        let finalTimeCost = { ...timeCost };
        if (correspondingSkill === playerSkill) {
            finalTimeCost = {
                min: Math.floor(timeCost.min / GREAT_PHILOSOPHER_REDUCTION_FACTOR),
                max: Math.floor(timeCost.max / MEDIUM_PHILOSOPHER_REDUCTION_FACTOR)
            };
        } else {
            finalTimeCost = {
                min: timeCost.min,
                max: Math.floor(timeCost.max * LOW_SCIENTIST_INCREASE_FACTOR)
            };
        }
        return finalTimeCost;
    }
}

module.exports = PhilosopherStrategy;
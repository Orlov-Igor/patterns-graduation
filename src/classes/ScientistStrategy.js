const TimeCostStrategy = require( "./TimeCostStrategy" );
const {MEDIUM_SCIENTIST_REDUCTION_FACTOR, LOW_PHILOSOPHER_INCREASE_FACTOR} = require( "../data/constants" );

class ScientistStrategy extends TimeCostStrategy {
    getTimeCost(timeCost, correspondingSkill, playerSkill) {
        let finalTimeCost = { ...timeCost };
        if (correspondingSkill === playerSkill) {
            finalTimeCost = {
                min:Math.floor(timeCost.min / MEDIUM_SCIENTIST_REDUCTION_FACTOR),
                max: Math.floor(timeCost.max / MEDIUM_SCIENTIST_REDUCTION_FACTOR)
            };
        } else {
            finalTimeCost = {
                min:Math.floor(timeCost.min * LOW_PHILOSOPHER_INCREASE_FACTOR),
                max: Math.floor(timeCost.max * LOW_PHILOSOPHER_INCREASE_FACTOR)
            };
        }
        return finalTimeCost;
    }
}

module.exports = ScientistStrategy;
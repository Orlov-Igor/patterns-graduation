const TimeCostStrategy = require( "./TimeCostStrategy" );

class PhilosopherStrategy extends TimeCostStrategy {
    getTimeCost(timeCost, correspondingSkill, playerSkill) {
        let finalTimeCost = { ...timeCost };
        if (correspondingSkill === playerSkill) {
            finalTimeCost = {
                min: Math.floor(timeCost.min / 2.5),
                max: Math.floor(timeCost.max / 1.7)
            };
        } else {
            finalTimeCost = {
                min: timeCost.min,
                max: Math.floor(timeCost.max * 1.2)
            };
        }
        return finalTimeCost;
    }
}

module.exports = PhilosopherStrategy;
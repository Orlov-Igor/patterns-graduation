const TimeCostStrategy = require( "./TimeCostStrategy" );

class ScientistStrategy extends TimeCostStrategy {
    getTimeCost(timeCost, correspondingSkill, playerSkill) {
        let finalTimeCost = { ...timeCost };
        if (correspondingSkill === playerSkill) {
            finalTimeCost = {
                min:Math.floor(timeCost.min / 1.5),
                max: Math.floor(timeCost.max / 1.5)
            };
        } else {
            finalTimeCost = {
                min:Math.floor(timeCost.min * 1.1),
                max: Math.floor(timeCost.max * 1.1)
            };
        }
        return finalTimeCost;
    }
}

module.exports = ScientistStrategy;
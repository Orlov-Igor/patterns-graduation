class TimeCostStrategy {
    getTimeCost(timeCost, correspondingSkill, playerSkill) {
        throw new Error("This method must be overwritten!");
    }
}

module.exports = TimeCostStrategy;
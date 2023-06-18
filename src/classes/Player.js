const PhilosopherStrategy = require( "./PhilosopherStrategy" );
const ScientistStrategy = require( "./ScientistStrategy" );

class Player {
    constructor(skill) {
        this.skill = skill;
        if (skill === 1) {
            this.timeCostStrategy = new PhilosopherStrategy();
        } else if (skill === 2) {
            this.timeCostStrategy = new ScientistStrategy();
        }
    }

    getTimeCost(timeCost, correspondingSkill) {
        return this.timeCostStrategy.getTimeCost(timeCost, correspondingSkill, this.skill);
    }
}

module.exports = Player;
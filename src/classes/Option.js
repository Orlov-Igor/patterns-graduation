class Option {
    constructor({description, timeCost, nextEventId, correspondingSkill}) {
        this.description = description;
        this.timeCost = timeCost;
        this.nextEventId = nextEventId;
        this.correspondingSkill = correspondingSkill;
    }

    calculateTimeCost(player) {
        return player.getTimeCost(this.timeCost, this.correspondingSkill);
    }
}

module.exports = Option;


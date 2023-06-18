const Event = require('./Event');

class TimeMachine {
    constructor(eventsData, player) {
        this.player = player;
        this.eventDict = {};
        eventsData.forEach(eventData => {
            this.eventDict[eventData.id] = new Event(eventData, this.player);
        });
        this.currentEvent = this.eventDict[eventsData[0].id];
        this.hoursLeft = 1000;
    }

    makeChoice(choice) {
        let chosenOption = this.currentEvent.options[choice - 1];
        let timeCost = chosenOption.calculateTimeCost(this.player);
        let timeSpent = Math.floor(Math.random() * (timeCost.max - timeCost.min + 1) + timeCost.min);
        this.hoursLeft -= timeSpent;
        this.currentEvent = this.eventDict[chosenOption.nextEventId];
    }
}

module.exports = TimeMachine;

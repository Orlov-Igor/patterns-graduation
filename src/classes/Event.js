const Option = require('./Option');

class Event {
    constructor({id, year, description, options}, player) {
        this.id = id;
        this.year = year;
        this.description = description;
        if (options) {
            this.options = options.map(optionData => {
                const option = new Option(optionData);
                option.timeCost = option.calculateTimeCost(player);
                return option;
            });
        }
    }

    displayEvent() {
        console.log(`Рік: ${this.year}`);
        console.log(this.description);

        if(this.options) {
            console.log("\nВиберіть опцію, яку ви вважаєте найбільш доречною:");
            this.options.forEach((option, index) => {
                console.log(`${index + 1}. ${option.description} \n------Ви витратите на здійснення від: ${option.timeCost.min} до ${option.timeCost.max} годин------`);
            });
        }
    }
}

module.exports = Event;


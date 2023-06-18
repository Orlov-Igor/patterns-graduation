const readlineSync = require('readline-sync');
const eventsData = require('./data/events');
const TimeMachine = require('./classes/TimeMachine');
const Player = require('./classes/Player');
const {PROLOGUE, DISCHARGE} = require( "./data/constants" );

console.log("Оберіть клас персонажа: \n1. Філософ-екстреміст; \n2. Божевільний вчений;");
let skill = readlineSync.questionInt();

while (skill !== 1 && skill !== 2) {
    console.log("Невірний вибір класу. Спробуйте ще раз.");
    skill = readlineSync.questionInt();
}

const player = new Player(skill);
const timeMachine = new TimeMachine(eventsData, player);

console.log("\n--------------------------------------------------------------------------------------------------------------------------");
console.log(PROLOGUE);

while (true) {
    if (timeMachine.hoursLeft <= 0) {
        console.log(DISCHARGE);
        break;
    }

    if (timeMachine.currentEvent.year === 2023 || !timeMachine.currentEvent.options) {
        console.log(`\nРік: ${timeMachine.currentEvent.year}`);
        console.log(`Фінальна точка, ваша подорож завершена: ${timeMachine.currentEvent.description}`);
        break;
    }

    console.log(`\n-----Лишилося годин заряду: ${timeMachine.hoursLeft}-----`);

    timeMachine.currentEvent.displayEvent();

    const choice = readlineSync.questionInt("\nInput option number (1 or 2): ");

    if (choice < 1 || choice > 2) {
        console.log("Невірна опція. Спробуйте ще раз.");
        continue;
    }

    console.log("\n--------------------------------------------------------------------------------------------------------------------------");

    timeMachine.makeChoice(choice);
}

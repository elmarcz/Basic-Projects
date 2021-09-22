const year = prompt("Enter a year: ");
const month = prompt("Enter a month: ");
const day = prompt("Enter a day: ");
const hour = prompt("Enter an hour: ");
const seconds = prompt("Enter a second: ");
const minute = prompt("Enter a minute: ");

simplyCountdown('#cuenta', {
    year: year, // required
    month: month, // required
    day: day, // required
    hours: hour, // Default is 0 [0-23] integer
    minutes: minute, // Default is 0 [0-59] integer
    seconds: seconds, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: { singular: 'D', plural: '' },
        hours: { singular: 'H', plural: '' },
        minutes: { singular: 'M', plural: '' },
        seconds: { singular: 'S', plural: '' }
    },
    plural: false, //use plurals
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: true, //Use UTC or not - default : false
    onEnd: function() { return; }, //Callback on countdown end, put your own function here
    refresh: 1000, // default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: false,
    countUp: false
});

// Also, you can init with already existing Javascript Object.
let myElement = document.querySelector('.my-countdown');
simplyCountdown(myElement, { /* options */ });

let multipleElements = document.querySelectorAll('.my-countdown');
simplyCountdown(multipleElements, { /* options */ });

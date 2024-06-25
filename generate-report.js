const { Report, StoreManager } = require("./framework/store");
const { Activity } = require("./schemas");

const summary = (new Report(new StoreManager(Activity))).generate({
    start: {
        d: 25,
        m: 5,
        y: 2024
    },
    end: {
        d: 25,
        m: 6,
        y: 2024
    }
})
console.log(summary);
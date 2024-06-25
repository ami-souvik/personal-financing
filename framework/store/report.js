const DateTime = require("./statics/datetime");

class Report {
    constructor(manager) {
        this.manager = manager
        this.withdrawal = 0
        this.deposit = 0
    }
    generate(filter) {
        const { start, end } = filter
        const activities = this.manager.find()
        const filtered = Object.values(activities).filter(each => {
            if(DateTime.compare(start, each.date) <= 0 && DateTime.compare(end, each.date) >= 0) {
                return true
            }
        });
        filtered.forEach(each => {
            this.withdrawal += each.withdrawal
            this.deposit += each.deposit
        });
        return {
            withdrawal: this.withdrawal,
            deposit: this.deposit
        }
    }
}
module.exports = Report
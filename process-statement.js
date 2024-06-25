const fs = require('fs');
const INTERMITTENT = "INTERMITTENT"

const EXPENSE = "EXPENSE"
const { Activity } = require('./schemas');
const { store, StoreManager, statics } = require('./framework/store');

const data = fs.readFileSync('./assets/statement.txt', { encoding: 'utf8', flag: 'r' })
const manager = new StoreManager(Activity);
const rows = data.split('\n')
rows.slice(13, rows.length - 30).forEach(r => {
    const cells = r.split(',')
    manager.upsert({
        _id: store.ObjectId(`${cells[3]}${cells[1]}`),
        serial: cells[1],
        date: statics.DateTime.parse(cells[3]),
        salary: false,
        platform: null,
        frequency: INTERMITTENT,
        type: EXPENSE,
        satisfiedActivity: null,
        remarks: cells[5],
        withdrawal: Number(cells[6]),
        deposit: Number(cells[7]),
        balance: Number(cells[8]),
    })
})
manager.commit();
const fs = require('fs');
const { STORE_PATH } = require('./config')

class StoreManager {
    constructor(schema) {
        this.schema = (new schema);
        this.data = JSON.parse(fs.readFileSync(STORE_PATH, { encoding: 'utf8' }) || "{}")
    }
    upsert(data) {
        const { _id } = data
        if(!this.data[this.schema.name]) {
            this.data[this.schema.name] = {}
        }
        this.data[this.schema.name][_id] = data
    }
    find() {
        return this.data[this.schema.name]
    }
    commit() {
        var json = JSON.stringify(this.data);
        fs.writeFileSync(STORE_PATH, json, 'utf8');
    }
}

module.exports = StoreManager;
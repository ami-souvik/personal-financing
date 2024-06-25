const ObjectId = v => (typeof(v) === "string" ? v.padStart(16, "0") : JSON.stringify(v).padStart(16, "0"))

module.exports = {
    ObjectId
}
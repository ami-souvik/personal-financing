class DateTime {
    constructor(d, m, y) {
        this.d = d
        this.m = m
        this.y = y
    }
    static parse(datetime) {// 06/06/2023
        var parts = datetime.split('/')
        return {
            d: Number(parts[0]),
            m: Number(parts[1]),
            y: Number(parts[2])
        }
    }
    static compare(dt1, dt2) {
        if(dt1.y < dt2.y) {
            return -1;
        }
        else if(dt1.y > dt2.y) {
            return 1
        }
        else if(dt1.m < dt2.m) {
            return -1
        }
        else if(dt1.m > dt2.m) {
            return 1
        }
        else if(dt1.d < dt2.d) {
            return -1
        }
        else if(dt1.d > dt2.d) {
            return 1
        }
        else {
            return 0
        }
    }
}
module.exports = DateTime
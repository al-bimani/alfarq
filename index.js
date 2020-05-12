const isc = require('is-circular');

function _in(b, a) {
    let result = null;
    if (b && typeof b == "object") {
        if (isc(b)) {
            let err = new TypeError("circular structure not allowed");
            throw err;
        };
        result = b instanceof Array ? [] : {};
        for (let key in b) {
            if (!a) continue;
            let farq = _of(a[key]).in(b[key]);
            if (farq != null) result[key] = farq;
        }
    } else {
        result = a != b ? b : a == b ? null : a;
    }
    return result;
}

function _of(a) {
    return {
        in: function (b) {
            return _in(b, a)
        }
    }
}

module.exports = {
    of: (b) => _of(b)
}
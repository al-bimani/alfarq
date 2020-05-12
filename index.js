const isc = require('is-circular');

function _in(b, type, a, _of) {
    let result = null;
    if (b && typeof b == "object") {
        if (isc(a) || isc(b)) {
            let err = new TypeError("circular structure not allowed");
            throw err;
        };
        result = b instanceof Array ? [] : {};
        for (let key in b) {
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
        in: (something) => _in(something, typeof a, a, _of)
    }
}

module.exports = {
    of: (something) => _of(something)
}
function _in(b, type, a, _of) {
    let result = null;
    if (typeof b == type) {
        if (b && typeof b == "object") {
            result = b instanceof Array ? [] : {};
            for (let key in b) {
                let farq = _of(a[key]).in(b[key]);
                if (farq != null) result[key] = farq;
            }
        } else {
            result = a != b ? b : a == b ? null : a;
        }
    } else return null;
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
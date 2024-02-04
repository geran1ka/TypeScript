"use strict";
const div = (a, b, rounding) => {
    const res = a / b;
    if (rounding) {
        return Math.round(res);
    }
    return res;
};
div(15, 4, true);
div(15, 3, false);
div(10, 2);
const fetcData = (res) => {
    if (res.status === "pending") {
        res.status;
    }
    if (res.status === "success") {
        res.data;
    }
    if (res.status === "failed") {
        res.error;
    }
};

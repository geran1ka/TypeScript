"use strict";
let count;
count = 1;
let obj = null;
obj = {
    name: "Макс",
    age: 35,
};
const logger = (id) => {
    if (typeof id === "string") {
        console.log(id.charAt);
    }
    else {
        console.log(id.toFixed);
    }
    console.log(id);
};
const loggerObj = (obj) => {
    if ("a" in obj) {
        obj.a;
    }
    else {
        obj.b;
    }
};
const loggerError = (err) => {
    if (Array.isArray(err)) {
        for (const str of err) {
            str.toLowerCase();
        }
    }
    if (err instanceof Error) {
        console.log(err.message);
    }
    else {
        err.concat();
    }
};
const loggerError2 = (err) => {
    throw new Error(err);
};
const hole = null;
const vacuum = undefined;
const vacuum2 = undefined;

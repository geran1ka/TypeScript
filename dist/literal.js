"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const locale_1 = require("./locale");
const apiService = (url, method) => {
    fetch(url, {
        method,
    });
};
const method = "POST";
apiService("https//site.com", "GET");
const translate = (lang, text) => {
    //text переводим
    return text;
};
translate(locale_1.Locale.EN, "text");
translate(locale_1.Locale.RU, "text");
var TypeUser;
(function (TypeUser) {
    TypeUser["admin"] = "admin";
    TypeUser["moderator"] = "moderator";
    TypeUser["user"] = "user";
})(TypeUser || (TypeUser = {}));
var statusCode;
(function (statusCode) {
    statusCode["SUCCESS"] = "SUCCESS";
    statusCode["PROCESS"] = "PROCESS";
    statusCode["FAILED"] = "FAILED";
})(statusCode || (statusCode = {}));
console.log("statusCode: ", statusCode);
const res = {
    message: "Успех",
    statusCode: statusCode.SUCCESS,
};
if ((res.statusCode = statusCode.PROCESS)) {
    //preloader
}
if ((res.statusCode = statusCode.SUCCESS)) {
    //render
}
if ((res.statusCode = statusCode.FAILED)) {
    //error
}

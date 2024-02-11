"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
class Users {
    constructor() {
        this._userList = [];
        this.add = (user) => {
            this._userList.push(user);
        };
        this.remove = (id) => {
            const index = this._userList.findIndex((user) => user.id === id);
            if (index === -1)
                return false;
            this._userList.splice(index, 1);
            return true;
        };
    }
    get(id) {
        return this._userList.find((user) => user.id === id) || null;
    }
    sorted(sortType = "increase") {
        return this._userList.sort((a, b) => sortType === "increase" ? a.id - b.id : a.id - b.id);
    }
    sortedName(sortType = "increase") {
        return this._userList.sort((a, b) => {
            if (sortType === "increase") {
                return a.surname.concat(a.firstname) > b.surname.concat(b.firstname)
                    ? -1
                    : a.surname.concat(a.firstname) < b.surname.concat(b.firstname)
                        ? 1
                        : 0;
            }
            else {
                return a.surname.concat(a.firstname) > b.surname.concat(b.firstname)
                    ? 1
                    : a.surname.concat(a.firstname) < b.surname.concat(b.firstname)
                        ? -1
                        : 0;
            }
        });
    }
}
exports.Users = Users;

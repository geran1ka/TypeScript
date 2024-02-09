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
                if (a.surname < b.surname) {
                    return -1;
                }
                if (a.surname > b.surname) {
                    return 1;
                }
                if (a.firstname < b.firstname) {
                    return -1;
                }
                if (a.firstname > b.firstname) {
                    return 1;
                }
                return 0;
            }
            else {
                if (a.surname > b.surname) {
                    return -1;
                }
                if (a.surname < b.surname) {
                    return 1;
                }
                if (a.firstname > b.firstname) {
                    return -1;
                }
                if (a.firstname < b.firstname) {
                    return 1;
                }
                return 0;
            }
        });
    }
}
exports.Users = Users;

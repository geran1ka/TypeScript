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
}
exports.Users = Users;

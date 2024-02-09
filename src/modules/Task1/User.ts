interface User {
  id: number;
  firstname: string;
  surname: string;
  age: number;
}

export abstract class Users<T extends User> {
  protected _userList: T[] = [];

  public add = (user: T): void => {
    this._userList.push(user);
  };

  remove = (id: number): boolean => {
    const index: number = this._userList.findIndex((user) => user.id === id);
    if (index === -1) return false;

    this._userList.splice(index, 1);
    return true;
  };

  public get(id: number): T | null {
    return this._userList.find((user) => user.id === id) || null;
  }

  public sorted(sortType: "increase" | "decreasing" = "increase"): T[] {
    return this._userList.sort((a, b) =>
      sortType === "increase" ? a.id - b.id : a.id - b.id
    );
  }

  public sortedName(sortType: "increase" | "decreasing" = "increase"): T[] {
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
      } else {
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

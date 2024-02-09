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
}

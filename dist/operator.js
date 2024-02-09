"use strict";
{
    const filter = (arr, key, value) => {
        return arr.filter((item) => item[key] === value);
    };
    const filter1 = (arr, key, value) => {
        return arr.filter((goods) => goods[key] === value);
    };
    const filter2 = (arr, key, value) => {
        return arr.filter((goods) => goods[key] === value);
    };
    const categories = ["notebook", "e-book", "smartphone", "monitor"];
    class Cart {
        constructor() {
            this.goods = [];
        }
        add(item) {
            this.goods.push(item);
        }
        get(title) {
            return this.goods.find((item) => item.title === title) ?? null;
        }
        get TotalPrice() {
            return this.goods.reduce((acc, item) => acc + item.price * item.count, 0);
        }
    }
    class TechCard extends Cart {
    }
    const techCard = new TechCard();
    techCard.add({
        id: "dsadad",
        title: "Монитор Samsung",
        price: 3000,
        count: 3,
        description: "Лучший монитор 2020",
        type: "monitor",
    });
    techCard.add({
        id: "dsad",
        title: "Монитор As",
        price: 1000,
        count: 1,
        description: "Лучший монитор 2022",
        type: "smartphone",
    });
    const res = filter(techCard.goods, "id", "dsadad");
    console.log(res);
    const goodsO = {
        id: "dsadad",
        title: "Монитор Samsung",
        price: 3000,
        count: 3,
        description: "Лучший монитор 2020",
        type: "monitor",
    };
    const goods2 = {
        id: "dsad",
        title: "Монитор As",
        price: 1000,
        count: 1,
        description: "Лучший монитор 2022",
        type: "monitor",
    };
    const keys = "type";
}

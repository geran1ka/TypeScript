"use strict";
{
    const getCountGoods = (arr, title) => {
        const goods = arr.find((item) => item.title === title);
        return goods?.count ?? 0;
    };
    const goodsCount = [
        {
            title: "Компьютер",
            count: 10,
        },
        {
            title: "Планшет",
            count: 12,
        },
        {
            title: "Мышка",
            count: 1,
        },
        {
            title: "Смартфон",
            count: 20,
        },
    ];
    const countP = getCountGoods(goodsCount, "Смартфон");
    console.log("countP: ", countP);
    const countN = getCountGoods(goodsCount, "мышка");
    console.log("countN: ", countN);
}
{
    class HttpResponse {
        constructor(success, data, error) {
            this.success = success;
            if (data) {
                this.data = data;
            }
            if (error) {
                this.code = error;
            }
        }
    }
    const responseToken = new HttpResponse(true, 4656546);
    const responseUser = new HttpResponse(true, "fhdiuhjsdfsjdkjfn");
}
{
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
        id: "dsadad",
        title: "Монитор As",
        price: 1000,
        count: 1,
        description: "Лучший монитор 2022",
        type: "monitor",
    });
}

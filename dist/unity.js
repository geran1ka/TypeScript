"use strict";
{
    const title = ["notebook", "e-book", "smartphone", "monitor"];
    const listGoods = {
        monitor: {
            id: 123123,
            price: 2000,
            title: "monitor",
        },
        "e-book": {
            id: 12,
            price: 4000,
            title: "e-book",
            count: 10,
        },
        notebook: {
            id: 10,
            price: 4000,
            title: "notebook",
            count: 10,
        },
        smartphone: {
            id: 13,
            price: 4000,
            title: "smartphone",
            count: 10,
        },
    };
    const getGoods = (title, price, count) => {
        return {
            id: Math.floor(Math.random() * 10e8),
            title,
            price,
            count,
        };
    };
    const getGoods1 = ({ title, price, count }) => {
        return {
            id: Math.floor(Math.random() * 10e8),
            title,
            price,
            count,
        };
    };
    const goodsres = getGoods1({
        title: "fdsd",
        price: 20,
        count: 2,
    });
    const getGoods3 = () => fetch("https://api.com").then((response) => response.json());
    console.log("goodsres: ", goodsres);
}

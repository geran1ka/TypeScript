"use strict";
{
    const log = (val) => {
        console.log(val);
        return val;
    };
    // log("string");
    // log<string>("string"); //указание конкретного типа generic
    // log(5);
    // log<boolean>(!5);
}
{
    const log = (val, val2) => {
        console.log(val, val2);
        return val;
    };
    // log("string", 10);
    // log<string, string>("string", "str"); //указание конкретного типа generic
    // log(5, true);
    // log<boolean, number>(!5, 5);
}
{
    const arr = ["a", "b", "c"];
}
{
    // функция фильтрации
    const filterArr = (arr, exclude) => {
        return arr.filter((item) => !exclude.includes(item));
    };
    const result = filterArr([1, 2, 3, 4, 5], [1, 3, 5]);
    console.log("result: ", result);
}
{
    const filterArr = (arr, exclude) => {
        return arr.filter((item) => !exclude.includes(item));
    };
    const result = filterArr([1, 2, 3, 4, 5], [1, 3, 5]);
    console.log("result: ", result);
}
{
    const response = {
        success: true,
        error: false,
        data: [
            {
                id: 1215,
                title: "Капуста",
                count: 10,
            },
            {
                id: 1216,
                title: "Морковь",
                count: 12,
            },
        ],
    };
    const response2 = {
        success: true,
        data: [
            {
                name: "Иван",
                post: "Кладовщик",
            },
            {
                name: "Петр",
                post: "Сторож",
            },
        ],
    };
}
{
    const response = {
        success: true,
        error: false,
        data: [
            {
                id: 1215,
                title: "Капуста",
                count: 10,
            },
            {
                id: 1216,
                title: "Морковь",
                count: 12,
            },
        ],
    };
    const response2 = {
        success: true,
        data: [
            {
                name: "Иван",
                post: "Кладовщик",
            },
            {
                name: "Петр",
                post: "Сторож",
            },
        ],
    };
    const response3 = {
        success: true,
        data: "Заказ оформлен",
    };
}
{
    const response = {
        success: true,
        data: [
            {
                id: 1215,
                title: "Капуста",
                count: 10,
            },
            {
                id: 1216,
                title: "Морковь",
                count: 12,
            },
        ],
    };
    const response2 = {
        success: true,
        data: [
            {
                name: "Иван",
                post: "Кладовщик",
            },
            {
                name: "Петр",
                post: "Сторож",
            },
        ],
    };
    const response3 = {
        success: true,
        data: "Заказ оформлен",
    };
}

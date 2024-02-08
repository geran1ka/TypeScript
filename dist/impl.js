"use strict";
{
    class TV {
        constructor(title, price, count = 0) {
            this.title = title;
            this.id = +Date.now().toString().substring(2, 9);
            this.count = count;
            this.price = price;
        }
        logger(str) {
            console.log(str + this.title);
        }
    }
    class WM {
        constructor(title, price, count = 0, weight) {
            this.title = title;
            this.id = +Date.now().toString().substring(2, 9);
            this.count = count;
            this.price = price;
            this.wheight = weight;
        }
        logger(str) {
            console.log(str + this.title);
        }
    }
}

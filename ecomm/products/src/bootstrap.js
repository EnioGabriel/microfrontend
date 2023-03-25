import faker from "faker";

let products = '';

for (let index = 0; index < 5; index++) {
    const name = faker.commerce.product();

    products += `<div>${name}</div>`
}

document.querySelector("#dev-products").innerHTML = products;
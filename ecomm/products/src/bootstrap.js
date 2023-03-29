import faker from "faker";

const mount = (element) => {
    let products = '';

    for (let index = 0; index < 5; index++) {
        const name = faker.commerce.product();
        products += `<div>${name}</div>`
    }

    element.innerHTML = products;
};

// RUNNING ON LOCAL (STANDALONE)
if (process.env.NODE_ENV === 'development') {
    const element = document.querySelector("#dev-products");

    if (element) {
        mount(element);
    }

}

// RUNNING ON CONTAINER (SUPERAPP)
export { mount }
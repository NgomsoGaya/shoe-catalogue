const nameInput = document.querySelector("#name-input");
const brandInput = document.querySelector("#brand-input");
const colourInput = document.querySelector("#colour-input");
const sizeInput = document.querySelector("#size-input");
const priceInput = document.querySelector("#price-input");
const stockInput = document.querySelector("#stock-input");
const imageInput = document.querySelector("#image-input");
const addShoeBtn = document.querySelector("#add-shoe-btn");
const shoeForm = document.querySelector("form");
const formContainer = document.querySelector(".form-container");
const messageContainer = document.querySelector(".add-success-message");

async function addShoe(event) {
    event.preventDefault();

    try {
        const url = "http://localhost:3010/api/shoes";

        const settings = {
            method: "POST",
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameInput.value,
                brand: brandInput.value,
                colour: colourInput.value,
                size: Number(sizeInput.value),
                price: Number(priceInput.value),
                in_stock: Number(stockInput.value),
                img_src: imageInput.value
            })
        }

        const response = await fetch(url, settings);

        if (response.ok) {
            formContainer.classList.add("hide-element");
            messageContainer.classList.remove("hide-element");
        }
    }

    catch(err) {
        console.log(err.message)
    }
}

shoeForm.addEventListener("submit", addShoe)
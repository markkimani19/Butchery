// filepath: /home/mark/Personal-Projects/Business/src/index.js
import { fetchData } from './api/fetch.js';

document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.createElement('section');
    productContainer.id = 'product-list';
    document.body.appendChild(productContainer);

    fetchData().then(data => {
        data.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            const productImage = document.createElement('img');
            productImage.src = product.image;
            productImage.alt = product.name;

            const productName = document.createElement('h3');
            productName.textContent = product.name;

            const productDescription = document.createElement('p');
            productDescription.textContent = product.description;

            const productPrice = document.createElement('p');
            productPrice.textContent = `Price: $${product.price}`;

            productCard.appendChild(productImage);
            productCard.appendChild(productName);
            productCard.appendChild(productDescription);
            productCard.appendChild(productPrice);
            productContainer.appendChild(productCard);
        });
    }).catch(error => {
        console.error('Error fetching data:', error);
    });
});
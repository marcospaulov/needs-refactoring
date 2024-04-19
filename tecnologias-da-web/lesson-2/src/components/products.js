function productFactory({name, price, description, image: imageSource}){
    const div = document.createElement('div');
    div.innerHTML = `
        <figure>
            <img src="${imageSource}">
            <figurecaption>
                <h2>${name}</h2>
                <p>${description}</p>
                <span>Valor: R$ ${price.toFixed(2)}</span>
            </figurecaption>
        </figure>
    `;
    div.classList.add('product');

    return div;
}

const productContainer = document.getElementById('product-container');

const products = [{
    name: 'Product 1',
    image: '../images/mustang-1.jpg',
    price: 100,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
},
{
    name: 'Product 2',
    image: '../images/mustang-2.jpg',
    price: 200, 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
}
]

products.forEach(product => productContainer.appendChild(productFactory(product)));
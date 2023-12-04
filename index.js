document.addEventListener("DOMContentLoaded", fetchProducts);
let API_URL = "http://localhost:3001/api/products";

async function fetchProducts() {
    try {
        const response = await fetch(API_URL);
        const products = await response.json();
        let productCardsHTML = '';
        products.forEach((product) => {
            productCardsHTML += `
    <div class="product">
        <h3>Name: ${product.title}</h3>
        <p>Model: ${product.Model}</p>
        <p>Price: ${product.price}</p>
        <button onclick="handleDelete(this)">Delete</button>
        <button onclick="handleUpdate(this)">Edit</button>
    </div>`;
        });
        document.getElementById('products').innerHTML = productCardsHTML;

    } catch (error) {
        console.error("Error while fetching products:", error);
    }
}

function addProduct() {
    let title = document.getElementById('title').value;
    let Model = document.getElementById('model').value;
    let price = document.getElementById('price').value;
    if (!title || !Model || !price) return alert('All fields are required');

    let product = {
        title,
        Model,
        price
    };
    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('title').value = '';
            document.getElementById('model').value = '';
            document.getElementById('price').value = '';
            fetchProducts();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
async function handleDelete(element) {
    let productElement = element.closest('.product');
    
    if (!productElement) {
        console.error('Product element not found');
        return;
    }

    let id = productElement.getAttribute('data-id');

    if (!id) {
        console.error('Product ID not found');
        return;
    }

    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => {
            fetchProducts();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}



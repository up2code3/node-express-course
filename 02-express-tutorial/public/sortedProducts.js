document.getElementById('sortedProducts').addEventListener('click', () => {
    fetch('/api/v1/products')
    .then(response => response.json())
    .then(data => {
        const searchResults = document.getElementById('search-results');
        searchResults.innerHTML = ''; //sets to empty string 
        data.forEach(product => {
            const productItem = document.createElement('div');
            productItem.textContent = `Name: ${product.name}, Price: ${product.price}`;
            searchResults.appendChild(productItem)
        });
    })
    .catch(error => console.error('Fetch Error', error))
})
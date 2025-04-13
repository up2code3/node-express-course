document.getElementById('loadBtn').addEventListener('click', async () => {
    try {
      const response = await fetch('/api/v1/products');
      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      const products = data.products

      const container = document.getElementById('productContainer');
      container.innerHTML = ''; // clear previous data



      products.forEach(product => {
        const item = document.createElement('p');
        item.textContent = product.name  || JSON.stringify(product); // fallback if no name
        container.appendChild(item);
      });
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  });
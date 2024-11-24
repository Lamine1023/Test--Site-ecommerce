// Liste de produits
const products = [
  { name: "Robe élégante", price: 49.99, image: "robe-elegante.jpg" },
  { name: "Veste en cuir", price: 89.99, image: "veste-cuir.jpg" },
  { name: "Chaussures de sport", price: 69.99, image: "chaussures-sport.jpg" },
  { name: "Sac à main", price: 39.99, image: "sac-main.jpg" },
];

// Fonction pour afficher les produits
const productContainer = document.querySelector(".product-list");

products.forEach(product => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");
  productDiv.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price} €</p>
    <button>Ajouter au panier</button>
  `;
  productContainer.appendChild(productDiv);
});

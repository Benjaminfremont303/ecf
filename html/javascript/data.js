const products = [
    {
      name: "1 voyage Aix en Bus",
      price: 1.20,
      quantity: 0,
      image: "images/tickets.png",
      valid: "Valabe 60 minutes"
    },
    {
      name: "10 voyages Aix en Bus",
      price: 7,
      quantity: 0,
      image: "images/tickets.png",
      valid: "Valable 60 minutes"
    },
    {
      name: "1 voyage Bus de l'Etang",
      price: 1.20,
      quantity: 0,
      image: "images/tickets.png",
      valid: "Valable 60 minutes\nMulti-validable"
    },
    {
      name: "LeCar+ L50",
      price: 8,
      quantity: 0,
      image: "images/tickets.png",
      valid: "1 voyage valable sur toutes les lignes\nCartreize sauf 40 et 91\nCorrespondance 90 minutes"
    },
    {
      name: "10 voyages Bus de l'Etang",
      price: 9,
      quantity: 0,
      image: "images/tickets.png",
      valid: "10 voyages valables sur toutes les lignes\nCartreize sauf 40 et 91\nCorrespondances 90 minutes"
    }
  ];
  //export des tous les prices
  const price = products.map(product => product.price);
  export { price };
  // Sélectionnez la liste <ul> avec la classe "product" dans votre HTML
  const productList = document.querySelector(".product");
  
  // Parcourez le tableau de produits et insérez les données dans la structure HTML
  products.forEach(product => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <img src="${product.image}" alt="">
      <h4>${product.name}</h4>
      <p class="valid">${product.valid}</p>
      <div class="quantity">  
          <button class="decrease">-</button>
          <span class="quant">${product.quantity}</span>  
          <button class="increase">+</button> 
      </div>
      <span class="price">${product.price}€</span>
    `;
    productList.appendChild(listItem);
  });
  
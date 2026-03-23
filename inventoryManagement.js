products = [
  "Laptop",
  "Phone",
  "Headphones",
  "Monitor"
];

logFirstProduct = () => {
  console.log(products[0]);
}

addProduct = (product) => {
  products.push(product);
}

updateProductName = (index, newName) => {
  if (index >= 0 && index < products.length) {
    products[index] = newName;
  }
};

removeLastProduct = () => {
  products.pop();
}


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};

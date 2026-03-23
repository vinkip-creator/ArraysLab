products = [
  {
    name: 'Laptop',
    name: 'Phone',
    name: 'Headphones',
    name: 'Monitor', 
  }
];

logFirstProduct = () => {
  console.log(products[0].name);
}

addProduct = (product) => {
  newProduct = { name: product };
  products.push(newProduct);
}

updateProductName = (index, newName) => {
  if (index >= 0 && index < products.length) {
    products[index].name = newName;
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

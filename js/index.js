getProducts();

/**
 * Recupération produits API.
 */

async function getProducts (){
    let products = await fetch("http://localhost:3000/api/products");
    console.log ("produits disponibles")
    return products.json ();
}

// Eléments du DOM que l'on souhaite afficher.

async function createProducts () {
    let result = await getProducts()
    .then (function (APIresult){
      const products = APIresult;
      console.table(products);
      for (let product in products) { 


// Creation des balises 

    let linkProduct = document.createElement ("a");
    articleProduct.appendChild ();

    let articleProduct = document.createElement ("article");
    linkProduct.appendChild ();
   
    let imgProduct = document.createElement ("img");
    articleProduct.appendChild ();

    let nameProduct = document.createElement ("name");
    imgProduct.appendChild ();

    let descriptionProduct = document.createElement ("description");
    nameProduct.appendChild ();
  }

} 


/**
 * Recuperer les produits de la page d'accueil
 */
getProducts();

/**
 * creations des articles produits
 */

async function getProducts (){
    let products = await fetch('http://localhost:3000/api/products');
    console.log ("produits disponibles")
    return products.json ();
}

async function createProduct () {
    let 
}



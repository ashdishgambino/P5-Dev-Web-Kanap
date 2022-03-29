/**
 * Recuperer les produits de la page d'accueil
 */
getProducts();


async function getProducts (){
    let products = await fetch('http://localhost:3000/api/products');
    console.log ("produits disponibles")
    return products.json ();
}

/**
 * Creations des produits
 */

async function createProduct () {
    
}

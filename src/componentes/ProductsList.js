import { useEffect, useState } from 'react';

export default function ProductsList() {

    const [products, setProducts] = useState([]);
    const [urlProductsList, setUrlProductsList] = useState([])

    //Listado de productos
  useEffect(() => {
    const url = "/api/products";
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setProducts(data.products)
      setUrlProductsList(data.urlProductsList)
    })
  },[]);

  return (
    <div>
      <div className="card bg-transparent pt-3">
        <div className="card-body text-light">
          <h4 className="card-title text-center">Listado de productos</h4>
            <ul>
            {!products ? "cargando..." : products.map((product, index) => {
              return  (
                    <li key ={index} > {product.name} </li>
                    )
                  })}
                  <li> Remera Strass M/C </li>
                  <li> Top Amarillo M/C </li>
                  <li> Remerón Blanco M/M </li>
                  <li> Top Negro S/M </li>
                  <li> Pantalón Jirafa </li>
                  <li> Biker Negra </li>
                  <li> Biker Naranja </li>
                  <li> Short Batik </li>
                  <li> Medias </li>
                  <li> Bandana </li>
                  <li> Pin de Objetos </li>
                  <li> Pin de Frutas </li>
            </ul>
            <div className="m-auto">
              <a href="https://ecommerce-vercel-production.up.railway.app/products/productsList" target="_blank" className="btn btn-outline-secondary rounded-0 w-45 text-center m-1">Ir a Listado de Productos</a>
            </div>
        </div>
      </div>
    </div>
  )

}
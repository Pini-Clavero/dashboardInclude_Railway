import { useEffect, useState } from 'react';

export default function LastProduct() {

  const [lastProduct, setlastProduct] = useState([]);
  const [imagen, setImagen] = useState([]);
  const [urlProduct, setUrlProduct] = useState([])

  //Último producto
  useEffect(() => {
    const url = "/api/products/lastproduct";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setlastProduct(data.product)
        setImagen(data.urlImagen)
        setUrlProduct(data.urlProduct)
      })
  }, []);

  return (
    <>
      {!lastProduct ? "cargando..." :

        <div className="card bg-transparent pt-3">
            <h5 className="card-body text-center mb-0">Último producto</h5>
          <img src="/pantalones4.jpg" alt="imagen producto" />
          <div className="card-body text-light">
            <h4 className="card-title">{lastProduct.name} Short Batik</h4>
            <ul>
              <li><b>Descripción: </b> {lastProduct.description} ¡Nueva talla después de la XL! Súper cómodo y liviano, hecho especialmente para nosotros aquí en Argentina. Lo llamamos peso de INCLUDE: ligero, transpirable, acogedor y lujoso. Genial por sí solo para usar en temporadas de calor. Teñido a mano aquí en Argentina, por lo que cada pieza, aunque similar, ¡son totalmente únicas! ¡No hay dos iguales! ¡Puedes conseguir uno que sea casi idéntico al de la foto, o uno que tenga más o menos de cada color de tinte, etc.! Diseñado, cortado, cosido, teñido y bordado en Argentina. Teñido con tintes no tóxicos de bajo impacto y libre de explotación laboral.</li>
              <li><b>Categoría:</b> {lastProduct.categories?.category} Pantalon</li>
              <li><b>Características:</b> {lastProduct.characteristics} • Talla unisex • 100 % algodón. • Pre-encogido • Súper suave • Grandes bolsillos. • Tirador negro en contraste • Bordado blanco en contraste.</li>
              <li><b>Talles disponibles:</b> {lastProduct.sizes?.size} XL</li>
              <li><b>Colores disponibles:</b> {lastProduct.colors?.color} Violeta</li>
              <li><b>Precio:</b> ${lastProduct.price} 9500</li>
            </ul>
            <a href="https://ecommerce-vercel-production.up.railway.app/products/8" target="_blank" className="btn btn-outline-secondary rounded-0 w-80 text-center">Detalle del producto</a>
          </div>
        </div>
      }

    </>

  )


}

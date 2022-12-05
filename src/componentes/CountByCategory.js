import { useEffect, useState } from 'react';

export default function CountByCategory() {
    const [categories, setCategories] = useState([]);
    // Cantidad de productos por categoria
    useEffect(() => {
        const url = "/api/products/countByCategory";
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCategories(data)
                console.log(data)
            })
    }, []);

    return (
        <div>
                <div className="card bg-transparent pt-3">
                    <div className="card-body text-light">
            <ul>
                        <h4 className="card-title">Productos por categoría</h4>
                    
                {!categories ? "cargando..." :
                    <>
                        <li>Top: {categories.top} 4</li>
                        <li>Pantalón: {categories.pantalon} 4</li>
                        <li>Accesorios: {categories.accesorios} 4</li>
                    </>}
            </ul>
                    </div>
                </div>
        </div>
    )

}
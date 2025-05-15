import React from 'react';

function ListaProductos({ productos }) {
    if (!Array.isArray(productos)) {
        return <div className="error">Error: Datos de productos no válidos</div>;
    }

    return (
        <div className="lista-productos">
            {productos.length === 0 ? (
                <p className="no-resultados">No se encontraron productos</p>
            ) : (
                <div className="grid-productos">
                    {productos.map(producto => (
                        <div key={producto.id} className="producto-tarjeta">
                            <h3>{producto.nombre}</h3>
                            <p className="categoria">{producto.categoria}</p>
                            <p className="precio">${producto.precio.toLocaleString()}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ListaProductos
import React from 'react';

function ProductoItem({ producto }) {
    return (
        <div className="producto-tarjeta">
            <h3>{producto.nombre}</h3>
            <p className="categoria">{producto.categoria}</p>
            <p className="precio">${producto.precio.toLocaleString()}</p>
        </div>
    );
}

export default ProductoItem;
import React from 'react'
import PropTypes from 'prop-types';

function Filtros({ terminoBusqueda, categoriaSeleccionada, categorias, onBusquedaCambio, onCategoriaCambio }) {
    return (
        <div className="filtros-contenedor">
            <h3>Filtros de Búsqueda</h3>
            <div className="campo-busqueda">
                <label htmlFor="busqueda"><strong>Buscar:</strong></label>
                <input
                    type="text"
                    id="busqueda"
                    value={terminoBusqueda}
                    onChange={onBusquedaCambio}
                    placeholder="Escribe para buscar..."
                />
            </div>
            <div className="campo-categoria">
                <label htmlFor="categoria"><strong>Categoría:</strong></label>
                <select
                    id="categoria"
                    value={categoriaSeleccionada}
                    onChange={onCategoriaCambio}
                >
                    {categorias.map(cat => (
                        <option key={cat} value={cat}>
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

Filtros.propTypes = {
    terminoBusqueda: PropTypes.string.isRequired,
    categoriaSeleccionada: PropTypes.string.isRequired,
    categorias: PropTypes.arrayOf(PropTypes.string).isRequired,
    onBusquedaCambio: PropTypes.func.isRequired,
    onCategoriaCambio: PropTypes.func.isRequired
};

export default Filtros
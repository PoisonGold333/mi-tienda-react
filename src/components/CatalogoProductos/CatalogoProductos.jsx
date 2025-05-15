import React, { useState, useEffect } from 'react'
import Filtros from './Filtros'
import ListaProductos from './ListaProductos'

const productosIniciales = [
    { id: 1, nombre: 'Portátil Lenovo', categoria: 'Computadores', precio: 2500000 },
    { id: 2, nombre: 'Celular Samsung', categoria: 'Móviles', precio: 1200000 },
    { id: 3, nombre: 'Teclado Gamer', categoria: 'Periféricos', precio: 180000 },
    { id: 4, nombre: 'Mouse RGB', categoria: 'Periféricos', precio: 89000 },
    { id: 5, nombre: 'Monitor LG', categoria: 'Computadores', precio: 800000 },
    { id: 6, nombre: 'Cámara Web', categoria: 'Periféricos', precio: 120000 },
    { id: 7, nombre: 'Audífonos Sony', categoria: 'Audio', precio: 250000 },
    { id: 8, nombre: 'Parlante JBL', categoria: 'Audio', precio: 180000 }
]

function CatalogoProductos() {
    const [terminoBusqueda, setTerminoBusqueda] = useState('')
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todas')
    const [productosFiltrados, setProductosFiltrados] = useState(productosIniciales)
    const [isLoading, setIsLoading] = useState(true);
    
    const categoriasUnicas = ['todas', ...new Set(productosIniciales.map(p => p.categoria))]

    useEffect(() => {
        const resultadoFiltrado = productosIniciales.filter(producto => {
            const coincideNombre = producto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
            const coincideCategoria = categoriaSeleccionada === 'todas' || producto.categoria === categoriaSeleccionada
            return coincideNombre && coincideCategoria
        })
        setProductosFiltrados(resultadoFiltrado)
    }, [terminoBusqueda, categoriaSeleccionada])

    useEffect(() => {
        // Simular carga inicial
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    if (isLoading) {
        return <div className="loading">Cargando productos...</div>;
    }

    return (
        <div className="catalogo-contenedor">
            <h1>Catálogo de Productos</h1>
            <Filtros 
                terminoBusqueda={terminoBusqueda}
                categoriaSeleccionada={categoriaSeleccionada}
                categorias={categoriasUnicas}
                onBusquedaCambio={(e) => setTerminoBusqueda(e.target.value)}
                onCategoriaCambio={(e) => setCategoriaSeleccionada(e.target.value)}
            />
            <ListaProductos productos={productosFiltrados} />
        </div>
    )
}

export default CatalogoProductos
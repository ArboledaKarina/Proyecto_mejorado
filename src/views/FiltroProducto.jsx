import React from 'react'
import listaproductos from '../views/listasproductos'
import { useState } from 'react'

const FiltroProducto = () => {
    const [filtrocategoria, setFiltrocategoria] = useState('');

    const filtrarCategorias = (event) => {
        setFiltrocategoria(event.target.value);
    };

    const ObtenerCategoriasUnicas = () => {
        const CategoriasUnicas = [...new Set(listaproductos.map((categoria) => categoria.categoria))];
        return CategoriasUnicas;
    };

    const categoriasFiltrados = listaproductos.filter((categoria) => categoria.categoria.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(filtrocategoria.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    ));

    return (
        <div>
            <div className='container '>
                <h1>Nuestros productos</h1>
                <div className='row mb-4 border-1 '>
                    <div className='col-md-6'>
                        <label htmlFor="filtrocategoria"
                            className="form-label">
                            filtrar por categoria:
                        </label>
                        <input
                            type="text"
                            id="filtrocategoria"
                            className="form-control"
                            value={filtrocategoria}
                            onChange={filtrarCategorias}
                        />
                    </div>
                    <div className='col-md-6'>
                        <label htmlFor="selectCategoria"
                            className="form-label">
                            categorias disponibles:
                        </label>
                        <select id="selectCategoria"
                            className="form-select"
                            value={filtrocategoria}
                            onChange={filtrarCategorias}>
                            <option value="">Todas las categorias</option>
                            {ObtenerCategoriasUnicas().map((categoria, index) =>
                            (<option value={categoria} key={index}>
                                {categoria}
                            </option>
                            ))};
                        </select>
                    </div>
                    </div>
                    <div className="row">
                        {categoriasFiltrados.map((categoria, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card mb-4 border-3">
                                <img src={categoria.Image} className="card-img-top p-4 primary-text-emphasis" alt={categoria.categoria} />
                                <div className="card-body">
                                    <h5 className="card-title">{categoria.nombre}</h5>
                                        <p className="card-text">{categoria.descripcion}</p>
                                        <p className="card-text">{categoria.Precio}</p>
                                        <p className="card-text">{categoria.categoria}</p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    </div>
    )
}
export default FiltroProducto
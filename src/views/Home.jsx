import React from 'react'
import Frijol from '../images/frijol.jpg'
import Maíz from '../images/maiz.jpg'
import Arroz from '../images/arroz.jpg'
import Tomate from '../images/tomate.jpg'
import Cebolla from '../images/cebolla.jpg'
import Zanahoria from '../images/zana.jpg'
import Manzana from '../images/manzana.jpg'
import Fresas from '../images/fresas.jpg'
import Banana from '../images/bana.jpg'
import Cerdo from '../images/carne de cer.jpg'
import Pollo from '../images/carne de pollo.jpg'
import Res from '../images/res.jpg'
import Huevos from '../images/huevos.jpg'
import Aceite from '../images/aceite.jpg'
import Jabon from '../images/jabon.jpg'
import Fondo1 from '../images/fondo1.jpg'
import Fondo2 from '../images/fondo2.jpg'
import Fondo3 from '../images/fondo 3.jpg'
import Fondo4 from '../images/fondo4.jpg'
import { Link } from 'react-router-dom'



const Home = () => {
    return (
        <><div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className='tex'>
                        <h5>Es momento de comprar
                             tu mercado en jumbo</h5>
                    </div>
                    <img src={Fondo1} className="d-block w-100"  alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={Fondo2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={Fondo3} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={Fondo4} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div><div className="container text-center">
                <h2>AHORRO, VARIEDAD Y CALIDAD</h2>
                <div className="row">
                    <div className="col">
                        <div clasName="productosyprecios" id="productosyprecios">
                            <div className="card mb-4 border-3 img-top p-4" style={{ width: '200px', height: '410px' }}>
                                <img src={Frijol} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Frijol sangre toro</h5>
                                    <p className="card-text">6500
                                    </p>
                                    <a href="#" className="btn btn-warning btn-lg">Comprar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card mb-4 border-3 img-top p-4" style={{ width: '200px', height: '410px' }}>
                            <img src={Maíz} className="card-img-top " alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"> Maíz x500gramos</h5>
                                <p className="card-text">6500
                                </p>
                                <a href="#" className="btn btn-warning btn-lg">Comprar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className=" card mb-4 border-3 img-top p-4" style={{ width: '200px', height: '410px' }}>
                            <img src={Arroz} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Arroz Diana x500 gramos</h5>
                                <p className="card-text">6500
                                </p>
                                <a href="#" className="btn btn-warning btn-lg">Comprar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 border-3 img-top p-4" style={{ width: '200px', height: '410px' }}>
                            <img src={Aceite} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Aceite fino soya x1000ml</h5>
                                <p className="card-text">6500
                                </p>
                                <a href="#" className="btn btn-warning btn-lg">Comprar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 border-3 img-top p-4" style={{ width: '200px', height: '410px' }}>
                            <img src={Huevos} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Huevos AA X30und</h5>
                                <p className="card-text">$30.000
                                </p>
                                <a href="#" className="btn btn-warning btn-lg">Comprar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 border-3 img-top p-4" style={{ width: '200px', height: '410px' }}>
                            <img src={Jabon} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Jabon Axión x1000 gramos</h5>
                                <p className="card-text">11.900
                                </p>
                                <a href="#" className="btn btn-warning btn-lg">Comprar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 border-3 img-top p-4" style={{ width: '200px', height: '410px' }}>
                            <img src={Tomate} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Tomate chonto x500 gramos</h5>
                                <p className="card-text">$2.900
                                </p>
                                <a href="#" className="btn btn-warning btn-lg">Comprar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 border-3 img-top p-4" style={{ width: '200px', height: '410px' }}>
                            <img src={Cebolla} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Cebolla cabezona X500 gramos</h5>
                                <p className="card-text">$2.300
                                </p>
                                <a href="#" className="btn btn-warning btn-lg">Comprar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 border-3 img-top p-4" style={{ width: '200px', height: '410px' }}>
                            <img src={Zanahoria} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Zanahoria x500 gramos</h5>
                                <p className="card-text">6500
                                </p>
                                <a href="#" className="btn btn-warning btn-lg">Comprar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 border-3 img-top p-4" style={{ width: '200px', height: '410px' }}>
                            <img src={Manzana} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Manzana importada x500</h5>
                                <p className="card-text">6500
                                </p>
                                <a href="#" className="btn btn-warning btn-lg">Comprar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 border-3 img-top p-4" style={{ width: '200px', height: '410px' }}>
                            <img src={Fresas} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Fresa orgánica x500 gramos</h5>
                                <p className="card-text">6500
                                </p>
                                <a href="#" className="btn btn-warning btn-lg">Comprar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 border-3 img-top p-4" style={{ width: '200px', height: '410px' }}>
                            <img src={Banana} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Banano Urabá x500gramos</h5>
                                <p className="card-text">$1.400
                                </p>
                                <a href="#" className="btn btn-warning btn-lg">Comprar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 border-3 img-top p-4" style={{ width: '200px', height: '410px' }}>
                            <img src={Cerdo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Carne de cerdo X500 gramos</h5>
                                <p className="card-text">6500
                                </p>
                                <a href="#" className="btn btn-warning btn-lg">Comprar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 border-3 img-top p-4" style={{ width: '200px', height: '410px' }}>
                            <img src={Pollo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Pollo entero campesino x2.5kg</h5>
                                <p className="card-text">6500
                                </p>
                                <a href="#" className="btn btn-warning btn-lg">Comprar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 border-3 img-top p-4" style={{ width: '200px', height: '410px' }}>
                            <img src={Res} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Carne de res x500 gramos</h5>
                                <p className="card-text">6500
                                </p>
                                <a href="#" className="btn btn-warning btn-lg">Comprar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>
           
            
    )
}
export default Home
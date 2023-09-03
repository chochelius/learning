import info from "../assets/datos.json";

const Checkout = () => {

    //parse json to object
    const datos = JSON.parse(JSON.stringify(info));
    console.log(datos);



    return (
        <div>
            <div className="row bg-white bg-opacity-75">
                <div className="col-10 col-md-6 mx-auto my-2 ">
                    <p className="fw-medium text-center fs-3 ">
                        <strong>
                            Nuestro seminario Tu Primera Página Web tiene un costo de $40,000 CLP y está limitado a solo 10 cupos por sesión para asegurar un aprendizaje efectivo y personalizado.
                            <br />
                            <br />

                            <strong>Cronograma Detallado:</strong>
                            <br />
                            <strong>Día 1:</strong>
                            <ul>
                                <li>Conceptos básicos e instalación de la interfaz de desarrollo</li>
                                <li>Conceptos básicos sobre HTML y CSS</li>
                                <li>Nuestra primera página Hola mundo!</li>
                                <li>Profundización de la interfaz de desarrollo y personalización</li>
                                <li>Conceptos básicos de JavaScript</li>
                                <li>Integrando JavaScript a la página</li>
                            </ul>
                            <br />

                            <strong>Día 2:</strong>
                            <ul>
                                <li>Profundización en HTML y CSS</li>
                                <li>Diagrama de un landing page</li>
                                <li>Bootstrap</li>
                                <li>Definición e inicio de proyecto final</li>
                                <li>Correcciones y mejoras</li>
                                <li>Presentación de los proyectos finales</li>
                            </ul>
                            <br />

                            <br />

                            No pierdas la oportunidad de dar tus primeros pasos en el mundo del desarrollo web. ¡Los cupos son limitados, así que reserva el tuyo ahora!
                            <br />
                            <br />
                        </strong>

                    </p>
                    <div className="col-12 mx-auto my-5">
                        <dl className="row text-center ">
                            <dt className="col-6 col-md-3">
                                <h5 className="text-center">Fecha</h5>
                            </dt>
                            <dd className="col-6 col-md-3">
                                <h5 className="text-center">Precio</h5>
                            </dd>
                            <dd className="col-6 col-md-3">
                                <h5 className="text-center">Cupos</h5>
                            </dd>
                            <dd className="col-6 col-md-3">
                                <h5 className="text-center">Inscripción</h5>
                            </dd>
                            <dt className="col-6 col-md-3">
                                <h5 className="text-center">{datos.fecha}</h5>
                            </dt>
                            <dd className="col-6 col-md-3">
                                <h5 className="text-center">{datos.precio}</h5>
                            </dd>
                            <dd className="col-6 col-md-3">
                                <h5 className="text-center">{datos.cupos}</h5>
                            </dd>
                            <dd className="col-6 col-md-3">
                                <h5 className="text-center">
                                    <a target="#" href="https://app.payku.cl/p?a=12794p0288" >
                                        <img width="120px" height="auto" src="https://storage.googleapis.com/storage-payku-prd/public/img/botonpago/boton_pago_logo.png">
                                        </img>
                                    </a>
                                </h5>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Checkout
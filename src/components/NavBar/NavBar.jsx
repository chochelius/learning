import { useState } from 'react';
import { Link } from 'react-router-dom';

const OffcanvasStyle = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  padding: '1rem',
  backgroundColor: 'rgba(225, 225, 225, 0.85)',
  zIndex: 9999,
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const NavBar = () => {
  const options = [
    {
      name: 'Inicio',
      link: '/',
    },
    {
      name: 'Sobre el profesor',
      link: '/about',
    },
    {
      name: 'Sobre el curso',
      link: '/signup',
    },
    {
      name: 'Inscríbete',
      link: '/checkout',
    },
  ];

  function OffCanvasExample() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
      <>
        <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 5 }}>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-outline-dark btn-lg border-3"
              onClick={toggleShow}
            >
              <strong>
                Inscríbete
              </strong>
            </button>
            <button
              type="button"
              className="btn btn-outline-dark btn-lg dropdown-toggle dropdown-toggle-split border-3"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className=" pe-1"><strong>Saber más</strong></span>
            </button>
            <ul className="dropdown-menu border-black border-2">
              {options.map((o, i) => (
                <li key={i}>
                  <Link to={o.link}>
                    <button
                      className="dropdown-item text-dark"

                    ><strong>
                        {o.name}
                      </strong>
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          style={OffcanvasStyle}
          onClick={handleClose}
          hidden={!show}
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="d-flex flex-column align-items-center text-black">
            <h3 id="offcanvasExampleLabel" className='fs-1'>Reserva tu cupo ahora</h3>
            <p className='fs-2'>
              Si quieres inscribirte más información sobre el curso puedes inscribirte haciendo onClick

            </p>
            <button type="button" className="btn btn-outline-dark btn-lg border-3" onClick={handleClose}>
              <Link to="/checkout">Aquí</Link>
            </button>
          </div>
        </div>
      </>
    );
  }

  return <OffCanvasExample />;
}

export default NavBar
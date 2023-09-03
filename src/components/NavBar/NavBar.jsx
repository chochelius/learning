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
        <div className="position-fixed top-0 end-0 p-3 d-grid gap-2" style={{ zIndex: 5 }}>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-outline-dark border-3"
              onClick={toggleShow}
            >
              <strong>
                Inscríbete
              </strong>
            </button>
            <button
              type="button"
              className="btn btn-outline-dark dropdown-toggle dropdown-toggle-split border-3"
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
          <div className="d-flex flex-column align-items-center text-black col-lg-8">
            <h3 id="offcanvasExampleLabel" className='fs-1'>Reserva tu cupo ahora</h3>
            <p className='fs-2'>
              Si quieres unirte a este desafío al alcance de cualquiera que haya usado alguna vez Microsoft Word o algo similar, puedes inscribirte haciendo click

            </p>
            <button type="button" className="btn btn-outline-dark btn-lg border-3" onClick={handleClose}>
              <Link to="/checkout" className=' text-dark'>Aquí</Link>
            </button>
          </div>
        </div>
      </>
    );
  }

  return <OffCanvasExample />;
}

export default NavBar
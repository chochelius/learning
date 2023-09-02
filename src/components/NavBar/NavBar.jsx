import { useState } from 'react';

const OffcanvasStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: '1rem',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 9999,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

const NavBar = () => {
    const options = [
      {
        name: 'Enable backdrop (default)',
        scroll: false,
        backdrop: true,
      },
      {
        name: 'Disable backdrop',
        scroll: false,
        backdrop: false,
      },
      {
        name: 'Enable body scrolling',
        scroll: true,
        backdrop: false,
      },
      {
        name: 'Enable both scrolling & backdrop',
        scroll: true,
        backdrop: true,
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
                className="btn btn-primary"
                onClick={toggleShow}
              >
                Toggle Offcanvas
              </button>
              <button
                type="button"
                className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu">
                {options.map((o, i) => (
                  <li key={i}>
                    <button
                      className="dropdown-item"
                      onClick={() => setShow(o)}
                    >
                      {o.name}
                    </button>
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
            <div className="d-flex flex-column align-items-center">
              <h3 id="offcanvasExampleLabel">Offcanvas</h3>
              <p>
                This is a placeholder for the offcanvas. You can add whatever
                you want to it.
              </p>
              <button type="button" className="btn btn-primary" onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
        </>
      );
    }
  
    return <OffCanvasExample />;
  }

  export default NavBar
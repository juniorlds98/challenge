import logo from '../src/assets/svgs/logo1.svg';
import '../src/style/index.css';



function Index() {

  return (
    <>
<nav className="navbar navbar-expand-lg bg-white custom-shadow py-4">
        <div className="container justify-content-center">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img className="logo-navbar" src={logo} alt="Logo"/>
          </a>
        </div>
      </nav>
    </>
  )
}

export default Index

import { usePageToggleContext } from "../../providers/pageProvider.jsx";
import logo from '../../assets/logo.png';

const Footer = () =>
{
    const pageToggle = usePageToggleContext();

    return (
        <footer className="navbar bg-body-tertiary bg-dark navbar-expand-lg" data-bs-theme="dark">
            <div className="container-fluid py-3">
                <button className="navbar-brand bg-transparent border-0 m-0 p-0" onClick={() => pageToggle('main')} style={{width: "200px"}}>
                    <img src={logo} alt="logo image" className="img-fluid m-0 p-0" style={{width: "100%"}}/>
                </button>

                <p className="fs-5 text-white mt-5 m-md-0 p-md-0">Todos los derechos reservado Wizack {new Date().getFullYear()}.</p>
            </div>
        </footer>
    )
};

export default Footer;
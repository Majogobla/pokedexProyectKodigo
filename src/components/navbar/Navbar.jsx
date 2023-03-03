import { usePageToggleContext } from "../../providers/pageProvider.jsx";
import logo from '../../assets/logo.png';

const Navbar = () =>
{
    const pageToggle = usePageToggleContext();

    return (
        <nav className="navbar bg-body-tertiary bg-dark navbar-expand-lg" data-bs-theme="dark">
            <div className="container-fluid py-3">
                <button className="navbar-brand bg-transparent border-0 m-0 p-0" onClick={() => pageToggle('main')} style={{width: "200px"}}>
                    <img src={logo} alt="logo image" className="img-fluid m-0 p-0" style={{width: "100%"}}/>
                </button>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button className="nav-link bg-transparent border-0" onClick={() => pageToggle('catalogue')}>Catalogue</button>
                        </li>

                        <li className="nav-item">
                            <button className="nav-link bg-transparent border-0" onClick={() => pageToggle('types')}>Types</button>
                        </li>

                        <li className="nav-item">
                            <button className="nav-link bg-transparent border-0" onClick={() => pageToggle('voice')}>Search</button>
                        </li>

                        <li className="nav-item">
                            <button className="nav-link bg-transparent border-0" onClick={() => pageToggle('about')}>About</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;
import { Outlet, Link} from 'react-router-dom';

export default function Layout (){
    return (
        <main className='d-flex flex-column min-vh-100'>
            <nav className="navbar navbar-expand-lg  bg-black ">
                <div className="container-fluid ">
                    <Link className='navbar-brand fw-bold text-info' to='/'>MaestroMist.</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className='nav-link text-white' to='about'>About</Link>
                                </li>
                                
                                <Link className='nav-link text-white' to='services'>Services</Link>
                                <li className="nav-item">
                                <Link className='nav-link text-white' to='contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className='container p-5'>
                <Outlet></Outlet>

            </div>

            <footer className='bg-black text-center text-info pt-3 mt-auto'>
                <p>Developed by <strong>Allen Nosares</strong></p>
            </footer>

        </main>

    )
}


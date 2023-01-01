import { Link } from 'react-router-dom';
import Logo from '../Logo'
import './navbar.scss'

const index = () => {
  return (
    <nav className="nav container">
      <section className="nav__logo">
        <Logo />
      </section>
      <div className="nav__links">
        <Link className='nav__link' to="/">Home</Link>
        <Link className='nav__link' to="/about">About</Link>
        <Link className='nav__link' to="/service">Service</Link>
        <Link className='nav__link' to="/portofolio">Portofolio</Link>
      </div>
    </nav>
  )
}

export default index
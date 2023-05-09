import { NavLink } from 'react-router-dom'

//Styles for the active page of the site
const navLinkStyles = ({ isActive }) => {
    return {
      color: '#fff',
      textDecoration: isActive ? 'overline' : 'none'
    }
  }

const Navbar = () => {

return (
    <nav className='navbar--container'>
        <div className='navbar--author'>
            <h3>Magnus Larsen</h3>
        </div>
        <div>
            <ul className='navbar--options'>
                <li className='links'>
                <NavLink 
                to='/'
                style={navLinkStyles}
                >Hjem
                </NavLink></li>

                <li className='links'>
                <NavLink 
                to='om-meg'
                style={navLinkStyles}
                >Om meg
                </NavLink></li>

                <li className='links'>
                <NavLink 
                to='prosjekter'
                style={navLinkStyles}
                >Prosjekter
                </NavLink></li>

                <li className='links'>
                <NavLink 
                to='kontakt-meg'
                style={navLinkStyles}
                >Kontakt meg
                </NavLink></li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar
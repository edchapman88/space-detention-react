import { NavLink } from "react-router-dom"
import '../styles/navLink.style.css';

const NavBar = props => {

    const routes = ['Home','Articles']

    const containerStyle = {
        display: 'flex',
        position: 'fixed',

    }

    return (
        <div style={containerStyle}>
            {routes.map( route => {
                return (
                    <NavLink
                        key={route}
                        to={`/${route}`}
                        end
                        className={({ isActive }) =>
                          isActive ? 'button active' : 'button'
                        }
                    >{route}</NavLink>)
            })}
        </div>
    )
}

export default NavBar
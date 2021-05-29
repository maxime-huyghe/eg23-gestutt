import './Header.css'
import logo from '../utt.svg'
import Routes from '../routes'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <img src={ logo } alt='logo' id='logo-utt' />
            <Link to={ Routes.slash }>
                <h1 id='header-title'>
                    Gest'UTT
                </h1>
            </Link>
            <div>
                <label htmlFor='branch'>Branche :</label>
                <select id='branch'>
                    <option>ISI</option>
                </select>
            </div>
        </header >
    )
}
export default Header

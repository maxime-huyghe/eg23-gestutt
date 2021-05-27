import './Header.css'
import logo from '../utt.svg'

function Header() {
    return (
        <header>
            <img src={ logo } alt='logo' id='logo-utt' />
            <div id='header-title'>
                Gest'UTT
            </div>
            <div>
                <label htmlFor='branch'>Branche :</label>
                <select id='branch'>
                    <option>ISI</option>
                </select>
            </div>
        </header>
    )
}
export default Header

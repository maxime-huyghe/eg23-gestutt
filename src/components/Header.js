import './Header.css'
import logo from '../utt.svg'

function Header() {
    return (
        <header>
            <img src={ logo } alt='logo' id='logo-utt' />
            <h1 id='header-title'>
                Gest'UTT
            </h1>
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

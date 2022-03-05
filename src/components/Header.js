import Logo from '../images/Logo.png'
import {FaBars} from 'react-icons/fa'

const Header = () => {
  return (
    <div className="header">
        <div className='header-flex'>
            <img src={Logo} alt='img'/>
            <button className='btn'>Enter Builder</button>
            <button className='show'>Enter Builder</button>
            <div className='bars'><button><FaBars /></button></div>
        </div>
        <hr/>
    </div>
  )
}

export default Header

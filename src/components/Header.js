import Logo from '../images/Logo.png'

const Header = () => {
  return (
    <div className="header">
        <div className='header-flex'>
            <img src={Logo}/>
            <button>Enter Builder</button>
            {/* <i className="fas fa-bars fa-2x"></i> */}
        </div>
        <hr/>
    </div>
  )
}

export default Header

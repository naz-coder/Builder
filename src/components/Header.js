import Logo from '../images/Logo.png'

const Header = () => {
  return (
    <div className="header">
        <div className='header-flex'>
            <img src={Logo}/>
            <button>Enter Builder</button>
          
        </div>
        <hr/>
        <hr/>
    </div>
  )
}

export default Header

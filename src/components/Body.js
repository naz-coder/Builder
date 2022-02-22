import Header from '../images/Header.png'

const Body = () => {
  return (
    <div className='body'>
        <div className='body-grid'>
            <div className="defi">
                <h1>A Better Defi System That Delivers Value To Everyone.</h1>
            </div>
            <hr/>
            <div className="Defi-2">
                <p>One-of-a-kind defi financial system that incentivizes the creation of new and innovative solutions for businesses and DApps.</p>
                <button>View The Builder Price Chart</button>
            </div>
        </div>
        <div className='header-img'><img src={Header} alt='img'/></div>

    </div>
  )
}

export default Body

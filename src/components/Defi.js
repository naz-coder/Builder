import defi from '../images/defi.png'
import securityicon from '../images/securityicon.png'
import distributionicon from '../images/distributionicon.png'
import innovationicon from '../images/innovationicon.png'


const Defi = () => {
  return (
    <div>
        <div className="how-work">
          <h1>What is $BLDR?</h1>
          <h4>The Builder Defi Financial System and its associated 
              smart contracts are deployed on the Polygon (MATIC) 
              smart contract platform. These smart contracts are 
              available to any person globally.</h4>
        </div>
        <div className='defi-main'>
            <div className='defi-img'>
                <img src={defi}/>
            </div>
            <div className="defi-builder">
                <div className='defi-builder-grid'>
                    <div className='builder-top'>
                        <p>BUILDER DEFI</p>
                        <h2>A Defi economy securely providing value to all users</h2>
                        <hr/>
                    </div>
                    <div className='builder-grid'>
                        <div className='icon'>
                            <img src={securityicon}/>
                            <div>
                                <h3>MORE SECURITY</h3>
                                <p>Through cryptography, decentralization, and blockchain, 
                                    the incentivized network structure combines balanced 
                                    payments with unmatched security and transparency.</p>
                            </div>
                        </div>
                        <div className='icon'>
                            <img src={distributionicon}/>
                            <div>
                                <h3>FAIRLY LAUNCHED AND DISTRIBUTED</h3>
                                <p>A high value digital asset that fuels powerful new DeFi 
                                    (Decentralized Finance) innovations and promotes deep 
                                    liquidity to ensure capital input is proportional to the supply.</p>
                            </div>
                        </div>
                        <div className='icon'>
                            <img src={innovationicon}/>
                            <div>
                                <h3>GROUNDBREAKING NEW TECHNOLOGY</h3>
                                <p>BLDR is built on groundbreaking new 
                                    technologies that favor the financial 
                                    success of the applications.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Defi

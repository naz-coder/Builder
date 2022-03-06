import staking from '../images/staking.png'
import referral from '../images/referral.png'
import DAppRoyalties from '../images/DAppRoyalties.png'
import ambassador from '../images/ambassador.png'

const Works = () => {
  return (
    <div className='work'>
      <div className="how-work">
          <p>BUILDER DEFI</p>
          <h1>How does it work?</h1>
          <h4>BUILDER is the future of decentralized finance, a 
              one-of-a-kind distributed business building platform 
              that enables the creation of decentralized apps (DApps). 
              BUILDER leverages the power of its financial technologies 
              with an incentivized network community.</h4>
      </div>
      <div className="work-grid">
            <div className='work-mini-grid'>
                <img src={staking} alt='img'/>
                <div><h1>Users stake to earn in Builders smart contract</h1>
                    <p>When users stake Builder or USDC in the Builder ecosystem 
                    they have the potential to make up to 5% weekly rewards 
                    in Builder.</p>
                </div>
            </div>
            <div className='work-mini-grid'>
                <div><h1>Stakers are given referral links with defi level incentives</h1>
                    <p>Builder incorporates the first fully decentralized distribution 
                    network (DDN) with built-in referral rewards and market incentives. 
                    When you bring someone into the Builder Network, you get rewarded 
                    with up to 8% of their staked amount and 3% of secondary referrals 
                    staked amount.</p>
                </div>
                <img src={referral} alt='img'/>
            </div>
            <div className='work-mini-grid'>
                <img src={DAppRoyalties} alt='img'/>
                <div><h1>DApp royalties are distributed to stakers</h1>
                    <p>Decentralized applications created on Builder share produced royalty 
                    revenues with Builder users staking 30 coins or more. Royalties from 
                    Builder DApps can be up to 20% of the DApps revenue.</p>
                </div>
            </div>
            <div className='work-mini-grid'>
                <div><h1>Ambassadors of Builder help build the network and get rewarded</h1>
                    <p>Ambassador wallets receive 4% of every stake in its designated geographic 
                    area as verified by IP address not currently being served and unassigned 
                    by the protocol. To acquire ambassador status, they are required to purchase 
                    and permanently stake 20,000 $BLDR. The protocol then creates the Ambassador 
                    wallet.</p>
                </div>
                <img src={ambassador} alt='img'/>
            </div>
      </div>
      <div className="work-block-small">
            <div className='work-mini-block'>
                <img src={staking} alt='img'/>
                <div><h1>Users stake to earn in Builders smart contract</h1>
                    <p>When users stake Builder or USDC in the Builder ecosystem 
                    they have the potential to make up to 5% weekly rewards 
                    in Builder.</p>
                </div>
            </div>
            <div className='work-mini-block'>
                <img src={referral} alt='img'/>
                <div><h1>Stakers are given referral links with defi level incentives</h1>
                    <p>Builder incorporates the first fully decentralized distribution 
                    network (DDN) with built-in referral rewards and market incentives. 
                    When you bring someone into the Builder Network, you get rewarded 
                    with up to 8% of their staked amount and 3% of secondary referrals 
                    staked amount.</p>
                </div>
            </div>
            <div className='work-mini-block'>
                <img src={DAppRoyalties} alt='img'/>
                <div><h1>DApp royalties are distributed to stakers</h1>
                    <p>Decentralized applications created on Builder share produced royalty 
                    revenues with Builder users staking 30 coins or more. Royalties from 
                    Builder DApps can be up to 20% of the DApps revenue.</p>
                </div>
            </div>
            <div className='work-mini-block'>
                <img src={ambassador} alt='img'/>
                <div><h1>Ambassadors of Builder help build the network and get rewarded</h1>
                    <p>Ambassador wallets receive 4% of every stake in its designated geographic 
                    area as verified by IP address not currently being served and unassigned 
                    by the protocol. To acquire ambassador status, they are required to purchase 
                    and permanently stake 20,000 $BLDR. The protocol then creates the Ambassador 
                    wallet.</p>
                </div>
            </div>
    </div>
    </div>
  )
}

export default Works

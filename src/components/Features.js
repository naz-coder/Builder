import StakingIcon from '../images/StakingIcon.png'
import ReferaIcon from '../images/ReferalIcon.png'
import Daapp from '../images/Daapp.png'
import WeeklyIcon from '../images/WeeklyIcon.png'
import AmbIcon from '../images/AmbIcon.png'
import TranspyIcon from '../images/TranspyIcon.png'

const Features = () => {
  return (
    <div className='feature'>
        <h1>Features</h1>
        <p>There are six main features Builder developed to 
          deliver a defi ecosystem that builds value.</p>
        <div className='feature-box'>
            <div>
            <img src={StakingIcon} alt='img'/>
                <h3>Staking Rewards</h3>
            </div>
            <div>
            <img src={ReferaIcon} alt='img'/>
                <h3>Community Referrals</h3>
            </div>
            <div>
                <img src={Daapp} alt='img'/>

                <h3>DApp Rewards</h3>
            </div>
            <div>
            <img src={WeeklyIcon} alt='img'/>
                <h3>5% Weekly Rewards Target</h3>
            </div>
            <div>
            <img src={AmbIcon} alt='img'/>
                <h3>4% Ambassador Rewards</h3>
            </div>
            <div>
            <img src={TranspyIcon} alt='img'/>
                <h3>Full Transparency</h3>
            </div>
        </div>
        <h4>Builder is not only a new web3 solution for businesses, 
                it is a new economic model that is built with the sole 
                intention of delivering inherent value through the fair 
                distribution of value to the Builder network. We're utilizing 
                advanced distributed financial technology to build an incentivized 
                community. When businesses build on the Builder network, they're not 
                only building a more efficient and secure solution for themselves but 
                also can deliver value to all $BLDR stakers.  </h4>

    </div>
  )
}

export default Features

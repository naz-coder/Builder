import React from 'react'
// import MdGroups from 'react-icons/fa'
// import FaChartLine from 'react-icons/fa'
// import FaFolderPlus from 'react-icons/fa'
// import FaChartPie from 'react-icons/fa'

const Features = () => {
  return (
    <div className='Feature'>
        <h1>Features</h1>
        <p>There are six main features Builder developed to 
          deliver a defi ecosystem that builds value</p>
        <div className='feature-box'>
            <div>
                {/* <Fa/> */}
                <h3>Staking Rewards</h3>
            </div>
            <div>
                {/* <MdGroups/> */}
                <h3>Community Referrals</h3>
            </div>
            <div>
                {/* <FaChartPie/> */}
                <h3>DApp Rewards</h3>
            </div>
            <div>
                {/* <FaChartLine/> */}
                <h3>5% Weekly Rewards Target</h3>
            </div>
            <div>
                {/* <Fa/> */}
                <h3>4% Ambassador Rewards</h3>
            </div>
            <div>
                {/* <FaFolderPlus/> */}
                <h3>Full Transparency</h3>
            </div>
            <p>Builder is not only a new web3 solution for businesses, 
                it is a new economic model that is built with the sole 
                intention of delivering inherent value through the fair 
                distribution of value to the Builder network. We're utilizing 
                advanced distributed financial technology to build an incentivized 
                community. When businesses build on the Builder network, they're not 
                only building a more efficient and secure solution for themselves but 
                also can deliver value to all $BLDR stakers.  </p>
        </div>
    </div>
  )
}

export default Features

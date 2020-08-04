import React from 'react'
import HeaderContainer from '../../containers/HeaderContainer'
import Carousels from '../Carousels/Carousels'
import './OrderFinishView.scss'
const OrderFinishView = React.memo(
    ({
     
    }) => {
      return (
      <div>
           <HeaderContainer />
            <Carousels />
            <div className='text-area'>
            <div className='title'>
              感謝您的訂購
              </div>
              <div className='content'>
                請至會員專區請至會員專區請至會員專
                </div>
       </div>
       </div>
      )
    },
  )
export default OrderFinishView
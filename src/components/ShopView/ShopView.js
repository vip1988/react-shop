import React from "react";
import HeaderContainer from '../../containers/HeaderContainer'
import {Card,Button} from 'react-bootstrap';
import neuropathy from './images/Neuropathy.jpg'
import './ShopView.scss'
const ProductItem = () => {
    return (
        <div className='item'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={neuropathy } />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
    )
  }
export default class ShopView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
    
        };
      };
    render() {
        return (
            <div>
            <HeaderContainer />
            <div className='shop-view-container'>  
            <div className='content'>  
                    <div className='title'>
                    <marquee behavior='alternate' className='title-content'>歡迎光臨 Alvin Shop</marquee>
                    </div> 
                     <div className='product-area'>
                    <ProductItem />  
                    <ProductItem />  
                    <ProductItem />  
                    <ProductItem />  
                    <ProductItem />  
                    <ProductItem />  
                    </div>
                    </div>   
            </div>
            </div>
        )
    }

}
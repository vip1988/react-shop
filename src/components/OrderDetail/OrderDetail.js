import React from "react";
import { Link } from 'react-router-dom';
import './OrderDetail.scss'

const Item = ({ orderNumber,

    productNumber,
    productCount,
    productDescrible,
    productPrice


}) => (

        <tr className='item'>
            <td className='order-number'>產品編號：{productNumber}<div className='count'>數量：{productCount}</div></td>
            <td className='text'>{productDescrible}</td>
            <td>單價：{productPrice}</td>
            <td>總價：{productPrice * productCount}</td>
        </tr>


    )
const Table = ({ orderNumber,
    date,
    status,
    allPrice,
    productNumber,
    productCount,
    productDescrible,
    productPrice


}) => (


        <table className='table'>
            <tr>
                <th className='number'>訂單編號：{orderNumber}</th>
                <th className='date'>訂單時間：{date}</th>
                <th className='status'>出貨狀況：{status}</th>
                <th className='price'>總金額：{allPrice}</th>
            </tr>
            <Item
                productNumber={productNumber}
                productCount={productCount}
                productDescrible={productDescrible}
                productPrice={productPrice}
            />
            <Item
                productNumber={productNumber}
                productCount={productCount}
                productDescrible={productDescrible}
                productPrice={productPrice}
            />
        </table>

    )


export default class OrderDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {


            orderNumber: '123456',
            date: '2020/0801',
            status: 'finish',
            allPrice: 9527,
            productNumber: '001',
            productCount: 1,
            productDescrible: '啊巴啊巴啊巴啊巴啊巴啊巴啊巴啊巴',
            productPrice: 978,


        };
    };
    render() {
        const { orderNumber, date, status, allPrice, productNumber, productCount, productDescrible, productPrice } = this.state
        return (
            <div className='order-detail-container'>
                <div className='detail-area'>
                    <div className='title'>
                        訂單明細
                    </div>
                    <Table {...this.state} />
                    <Table {...this.state} />
                </div>
            </div>
        )
    }

}
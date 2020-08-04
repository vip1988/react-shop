import React from "react";
import './ShopDetail.scss'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
export default class ShopDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
    
    
          price:10000000,
    
        };
      };
    render() {
        const {price} = this.state
        return (
            <div className='shop-detail-container'>
                <div className='detail-area'>
                <div className='title'>
                    購物明細
                    </div>
                <div className='table'>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>產品名稱</th>
                                <th>產品價格</th>
                                <th>數量</th>
                                <th>小計</th>
                                <th>編輯</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <button type="submit" className='btn-delete'>
                                    刪除
                                </button>
                            </tr>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <button type="submit" className='btn-delete'>
                                    刪除
                                </button>
                            </tr>
                        </tbody>
                    </Table>
                    </div>
                </div>
                <div className='price-area'>
                    <div className='text'>
                    總金額：{price}
                    </div>
                    <Link to={'/orderFinishView'}>
                    <button  type="submit"  className='btn-confirm'>
                        訂單送出
                    </button>
                    </Link>
                </div>
            </div>
        )
    }

}
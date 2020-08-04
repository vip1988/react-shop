import React from 'react'
//import '../Form/Login/node_modules/bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.scss'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {


      userAccount: '訪客',
      count: 0

    };
  };
  handleSettingMenuClose = () => {

  }
  render() {
  const {userAccount} = this.state
    return (
      <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#loginView">登入</Nav.Link>
            <Nav.Link href="#shopView">商城</Nav.Link>
            <NavDropdown title="會員專區" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#registerView">修改會員資料</NavDropdown.Item>
              <NavDropdown.Item href="#modifyPassword">修改密碼</NavDropdown.Item>
              <NavDropdown.Item href="#orderDetail">購物紀錄</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <div className='member-section'>
              <Link to={`/shopDetail`}>
              <div className='icon-area'>
                  <div className='icon' />
                  <div className='text'>
                    ({this.state.count})
                  </div>
                  </div>
                  </Link>
                  <div className='text-area'>
                    {userAccount}：您好
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      

      </div>
    )
  }
}


Header.propTypes = {

}




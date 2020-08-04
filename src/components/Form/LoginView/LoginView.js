import React from "react";
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form ,Button} from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import './LoginView.scss'


export default class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userInfo: props.userInfo,
          status:props.status
        };
    }
  componentWillReceiveProps = (nextProps) => {
    this.setState({
      userInfo:nextProps.userInfo,
      status:nextProps.status
  })
}
    handleSubmit = e => {
      const {checkLoginInfo} = this.props
                let userInfo = {
                    userAccount: e.target.elements.userAccount.value,
                    userPassword: e.target.elements.userPassword.value 
                }    
            checkLoginInfo(userInfo);    
    };
    render() {
      const {status} = this.state
      if(status==='error')
  {
    alert('登入失敗')
  }
  else if(status==='success')
  {
    alert('登錄成功')
    //回首頁
   return <Redirect to={'/'} />
  }
        return (
            <div className='login-container'>
                <div className='form-content'>
            <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="userAccount">
              <Form.Label>帳號</Form.Label>
              <Form.Control type="account" placeholder="輸入帳號" />
            </Form.Group>
          
            <Form.Group controlId="userPassword">
              <Form.Label>密碼</Form.Label>
              <Form.Control type="password" placeholder="輸入密碼" />
            </Form.Group>
            <Form.Group controlId="formCheckbox">
                <div className='form-check-area'>
              <Form.Check type="checkbox" label="記住帳密" />
              <div className="form-forgot">
              <a  href="#/forgotPassword">
                            Forgot password
                    </a>
                    </div>
                    </div>
            </Form.Group>
            <div className='form-button-area'>
            <Button variant="primary" type="submit">
              Submit
            </Button>
                <a href="#registerView">register now!</a>
            </div>
           
          </Form>
          </div>
          </div>
        )
    }

}
const propTypes = {
  checkLoginInfo: PropTypes.func.isRequired,
  
  // user: PropTypes.shape({
  //   sessionId: PropTypes.string,
  // }).isRequired,
  
}
import React from "react";
import './ForgotPassword.scss'
export default class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
    
    
            userAccount: '',
            userMail:''
           
    
        };
      };
      handleChange = (event) => {
        const target = event.target;
        const value = target.value
        const name = target.name
        this.setState({
          [name]: value
        });
      }
    
      // form onSubmit 事件處理函式
      handleSubmit = (event) => {
        event.preventDefault();
        const {userAccount,userMail} = this.state
        alert(userAccount)
      }
    render() {
        const { userAccount, userMail } = this.state
        return (
            <div className='forgot-password-container'>
            <form className='form' onSubmit={this.handleSubmit}>
             
                <label className='text'>
                  郵件：
              </label>
              <div className='input-mail'>
                <div className='icon' />
                <input type="mail" className='input' name='userMail' value={userMail} onChange={this.handleChange} />
              </div>
                <label className='text'>
                  帳號：
              </label>
              <div className='input-account'>
                <div className='icon' />
                <input type='text' className='input' name='userAccount' value={userAccount} onChange={this.handleChange} />
                </div>
              <input type="submit"  className='btn-confirm' value="送出" />
            </form>
          </div>
        )
    }

}
import React from "react";
import './ModifyPassword.scss'
export default class ModifyPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
    
    
            userPassword: '',
            checkPassword:''
           
    
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
                  新密碼：
              </label>
              <div className='input-password'>
                <div className='icon' />
                <input type="password" className='input' name='userPassword' value={userMail} onChange={this.handleChange} />
              </div>
                <label className='text'>
                  確認密碼：
              </label>
              <div className='input-check'>
                <div className='icon' />
                <input type='password' className='input' name='checkPassword' value={userAccount} onChange={this.handleChange} />
                </div>
              <input type="submit"  className='btn-confirm' value="確認送出" />
            </form>
          </div>
        )
    }

}
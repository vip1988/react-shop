import React from 'react'
import Select from 'react-select';
import chroma from 'chroma-js';
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import './RegisterView.scss'

var colourOptions = [
  { value: '吃飯', label: '吃飯', color: '#00B8D9', isFixed: true },
  { value: '睡覺', label: '睡覺', color: '#0052CC'},
  { value: '打東東', label: '打東東', color: '#5243AA' },
//   { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
//   { value: 'orange', label: 'Orange', color: '#FF8B00' },
//   { value: 'yellow', label: 'Yellow', color: '#FFC400' },
//   { value: 'green', label: 'Green', color: '#36B37E' },
//   { value: 'forest', label: 'Forest', color: '#00875A' },
//   { value: 'slate', label: 'Slate', color: '#253858' },
//   { value: 'silver', label: 'Silver', color: '#666666' },
 ];
const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
          ? data.color
          : isFocused
            ? color.alpha(0.1).css()
            : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
          ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
          : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
};


export default class RegisterView extends React.Component {
  constructor(props) {
    super(props);

    // 初始化輸入框的 state 值為空
    this.state = {
      sex: '',
      interest:'',
      status:''
    }
  }
  
handleSexChange=(e)=>{
  this.setState({
    sex: e.target.value
  });
}

  // onChange 事件處理函示
  handleChange = (e) => {
    var interest=''
    e.forEach(item => {   interest=interest+item.value+'/'})
    this.setState({
      interest
    });
  }
  // form onSubmit 事件處理函式
  handleSubmit = (e) => {
    e.preventDefault();
    const {sex,interest} = this.state
    const {createUser} = this.props
    const userInfo = {
      account: e.target.elements.account.value,
      password: e.target.elements.password.value,
      name: e.target.elements.name.value,
      sex,
      nickName: e.target.elements.nickName.value,
      phoneNumber: e.target.elements.phoneNumber.value,
      birthday: e.target.elements.birthday.value,
      height: e.target.elements.height.value,
      weight: e.target.elements.weight.value,
      email: e.target.elements.email.value,
      address: e.target.elements.address.value,
      interest
  } 
  alert(JSON.stringify(userInfo))  
  createUser(userInfo)
  }

  render() {
    const {sex} = this.state
    if(this.state.status=='success')
    {
        alert('註冊成功')
        //回首頁
       return <Redirect to={'/login'} />
    }
    // 將 value 設定為 this.state.value
    // 並監聽 onChange 來更新 state
    //const { userAccount, userPassword } = this.state
    return (
      <div className='register-container'>
        <form className='form' onSubmit={this.handleSubmit}>
          <div className='left-section'>
            <label>
              帳號：
          </label>
            <input type="text" name='account'   />

            <label>
              密碼：
          </label>
            <input type="password" name='password' />

            <label>
              姓名：
          </label>
            <input type="text" name='name'  />
            <label>
              性別：
          </label>
            <div className='sex-area'>
              <div className='male-section'>
                <label>
                  <input type="radio" value='male' checked={sex === "male"} onChange={this.handleSexChange}/>男
                </label>
                <div className='icon-male' />
              </div>
              <div className='female-section'>
                <label>
                  <input type="radio" value='female'  checked={sex === "female"} onChange={this.handleSexChange}/>女
          </label>
                <div className='icon-female' />
              </div>
            </div>
            <label>
              暱稱：
          </label>
            <input type="text" name='nickName'  />
            <label>
              電話：
          </label>
            <input type="text" name='phoneNumber'  />
          </div>
          <div className='right-section'>
            <label>
              生日：
          </label>
            <input type='date' name='birthday'  />
            <label>
              身高：
          </label>
            <input type="text" name='height'  />
            <label>
              體重：
          </label>
            <input type="text" name='weight'  />
            <label>
              郵件：
          </label>
            <input type="email" name='email'  />
            <label>
              地址：
          </label>
            <input type="text" name='address'  />
            <label>
              興趣：
          </label>
            <Select
              closeMenuOnSelect={false}
              //defaultValue={[colourOptions[0], colourOptions[1]]}
              isMulti
              options={colourOptions}
              styles={colourStyles}
              onChange={this.handleChange}
            />
          </div>
          <input type="submit"  className='btn-confirm' value="送出" />
        </form>
      </div>
    );
  }
}
const propTypes = {
  createUser: PropTypes.func.isRequired,
  
  // user: PropTypes.shape({
  //   sessionId: PropTypes.string,
  // }).isRequired,
  
}





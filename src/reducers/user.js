
import { handleActions } from 'redux-actions'
import { CHECK_USER_INFO,CREATE_USER_INFO } from '../actions/user'
  
  // ------------------------------------
  // Reducer
  // ------------------------------------
  const initialState = {
    userInfo: [],
    status: '',
    // login: '',
    // password: '',
  }
  
  export default handleActions(
    {
      [CHECK_USER_INFO]: (state, { payload }) => ({
        ...state,
        userInfo:payload.memberInfo,
        status:payload.status
      }),
      [CREATE_USER_INFO]: (state, { payload }) => ({
        ...state,
        status:payload.status
      }),
      
     
 
    },
    initialState,
  )
  
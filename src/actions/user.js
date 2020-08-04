import { createAction } from 'redux-actions'


// Constants
// ------------------------------------
export const CHECK_USER_INFO = 'CHECK_USER_INFO'
export const CREATE_USER_INFO= 'CREATE_USER_INFO'
// ------------------------------------
// Actions (Thunks)
// ------------------------------------
export const checkUserInfo = createAction(CHECK_USER_INFO)
export const createUserInfo = createAction(CREATE_USER_INFO)

export const checkLoginInfo = data => {
    return async dispatch => {
        try {
            let response = await fetch( 'http://localhost:8080/ecpbm/api//user/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    account: data.userAccount || undefined,
                    password: data.userPassword || undefined,
                    
                })
            })
            let res = await response.json()
            console.warn(res);
            if (res.status == 'success') {
                dispatch(
                    checkUserInfo(
                        res
                  ),)
            }
            else {
                dispatch(
                    checkUserInfo(
                        res
                  ),)
            }
        } catch(error) {
            console.error('error', error)
        }
    }
}

export const createUser = data => {
    return async dispatch => {
        try {
            let response = await fetch( 'http://localhost:8080/ecpbm/api/user/create_user', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    account: data.account || undefined,
                    password: data.password || undefined,
                    name:data.name || undefined,
                    nickName:data.nickName || undefined,
                    sex:data.sex || undefined,
                    phoneNumber:data.phoneNumber || undefined,
                    birthday:data.birthday || undefined,
                    height:data.height || undefined,
                    weight:data.weight || undefined,
                    email:data.email || undefined,
                    address:data.address || undefined,
                    interest:data.interest || undefined,
                })
            })
            let res = await response.json()
            console.warn(res);
            if (res.status == 'success') {
                dispatch(
                    createUserInfo(
                        res
                  ),)
            }
            else {
                dispatch(
                    createUserInfo(
                        res
                  ),)
            }
        } catch(error) {
            console.error('error', error)
        }
    }
}






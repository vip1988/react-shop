import { connect } from 'react-redux'
import { checkLoginInfo } from '../actions/user'
import LoginView from '../components/Form/LoginView/LoginView'

const mapDispatchToProps = {
    checkLoginInfo
}

const mapStateToProps = state => ({
    userInfo: state.user.userInfo,
    status:state.user.status
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginView)

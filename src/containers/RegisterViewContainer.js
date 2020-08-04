import { connect } from 'react-redux'
import { createUser } from '../actions/user'
import RegisterView from '../components/Form/Register/RegisterView'

const mapDispatchToProps = {
    createUser
}

const mapStateToProps = state => ({
    userInfo: state.user.userInfo,
    status:state.user.status
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterView)

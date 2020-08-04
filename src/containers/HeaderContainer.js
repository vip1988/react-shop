import { connect } from 'react-redux'
//import { setLocale } from 'actions/header'
//import { localeSelector } from 'selectors'
import Header from '../components/Header/Header'

const mapDispatchToProps = {
  //setLocale,
}

const mapStateToProps = state => ({
  currentLocale:123
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)

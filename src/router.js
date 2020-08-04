import Index from './components/index'
import LoginViewContainer from './containers/LoginViewContainer'
import ShopView from './components/ShopView/ShopView'
import ShopDetail from './components/ShopDetail/ShopDetail'
import OrderFinishView from './components/OrderFinishView/OrderFinishView'
import RegisterViewContainer from './containers/RegisterViewContainer'
import ForgotPassword from './components/Form/Password/ForgotPassword/ForgotPassword'
import ModifyPassword from './components/Form/Password/ModifyPassword/ModifyPassword'
import OrderDetail from './components/OrderDetail/OrderDetail'

const routes = [
    {
        path: '/',
        exact: true,
        component: Index
    },
    {
        path: '/loginView',
        exact: true,
        component: LoginViewContainer
    },
    {
        path: '/registerView',
        exact: true,
        component: RegisterViewContainer
    },
    {
        path: '/forgotPassword',
        exact: true,
        component: ForgotPassword
    },
    {
        path: '/modifyPassword',
        exact: true,
        component: ModifyPassword
    },
    {
        path: '/shopView',
        exact: true,
        component: ShopView
    },
    {
        path: '/shopDetail',
        exact: true,
        component: ShopDetail
    },
    {
        path: '/orderFinishView',
        exact: true,
        component: OrderFinishView
    },
    {
        path: '/orderDetail',
        exact: true,
        component: OrderDetail
    }
]

export default routes
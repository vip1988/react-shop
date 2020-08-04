import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import routes from './router.js'
import { createStore, applyMiddleware } from 'redux'
import Thunk from 'redux-thunk'
import reducers from './reducers'

const store = createStore(reducers, applyMiddleware(Thunk))

class Main extends React.Component {
	constructor(props, context) {
		super(props, context)
	}
	render() {
		return (
			<div>		
				<Provider store={store}>
					<HashRouter>
						{renderRoutes(routes)}
					</HashRouter>
				</Provider>
			</div>
		)
	}
}
export default Main
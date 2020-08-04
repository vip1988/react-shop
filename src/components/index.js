import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header/Header'
import Carousels from './Carousels/Carousels'
import Introduction from './Introduction/Introduction'
import Footer from './Footer/Footer'
export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div>
                <Header />
                <Carousels />
                <Introduction />  
                <Footer />
            </div>
        )
    }
}

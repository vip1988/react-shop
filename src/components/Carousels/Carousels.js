import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'
import classnames from 'classnames'
import dog from './images/dog.jpg'
//import ControlledCarousel from 'react-bootstrap/ControlledCarousel';
import { Container,Carousel } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/withStyles'
import  './Carousels.scss'

export default class Carousels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentKey: '',

        };
    };

    render() {
        return (
            <div className='carousels-container'>
                <Container>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={dog}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={dog}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={dog}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container>
                   
            </div>
        )
    }
}


Carousels.propTypes = {
    //   locale: PropTypes.string.isRequired,
    //   isInGame: PropTypes.bool,
    //   isEnableBackToLobby: PropTypes.bool,
    //   zoneCd: PropTypes.string.isRequired,
    //   avatarId: PropTypes.number.isRequired,
    //   memberName: PropTypes.string,
    //   isVisitor: PropTypes.bool.isRequired,
    //   hasChangeProfilePicturePermission: PropTypes.bool.isRequired,
    //   setPopupModal: PropTypes.func.isRequired,
    //   joinLobby: PropTypes.func.isRequired,
    //   isKRWMember: PropTypes.bool.isRequired,
    //   memberPropRate: PropTypes.number.isRequired,
}

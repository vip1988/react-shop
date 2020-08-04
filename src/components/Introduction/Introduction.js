import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Container, CardDeck, Card } from 'react-bootstrap';
import store from './images/store.jpg'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import './introduction.scss'
const detailContent = <div> This is a wider card with supporting text below as a natural lead-in to
additional content. This card has even longer content than the first to
show that equal height action.</div>
const Detail = ({
  detailOpen
}) => {
  return (
    <SlideDown className={'my-dropdown-slidedown'}>
    {detailOpen ? detailContent : null}
    </SlideDown>
  )
}
export default class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      detailOpen1: true,
      detailOpen2: true,
      detailOpen3: true,

    };
  };

  showDetail1 = () => {
    this.setState(prevState => ({
      detailOpen1: !prevState.detailOpen1,
    }))
  }
  showDetail2 = () => {
    this.setState(prevState => ({
      detailOpen2: !prevState.detailOpen2,
    }))
  }
  showDetail3 = () => {
    this.setState(prevState => ({
      detailOpen3: !prevState.detailOpen3,
    }))
  }
  render() {
    const { detailOpen1,detailOpen2,detailOpen3 } = this.state

    return (
      <div className='introduction-container'>
      <Container>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={store} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
      </Card.Text>
      <div onClick={this.showDetail1}>show detail</div>
              <Detail detailOpen={detailOpen1}/>
            </Card.Body>

            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={store} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
        content.{' '}
              </Card.Text>
              <div onClick={this.showDetail2}>show detail</div>
              <Detail detailOpen={detailOpen2}/>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={store} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
      </Card.Text>
              <div onClick={this.showDetail3}>show detail</div>
              <Detail detailOpen={detailOpen3}/>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Container>
</div>



    )
  }
}


Introduction.propTypes = {
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




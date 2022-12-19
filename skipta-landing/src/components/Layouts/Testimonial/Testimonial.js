import './Testimonial.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Testimonial() {
return (
<div className='testimonial-container padding__tb--50'>
    <h1>What People Say</h1>
    <Container>
    <Row className='padding__tb--20'>
    <Col>
    <img src={require('../../../assets/images/communities/Cardiologist Connect.PNG')} alt="React Logo" />
    <div className='head'>
    <h1>Cardiology</h1>
    <h2>Cardiology</h2>
    </div>
    <p>In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards amon.</p>
    </Col>
    <Col>
    <img src={require('../../../assets/images/communities/Cardiologist Connect.PNG')} alt="React Logo" />
    <div className='head'>
    <h1>Cardiology</h1>
    <h2>Cardiology</h2>
    </div>
    <p>In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards amon.</p>
    </Col>
    <Col>
    <img src={require('../../../assets/images/communities/Cardiologist Connect.PNG')} alt="React Logo" />
    <div className='head'>
    <h1>Cardiology</h1>
    <h2>Cardiology</h2>
    </div>
    <p>In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards amon.</p>
    </Col>
    </Row>

    <Row className='padding__tb--20'>
    <Col>
    <img src={require('../../../assets/images/communities/Cardiologist Connect.PNG')} alt="React Logo" />
    <div className='head'>
    <h1>Cardiology</h1>
    <h2>Cardiology</h2>
    </div>
    <p>In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards amon.</p>
    </Col>
    <Col>
    <img src={require('../../../assets/images/communities/Cardiologist Connect.PNG')} alt="React Logo" />
    <div className='head'>
    <h1>Cardiology</h1>
    <h2>Cardiology</h2>
    </div>
    <p>In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards amon.</p>
    </Col>
    <Col>
    <img src={require('../../../assets/images/communities/Cardiologist Connect.PNG')} alt="React Logo" />
    <div className='head'>
    <h1>Cardiology</h1>
    <h2>Cardiology</h2>
    </div>
    <p>In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards amon.</p>
    </Col>
    </Row>
    </Container>
</div>
);
}

export default Testimonial;

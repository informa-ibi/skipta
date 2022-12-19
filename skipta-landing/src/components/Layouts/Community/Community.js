import './Community.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Community() {
return (
<div className='community-container padding__tb--50'>
    <h1>Featured Communities</h1>
    <p>Skipta is comprised of 30+ medical communites across specialties such as cardiology, neurology, and oncology.  </p>
    <Container>
    <Row className='padding__tb--40'>
    <Col>
    <img src={require('../../../assets/images/communities/Cardiologist Connect.PNG')} alt="React Logo" />
    <p>Cardiology</p>
    </Col>
    <Col>
    <img src={require('../../../assets/images/communities/Dermatologist Nation.PNG')} alt="React Logo" />
    <p>Dermatology</p>
    </Col><Col>
    <img src={require('../../../assets/images/communities/Endocrinologist Nation.PNG')} alt="React Logo" />
    <p>Endocrinology</p>
    </Col><Col>
    <img src={require('../../../assets/images/communities/Doctor Unite.PNG')} alt="React Logo" />
    <p>Primary Care</p>
    </Col>
    </Row>

    <Row className='padding__tb--40'>
    <Col>
    <img src={require('../../../assets/images/communities/Endocrinologist Nation.PNG')} alt="React Logo" />
    <p>Endocrinology</p>
    </Col>
    <Col>
    <img src={require('../../../assets/images/communities/Gastroenterologist Connect.PNG')} alt="React Logo" />
    <p>Gastroenterology</p>
    </Col><Col>
    <img src={require('../../../assets/images/communities/Neurologist Connect.PNG')} alt="React Logo" />
    <p>Neurology</p>
    </Col><Col>
    <img src={require('../../../assets/images/communities/Oncology Nation.PNG')} alt="React Logo" />
    <p>Oncology</p>
    </Col>
    </Row>
    </Container>
    <button>SHOW ALL</button>
</div>
);
}

export default Community;

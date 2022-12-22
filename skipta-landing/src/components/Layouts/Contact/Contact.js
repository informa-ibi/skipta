import './Contact.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Contact() {
return (
<div className='contact-container padding__tb--50'>
    <h1>Contact Us</h1>
    <p>Please enter your information below and we will contact you. </p>
    <Container>
    <Form>
    <Row className='form-row-wrap padding__tb--10'>
    <Col>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>FIRST NAME</Form.Label>
    <Form.Control type="text" placeholder="FIRST NAME" />
    </Form.Group>
    </Col>
    
    <Col>
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>LAST NAME</Form.Label>
    <Form.Control type="text" placeholder="LAST NAME" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    </Form.Group>
    </Col>
    
    </Row>

    <Row className='form-row-wrap padding__tb--10'>
    <Col>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>YOUR MAIL</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    </Col>
    
    <Col>
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>PHONE NUMBER</Form.Label>
    <Form.Control type="phone" placeholder="PHONE NUMBER" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    </Form.Group>
    </Col>
    
    </Row>


    <Row className='form-row-wrap padding__tb--10'>
    <Col>
    <Form.Label>I’M A</Form.Label>
    <Form.Check type="checkbox" label="HEALTHCARE PROFESSIONALt" />
    <Form.Check type="checkbox" label="POTENTIAL PARTNER" />

    </Col>
    
    <Col>
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>COMPANY NAME</Form.Label>
    <Form.Control type="text" placeholder="COMPANY NAME" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    </Form.Group>
    </Col>
    
    </Row>

    <Row className='form-row-wrap padding__tb--10'>
    <Col>
    <Form.Label>MESSAGE</Form.Label>

    <InputGroup size="lg" className='textarea'>
    <Form.Control
        aria-label="Large"
        aria-describedby="inputGroup-sizing-sm"
    />
    </InputGroup>
    </Col>

    
    </Row>
    
    </Form>

    </Container>
    <div className='padding__tb--20'>
    <button>SEND MESSAGE</button>
    </div>
</div>
);
}

export default Contact;

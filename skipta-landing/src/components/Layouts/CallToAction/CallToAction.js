import './CallToAction.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CallToAction() {
return (
<div className='call-to-action-container padding__tb--70'>
    <h1>How we help</h1>
    <p>Complete, targeted solutions for healthcare marketers
One size fits all marketing is a thing of the past – reach to the future with the bespoke marketing solutions from Skipta.</p>
    <p>Skipta is where your healthcare target is right now</p>
    <div className='padding__tb--20'>
    <button>Contact Us</button>
    </div>
</div>
);
}

export default CallToAction;

import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm"
import logo from '../assets/img/logo.svg';
import logoNew from '../assets/img/logo-new.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/github.svg';


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />

                    <Col size={12} sm={6}>
                        {/* <img src={logoNew} alt="Logo" /> */}
                    </Col>

                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=""> <img src={navIcon1} onclick="location.href='https://www.linkedin.com/in/bindu-sn-48052a27b/'" /> </a>
                            <a href=""> <img src={navIcon4} onclick="location.href='https://github.com/04bindu/'"/> </a>
                            <a href=""> <img src={navIcon3} onclick="location.href='https://instagram.com/'" /> </a>

                        </div>

                        <p> Towards the path of improvement ❤️ </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
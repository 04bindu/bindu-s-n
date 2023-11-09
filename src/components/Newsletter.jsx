import { useState, useEffect } from "react";
import { Alert, Row, Col } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');

        useEffect(() => {
            if(status==='success')
                clearFields();
            }, [status]);

        const handleSubmit = (e) => {
            e.preventDefault();
            email && email.indexOf("@") > -1 && onValidated({
                EMAIL: email
            })
        }
    

    const clearFields = () => {
        setEmail('');
    }

    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={10} xl={10}>
                        <h3> Wanna learn the spoiler of a movie or drama? Reach out to me on social media or send me an email. </h3>
                    </Col>

                    <Col md={2} xl={2}>
                        {/* <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                                <button type="submit"> Submit </button>
                            </div>
                        </form> */}
                        <div>
                            <a href="mailto:bindu.narasimhamurthy@gmail.com" className="a-banner">
                            <button type="submit" className="submit-btn"> Mail </button>
                            </a>
                        </div>
                        
                    
                    </Col>
                </Row>
            </div>
        </Col>
    )
}
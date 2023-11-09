import { Container, Col, Row } from "react-bootstrap";


export const Cont = () => {
    return (
        <section className="cnt" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="cnt-bx">
                        <h2> Contact </h2>
                        <p> Wanna argue why Dominos is better than Pizza Hut? Reach out to me on social media or send me an email. </p>
                        
            
                            
                            <button type="submit" className="cont-submit"> Submit </button>
                            
                    </div>
                    </Col>
                </Row>
            </Container>

            {/* <img className="background-image-left" src={colorSharp} /> */}
            <div className="sparkle" />
        </section>
    )
};
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import { Container, Col, Row } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/Capture1.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Proj = () => {
    const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2> Skills </h2>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe totam ad ex voluptatum distinctio praesentium placeat doloremque velit vero veniam, ipsa accusamus aperiam tempore commodi et fugiat provident enim minima? </p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5> Web Development</h5>
                            </div>

                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5> Web Development</h5>
                            </div>

                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5> Web Development</h5>
                            </div>

                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>

            <img className="background-image-left" src={colorSharp} />
        </section>
    )
};
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import { Container, Col, Row } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
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
                        <p> I can handle databases and dad jokes with equal finesse </p>
                        <p>while I can also </p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                                <h5> Java </h5>
                            </div>
                            <div className="item">
                                {/* <img src={meter1} alt="Image" /> */}
                                <h5> HTML5 </h5>
                            </div>

                            <div className="item">
                                {/* <img src={meter2} alt="Image" /> */}
                                <h5> CSS3 </h5>
                            </div>

                            <div className="item">
                                {/* <img src={meter3} alt="Image" /> */}
                                <h5> Bootstrap5</h5>
                            </div>
                            <div className="item">
                                <h5> MaterialUI </h5>
                            </div>
                            <div className="item">
                                <h5> ReactJS </h5>
                            </div>
                            <div className="item">
                                <h5> Redux </h5>
                            </div>
                            <div className="item">
                                <h5> MongoDB </h5>
                            </div>
                            <div className="item">
                                <h5> Mongoose </h5>
                            </div>
                            <div className="item">
                                <h5> NodeJS </h5>
                            </div>
                            <div className="item">
                                <h5> ExpressJS </h5>
                            </div>
                            <div className="item">
                                <h5> Javascript(ES5+) </h5>
                            </div>
                            

                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>

            {/* <img className="background-image-left" src={colorSharp} /> */}
            <div className="sparkle" />
        </section>
    )
};
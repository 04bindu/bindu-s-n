import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import header from "../assets/img/header.svg";
import header1 from "../assets/img/header1.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { HashLink } from 'react-router-hash-link';
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = "Aspiring";
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
        
          <Col xs={12} md={6} xl={7}>
            {/* <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}> */}
              <div>
                {/* <span className="tagline">Welcome to my Portfolio</span> */}
                <h1>{`Hi! I'm Binduuu, `}<span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer"]'><span className="wrap">{'\n'} {text}</span>{'\n'}{ ` Web Developer` }</span></h1>
                  
                  <p> No no, I don't solve logical puzzles for breakfast! :) </p>
                  <p> I like to stay abreast of the latest technological trends and employ my technical skills and knowledge to solve challenging problems. </p>
                  <p> I love dolphins, dosas and dramas. </p>
                  <div>
                  <a href="mailto:bindu.narasimhamurthy@gmail.com" className="a-banner">
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                  </a></div>

                  
              </div>
            {/* </TrackVisibility> */}
          </Col>

          <Col xs={12} md={6} xl={5}>
            {/* <TrackVisibility> */}
              {/* {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}> */}
                <div>
                  
                  <img src={header1} alt="Header Img"/>
                  
                </div>
            {/* </TrackVisibility> */}
          </Col>
          
        </Row>
      </Container>
    </section>
  )
}

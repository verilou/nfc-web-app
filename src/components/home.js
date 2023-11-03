import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';
const Home = () => (
    <div>
        <header className="header">
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="119" height="120">
                        <path
                            d="M 59.5 0.663 C 92.273 0.663 118.841 27.229 118.841 60 C 118.841 60.042 118.841 60.084 118.841 60.127 L 0.159 60.127 C 0.159 60.084 0.159 60.042 0.159 60 C 0.159 27.229 26.727 0.663 59.5 0.663 Z M 59.5 119.337 C 49.507 119.337 40.092 116.867 31.83 112.505 L 87.17 112.505 C 78.908 116.867 69.493 119.337 59.5 119.337 Z M 118.803 62.151 C 118.757 63.427 118.672 64.692 118.547 65.946 L 0.453 65.946 C 0.328 64.692 0.243 63.427 0.197 62.151 Z M 118.31 67.971 C 118.116 69.422 117.868 70.856 117.571 72.272 L 1.429 72.272 C 1.132 70.856 0.884 69.422 0.69 67.971 Z M 116.568 76.321 C 116.152 77.778 115.682 79.213 115.159 80.622 L 3.841 80.622 C 3.318 79.213 2.848 77.778 2.432 76.321 Z M 113.485 84.671 C 112.773 86.227 111.995 87.746 111.156 89.226 L 7.844 89.226 C 7.005 87.746 6.227 86.227 5.515 84.671 Z M 105.22 97.829 C 103.432 99.987 101.494 102.017 99.422 103.902 L 19.578 103.902 C 17.506 102.017 15.568 99.987 13.78 97.829 Z"
                            fill="#002855"></path>
                    </svg>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h1 className="title">
                        Master
                        <br /> Node & React
                        <br /> magician
                    </h1>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <button className="buttonLeft">Hire me</button>
                    <button className="buttonRight">Explore more</button>
                </Col>
            </Row>
        </header>
        <div className="description">
            <Row>
                <Col className="noPadding">
                    <h2 className="descTitle">
                        Welcome to My
                        <br /> Realm
                    </h2>
                </Col>
                <Col>
                    <p className="descText">
                        I’m a freelance fullstack developer who’s mastered the arts of Node and
                        React, while conjuring some serious AWS spells. Have a peek into my
                        enchanted portfolio and let’s collaborate to bring your wildest projects to
                        life.
                    </p>
                </Col>
            </Row>
        </div>
        <div className="experiences">
            <h2 className="expTitle">Summoned Experience</h2>
            <Row>
                <Col>Zenride.</Col>
                <Col className="expYears">2019 - 2020</Col>
            </Row>
            <Row>
                <Col>Leroy Merlin.</Col>
                <Col className="expYears">2019 - 2020</Col>
            </Row>
            <Row>
                <Col>Mistertemp&apos;.</Col>
                <Col className="expYears">2019 - 2020</Col>
            </Row>
        </div>
        <div>Proud to have enchanted</div>
        <div className="test">test</div>
        
        <Link to={'login'}>Login</Link>
    </div>
);

export default Home;

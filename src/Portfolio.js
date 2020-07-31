import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FadeInSection from './FadeInSection.js';
import ProjectPaper from './ProjectPaper.js';

import CFG from './papers/CFG.pdf';

import CFG_capture from './imgs/CFG_capture.png';
import OSU_COVID_Hub_capture from './imgs/OSU_COVID_Hub_capture.PNG';
import MealPlanner_capture from './imgs/MealPlanner_capture.PNG';
import cascade_sim_capture from './imgs/cascade_sim_capture.png';
//import streamer_capture from './imgs/streamer_capture.png';

import './css/Portfolio.css';

function Portfolio() {
    var projects = [
        {
            name: "Meal Planner",
            link: "",
            capture: MealPlanner_capture,
            description: "hello der"
        },
        {
            name: "Streamer Hub Website",
            link: "https://john24144.github.io/Streamer-hub-website/",
            capture: "",
            description: "hello der"
        }
    ];

    var papers = [
        {
            name: "Exploring Graph-based Methods in Malware Detection",
            link: CFG,
            capture: CFG_capture,
            description: "hello der"
        },
        {
            name: "OSU COVID Info Hub",
            link: "",
            capture: OSU_COVID_Hub_capture,
            description: "hello der"
        },
        {
            name: "Cascade Sim",
            link: "https://john24144.github.io/cascade_sim/",
            capture: cascade_sim_capture,
            description: "hello der"
        }
    ];

    return (
        <div id="Portfolio">
            <Row className="navbar-offset" />
            <FadeInSection>
                <Row id="Projects">
                    <Col className="text-center my-auto">
                        <h2>Projects:</h2>
                    </Col>
                </Row>
                <ProjectPaper items={projects} />
            </FadeInSection>
            <FadeInSection>
                <Row id="Papers">
                    <Col className="text-center my-auto">
                        <h2>Papers:</h2>
                    </Col>
                </Row>
                <ProjectPaper items={papers} /> 
            </FadeInSection>
        </div>
    );
}

export default Portfolio;
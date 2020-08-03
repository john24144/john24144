import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FadeInSection from './FadeInSection.js';
import ProjectPaper from './ProjectPaper.js';

import CFG from './papers/CFG.pdf';
import OSU_COVID_Hub from './papers/OSU_COVID_Info_Hub.pdf';

import CFG_capture from './imgs/CFG_capture.png';
import OSU_COVID_Hub_capture from './imgs/OSU_COVID_Hub_capture.PNG';
import MealPlanner_capture from './imgs/MealPlanner_capture.PNG';
import cascade_sim_capture from './imgs/cascade_sim_capture.png';
import Streamer_Hub_capture from './imgs/Streamer_Hub_capture.PNG';

import './css/Portfolio.css';

function Portfolio() {
    var projects = [
        {
            name: "Meal Planner",
            link: "",
            capture: MealPlanner_capture,
            description: (
                <>
                    <h2>Meal Planner</h2>
                    <h5> Python - IBM Watson Discovery - Kroger Public API</h5>
                    <p>
                        Meal Planner is the kitchen assistant application for home chefs.
                        <li>
                            Search for recipes using several filters from a database of 100+ recipes,
                            stored on IBM Watson's Discovery service.
                        </li>
                        <li>
                            Save your favorite recipes for when you want to use them later.
                        </li>
                        <li>
                            Schedule meals on a built in calendar from your saved recipes.
                        </li>
                        <li>
                            Keep track of all your ingredients in your kitchen in one place.
                        </li>
                        <li>
                            Find your missing ingredients at Kroger using the Kroger product search.
                        </li>
                    </p>
                </>
            )
        },
        {
            name: "Streamer Hub Website",
            link: "https://john24144.github.io/Streamer-hub-website/",
            capture: Streamer_Hub_capture,
            description: (
                <>
                    <h2>Streamer Hub Website</h2>
                    <h5>Angular - Firebase</h5>
                    <p>
                        Streamer Hub is a website that aims to combine Twitch, Discord, and other smaller streaming services into one UI.
                        <li>
                            Watch your favorite twitch streamers and their chats under your profile.
                        </li>
                        <li>
                            Join Discord chatrooms under your profile.
                        </li>
                        <li>
                            View and/or participate in streamer events or polls.
                        </li>
                    </p>
                </>
            )
        }
    ];

    var papers = [
        {
            name: "Exploring Graph-based Methods in Malware Detection",
            link: CFG,
            capture: CFG_capture,
            description: (
                <>
                    <h2>Exploring Graph-based Methods in Malware Detection</h2>
                    <h5>Networkx - Matlab</h5>
                    <p>Abstract:</p>
                    <p>
                        The rapid growth of smart devices and network scale has provide asolid base for malware development and spreading. 
                        As a result, detecting malware before it costs is crucial for the users of these smart devices such as laptops, desktops, 
                        etc. However, the virus detection schemes based on signature manifest unsatisfactory performancewhen they dispose the 
                        previously unknown virus. Recently, with the development of machine learning algorithms, we are able to predict a given 
                        software contains malicious component or not before it causes losses with the pre-trained classification schemes.
                        In this report, we present a graph features based method, which can be used in the process of machine learning, and 
                        design a virus detection model based on our feature method. The features are extracted from Control Flow Graph (CFG) and 
                        Function Call Graph (FCG) of executable. we adapt a well-known three-step approaches in our detection model: 1) creating 
                        the corresponding graph, 2) processing the graph and extracting the useful features, and 3) training classifiers according 
                        to specific machine learning algorithms, and detect virus with the classifiers. Our evaluation is based on real
                        malware and benignware collection, and shows an F1 score of 88.3% with the ten fold validation test.
                    </p>
                    <a href={CFG}><p>Click here to read the full paper.</p></a>
                </>
            )
        },
        {
            name: "OSU COVID Info Hub",
            link: OSU_COVID_Hub,
            capture: OSU_COVID_Hub_capture,
            description: (
                <>
                    <h2>OSU COVID Info Hub</h2>
                    <h5>UML</h5>
                    <p>
                        This paper is a work product that outlines how a project such as this should be approached.
                        <li>
                            Business and Enterprise Analysis on OSU
                        </li>
                        <li>
                            Software Engineering Process
                        </li>
                        <li>
                            Requirements
                        </li>
                        <li>
                            Analysis and Architecture
                        </li>
                        <li>
                            Project Management
                        </li>
                    </p>
                    <a href={OSU_COVID_Hub}><p>Click here to read the full paper.</p></a>
                </>
            )
        },
        {
            name: "Cascade Sim",
            link: "https://john24144.github.io/cascade_sim/",
            capture: cascade_sim_capture,
            description: (
                <>
                    <h2>Cascade Sim</h2>
                    <h5>Networkx</h5>
                    <p>
                        This paper aims to simulate and study an "information cascade" on a randomized network.
                    </p>
                    <a href="https://john24144.github.io/cascade_sim/"><p>Click here to read the full paper.</p></a>
                </>
            )
        }
    ];

    return (
        <div id="Portfolio">
            <Row className="navbar-offset" />
            <FadeInSection>
                <Row id="Projects">
                    <Col className="text-center my-auto">
                        <h1>Projects:</h1>
                    </Col>
                </Row>
                <ProjectPaper items={projects} />
            </FadeInSection>
            <FadeInSection>
                <Row id="Papers">
                    <Col className="text-center my-auto">
                        <h1>Papers:</h1>
                    </Col>
                </Row>
                <ProjectPaper items={papers} /> 
            </FadeInSection>
        </div>
    );
}

export default Portfolio;
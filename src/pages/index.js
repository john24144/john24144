import React from "react";
import {
  Row,
  Col,
  Container,
  Navbar,
  Nav,
  Accordion,
  Card,
  Button,
} from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/index.css";

const IndexPage = () => (
  <Container fluid>
    <Navbar className="bg-light" fixed="top">
      <Nav>
        <Nav.Link href="#Home">HOME</Nav.Link>
        <Nav.Link href="#About">ABOUT</Nav.Link>
        <Nav.Link href="#Projects">PROJECTS</Nav.Link>
        <Nav.Link href="#Papers">PAPERS</Nav.Link>
        <Nav.Link href="#Contact">CONTACT</Nav.Link>
      </Nav>
    </Navbar>
    <Row id="Home">
      <Col className="text-center my-auto" xs={12} lg={6}>
        <StaticImage
          src="../images/circle.png"
          alt="circle"
          className="rotating"
        />
      </Col>
      <Col className="text-center my-auto" xs={12} lg={6}>
        <h1>Keith Johnson</h1>
        <h2>Software Consultant</h2>
      </Col>
    </Row>
    <Row id="About">
      <Col className="text-center my-auto" xs={12} lg={4}>
        <StaticImage
          src="../images/headshot.jpg"
          alt="headshot"
          className="headshot"
        />
      </Col>
      <Col className="my-auto" xs={12} lg={8}>
        <h2 className="text-center">Hello.</h2>
        <h5>
          My name is Keith, and I've just graduated from The Ohio State
          University. So, now I'm looking for an entry level position that will
          test my abilities as a software developer. Here's what you can count
          on me for:
        </h5>
        <h5>
          <li>
            I have plenty of programming languages under my belt, plus I can
            learn fast.
          </li>
          <li>I have previous experience interning as a web developer.</li>
          <li>I know how to be a team player and/or team leader.</li>
          <li>
            I'm excited to enter the field to grow even more as a software
            engineer.
          </li>
        </h5>
      </Col>
    </Row>
    <Row id="Projects">
      <Col xs={12}>
        <h2 className="text-center">
          Check out some of my more recent projects:
        </h2>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Button} variant="secondary" eventKey="0">
              <h3 className="text-center">Garage Sale Application</h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Row className="project">
                <Col className="text-center" xs={12} lg={6}>
                  <StaticImage
                    className="capture"
                    src="../images/GarageSale_capture.png"
                    alt="Garage Sale Capture"
                  />
                </Col>
                <Col xs={12} lg={6}>
                  <h5 className="text-center">
                    LAMP Stack (Linux, Apache, Mariadb, PHP)
                  </h5>
                  <p>
                    Garage Sale Application is a website for selling items with
                    a focus on physical garage sales.
                    <li>
                      Users each have secure individual accounts for storing
                      data.
                    </li>
                    <li>
                      Users can create garage sales with a name, location, and
                      various items.
                    </li>
                    <li>
                      Users can add items to their sales with names, prices, and
                      amounts.
                    </li>
                    <li>
                      Users can view other garage sales near their location.
                    </li>
                    <li>Users can exchange messages with other users.</li>
                  </p>
                </Col>
              </Row>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Button} variant="secondary" eventKey="1">
              <h3 className="text-center">Meal Planner</h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Row className="project">
                <Col className="text-center" xs={12} lg={6}>
                  <StaticImage
                    className="capture"
                    src="../images/MealPlanner_capture.png"
                    alt="Meal Planner Capture"
                  />
                </Col>
                <Col xs={12} lg={6}>
                  <h5 className="text-center">
                    Python - IBM Watson Discovery - Kroger Public API
                  </h5>
                  <p>
                    Meal Planner is the kitchen assistant application for home
                    chefs.
                    <li>
                      Search for recipes using several filters from a database
                      of 100+ recipes, stored on IBM Watson's Discovery service.
                    </li>
                    <li>
                      Save your favorite recipes for when you want to use them
                      later.
                    </li>
                    <li>
                      Schedule meals on a built in calendar from your saved
                      recipes.
                    </li>
                    <li>
                      Keep track of all your ingredients in your kitchen in one
                      place.
                    </li>
                    <li>
                      Find your missing ingredients at Kroger using the Kroger
                      product search.
                    </li>
                  </p>
                </Col>
              </Row>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Button} variant="secondary" eventKey="2">
              <h3 className="text-center">Streamer Hub Website</h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Row className="project">
                <Col className="text-center" xs={12} lg={6}>
                  <StaticImage
                    className="capture"
                    src="../images/Streamer_Hub_capture.png"
                    alt="Streamer Hub Capture"
                  />
                </Col>
                <Col xs={12} lg={6}>
                  <h5 className="text-center">Angular - Firebase</h5>
                  <p>
                    Streamer Hub is a website that aims to combine Twitch,
                    Discord, and other smaller streaming services into one UI.
                    <li>
                      Watch your favorite twitch streamers and their chats under
                      your profile.
                    </li>
                    <li>Join Discord chatrooms under your profile.</li>
                    <li>
                      View and/or participate in streamer events or polls.
                    </li>
                  </p>
                </Col>
              </Row>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Col>
    </Row>
    <Row id="Papers">
      <Col xs={12}>
        <h2 className="text-center">Here are some Papers I was a part of:</h2>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Button} variant="secondary" eventKey="0">
              <h3 className="text-center">
                Exploring Graph-based Methods in Malware Detection
              </h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Row className="project">
                <Col className="text-center" xs={12} lg={6}>
                  <StaticImage
                    className="capture"
                    src="../images/CFG_capture.png"
                    alt="CFG Capture"
                  />
                </Col>
                <Col xs={12} lg={6}>
                  <h5 className="text-center">Networkx - Matlab</h5>
                  <p>Abstract:</p>
                  <p>
                    The rapid growth of smart devices and network scale has
                    provide asolid base for malware development and spreading.
                    As a result, detecting malware before it costs is crucial
                    for the users of these smart devices such as laptops,
                    desktops, etc. However, the virus detection schemes based on
                    signature manifest unsatisfactory performancewhen they
                    dispose the previously unknown virus. Recently, with the
                    development of machine learning algorithms, we are able to
                    predict a given software contains malicious component or not
                    before it causes losses with the pre-trained classification
                    schemes. In this report, we present a graph features based
                    method, which can be used in the process of machine
                    learning, and design a virus detection model based on our
                    feature method. The features are extracted from Control Flow
                    Graph (CFG) and Function Call Graph (FCG) of executable. we
                    adapt a well-known three-step approaches in our detection
                    model: 1) creating the corresponding graph, 2) processing
                    the graph and extracting the useful features, and 3)
                    training classifiers according to specific machine learning
                    algorithms, and detect virus with the classifiers. Our
                    evaluation is based on real malware and benignware
                    collection, and shows an F1 score of 88.3% with the ten fold
                    validation test.
                  </p>
                  <a href="../../static/papers/CFG.pdf">
                    <p>Click here to read the full paper.</p>
                  </a>
                </Col>
              </Row>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Button} variant="secondary" eventKey="1">
              <h3 className="text-center">OSU COVID Info Hub</h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Row className="project">
                <Col className="text-center" xs={12} lg={6}>
                  <StaticImage
                    className="capture"
                    src="../images/OSU_COVID_Hub_capture.png"
                    alt="OSU Covid Hub Capture"
                  />
                </Col>
                <Col xs={12} lg={6}>
                  <h5 className="text-center">UML</h5>
                  <p>
                    This paper is a work product that outlines how a project
                    such as this should be approached.
                    <li>Business and Enterprise Analysis on OSU</li>
                    <li>Software Engineering Process</li>
                    <li>Requirements</li>
                    <li>Analysis and Architecture</li>
                    <li>Project Management</li>
                  </p>
                  <a href="../../static/papers/OSU_COVID_Info_Hub.pdf">
                    <p>Click here to read the full paper.</p>
                  </a>
                </Col>
              </Row>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Button} variant="secondary" eventKey="2">
              <h3 className="text-center">Cascade Sim</h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Row className="project">
                <Col className="text-center" xs={12} lg={6}>
                  <StaticImage
                    className="capture"
                    src="../images/cascade_sim_capture.png"
                    alt="Cascade Sim Capture"
                  />
                </Col>
                <Col xs={12} lg={6}>
                  <h5 className="text-center">Networkx</h5>
                  <p>
                    This paper aims to simulate and study an "information
                    cascade" on a randomized network.
                  </p>
                  <a href="https://john24144.github.io/cascade_sim/">
                    <p>Click here to read the full paper.</p>
                  </a>
                </Col>
              </Row>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Col>
    </Row>
    <Row id="Contact">
      <Col className="text-center my-auto">
        <h1>How to contact me:</h1>
        <a href="https://www.linkedin.com/in/keith-johnson-397270140/">
          <StaticImage
            className="contactLink"
            src="../images/linkedin.png"
            alt="linkedin"
          />
        </a>
        <a href="https://github.com/john24144">
          <StaticImage
            className="contactLink"
            src="../images/github.png"
            alt="github"
          />
        </a>
        <a href="mailto: john24144@gmail.com">
          <StaticImage
            className="contactLink"
            src="../images/email.png"
            alt="email"
          />
        </a>
      </Col>
    </Row>
  </Container>
);

export default IndexPage;

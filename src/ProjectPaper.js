import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './css/ProjectPaper.css';

class ProjectPaper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            items: props.items.map((item) => (
                <img src={item.capture} alt="" onClick={() => {
                    this.setDescription(item.description)
                }} />
            ))
        };
    }

    setDescription(d) {
        this.setState({description: d});
    }

    render() {
       return (
           <Row>
            <Col xs={12} md={12} lg={12} className="project-paper text-center my-auto">
                {this.state.items}
            </Col>
            <Col xs={12} md lg className="description">
                {this.state.description}
            </Col>
            </Row>
        ); 
    }
}

export default ProjectPaper;
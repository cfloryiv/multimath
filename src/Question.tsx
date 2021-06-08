import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';


export function Question(props: {questionAnswer: string,
    formula: string,
    correct: string}) {

        function checkForCorrect(event: React.ChangeEvent<HTMLInputElement>) {
            if (event.target.value===props.correct) {
                // set color
                event.target.style.backgroundColor='white';
            } else {
                event.target.style.backgroundColor='red';
            }
            return;
        }

        return (
            <Row>
                <Col md="1">
                    <Form.Label>{props.formula}</Form.Label>
                </Col>
                <Col md="1">
                <input 
                    className="form-control" 
                    name={props.questionAnswer} 
                    type="text" 
                    defaultValue=""
                    onChange={(e: React.ChangeEvent<HTMLInputElement> ) => checkForCorrect(e)}
                />
                </Col>
            </Row>
        );
}
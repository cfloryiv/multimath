import React from 'react';
import { Question } from './Question';
import { Container, Form } from 'react-bootstrap';


export function Questions(props: {numberQuestions: string}) {


        let formulas: string[]=[];
        let correct: string[]=[];
        let range: number[]=[];

        for (let i=0; i<+props.numberQuestions; i++) {
            range.push(i);

            let n1=Math.floor(Math.random() * 10) + 2;
            let n2=Math.floor(Math.random() * 10) + 2;

            formulas.push(n1.toString()+' * '+n2.toString()+" = ");
            correct.push((n1*n2).toString());
        };
        let questions=range.map((n) => (

            <Question questionAnswer={'answer'+n}
                        formula={formulas[n]}
                        correct={correct[n]}
                        key={formulas[n]}
            />
        ));
        return (
            <Container>
                <Form>
                    {questions}
                </Form>
            </Container>
        );
}
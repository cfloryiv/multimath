import React from 'react';

import { Form as Formx, Formik, Field} from 'formik';
import { Form, Row } from 'react-bootstrap';

interface IProps {
    onFormSubmit: CallableFunction;
}
interface IState {}

interface Values {
    playername: string,
    numberOps: string
}

export class GameForm extends React.Component<IProps, IState> {
    constructor(props: {onFormSubmit: CallableFunction}) {
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleValidation=this.handleValidation.bind(this);

    }
    handleSubmit(values: Values) {
       // alert("Form was submitted: "+values.numberOps);
        //this.setState({numberOps: values.numberOps});
        this.props.onFormSubmit(values.numberOps, values.playername);
        return;
    }
    handleValidation(values: Values): any {
        const errors: any={};
        if (!values.playername) {
            errors.playername="Player Name cannot be empty";
        }
        if (+values.numberOps<1 || +values.numberOps>5) {
            errors.numberOps="Enter a number from 1 to 5";
        }
        return errors;
    }
    render() {
        
        return (
        <div>
            <Row>
            <Formik initialValues={{ playername: "", numberOps: "1"}}
                onSubmit={this.handleSubmit}
                validate={this.handleValidation}
                render={({
                    errors,
                    touched,
                    values,
                    handleBlur,
                    handleChange,
                    handleSubmit
                  }) => (

                <Formx>
                    <Form.Group>
                        <Form.Label>Player Name</Form.Label>
                        <Field className="form-control" name="playername" type="text" />
                        <div>{errors.playername}</div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Number of Problems</Form.Label>
                        <Field className="form-control" name="numberOps" type="text"/>
                        <div>{errors.numberOps}</div>
                    </Form.Group>
                    
                    <button className="btn btn-primary" type="submit">Play Game</button>
                </Formx>
                  )}
            />
            </Row>
        </div>
        );
    }
}
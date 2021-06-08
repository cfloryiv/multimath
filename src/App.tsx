import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { GameForm } from './GameForm';
import {Questions} from "./Questions";
import { Nav } from './Nav';

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.handleFormSubmit=this.handleFormSubmit.bind(this);
  }
  state={
    numOps: "",
    playername: ""
  };

  handleFormSubmit(nQ: string, pn: string) {
    this.setState({numOps: nQ, playername: pn});
    console.log("numOps: "+nQ);
  }
  render() {
  return (
    <>
    <Nav />
    <div className="container">
        <GameForm onFormSubmit={this.handleFormSubmit}/>
        <Questions numberQuestions={this.state.numOps}/>
    </div>
    </>
  );
}
}

export default App;

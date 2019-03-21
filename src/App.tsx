import React, { Component } from 'react';
import './App.css';
import PetitionSelector from './PetitionSelector';
import PetitionViewer from './PetitionViewer';

export interface IAppState {
  PetitionID: String;
  DisplayCount: boolean;
}

class App extends React.Component<any, IAppState> {
  constructor(props: any) {
    super(props);
    this.petitionIdSubmitted = this.petitionIdSubmitted.bind(this);

    this.state = {
        PetitionID: "",
        DisplayCount: false
    }
}
  render() {
    return (
      <div className="App">
        {(this.state.DisplayCount) ? undefined : <PetitionSelector submitPetitionID={this.petitionIdSubmitted}/>}
        {(this.state.DisplayCount) ? <PetitionViewer PetitionID={this.state.PetitionID} /> : undefined }
      </div>
    );
  }

  private petitionIdSubmitted(petitionID:String)
  {
      this.setState({PetitionID: petitionID, DisplayCount: true});
  }
}

export default App;

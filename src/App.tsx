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
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let paramPetition = params.get('petition');

    let petition: String = paramPetition || "241584"

    return (
      <div className="App">
        {(this.state.DisplayCount) ? undefined : <PetitionSelector submitPetitionID={this.petitionIdSubmitted} defaultPetition={petition}/>}
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

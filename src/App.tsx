import React from 'react';
import './App.css';
import PetitionSelector from './PetitionSelector';
import PetitionViewer from './PetitionViewer';

export interface IAppProps {
  defaultPetition: String|null;
}
export interface IAppState {
  PetitionID: String;
  DisplayCount: boolean;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.petitionIdSubmitted = this.petitionIdSubmitted.bind(this);

    this.state = {
        PetitionID: "",
        DisplayCount: false
    }

}
  render() {
    let paramPetition = this.props.defaultPetition

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

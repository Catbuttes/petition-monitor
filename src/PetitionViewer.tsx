import * as React from 'react';

export interface IPetitionViewerProps {
    PetitionID: String;
}

export interface IPetitionViewerState {
    PetitionTitle: String;
    PetitionSignatureCount: String;
}

export default class PetitionViewer extends React.Component<IPetitionViewerProps, IPetitionViewerState> {
    constructor(props: IPetitionViewerProps) {
        super(props);

        this.state = {
            PetitionTitle: "",
            PetitionSignatureCount: ""
        }


    }

    public componentDidMount() {
        this.GetData(this.props.PetitionID);
    }

    public render() {
        var baseUrl = 'https://petition.parliament.uk/petitions/'
        var completeUrl = baseUrl + this.props.PetitionID //stuff

        return (
            <div>
                <h2>{this.state.PetitionTitle}</h2>
                <h3>{this.state.PetitionSignatureCount} signatures</h3>
                <a href={completeUrl}>Link to petition</a>
            </div>
        );
    }

    private GetData(PetitionID: String): void {
        var baseUrl = 'https://petition.parliament.uk/petitions/'
        var completeUrl = baseUrl + PetitionID + '.json'
        fetch(completeUrl)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                var sigs = Number(myJson.data.attributes.signature_count).toLocaleString();
                this.setState({PetitionTitle: myJson.data.attributes.action, PetitionSignatureCount: sigs})
            })
            .catch((error) => {
                if(this.state.PetitionSignatureCount == "") {
                    this.setState({PetitionTitle: "Unable to get petition details", PetitionSignatureCount: "Unknown"})
                }
            })

        setTimeout(() => this.GetData(PetitionID), 5000);
    }
}

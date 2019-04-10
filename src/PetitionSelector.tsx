import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { isUndefined } from 'util';


export interface IPetitionSelectorProps {
    submitPetitionID: (petitionID: String) => void;
    defaultPetition: String;
}

export interface IPetitionSelectorState {
    PetitionID: String;
    ButtonDisabled: boolean;
}


export default class PetitionSelector extends React.Component<IPetitionSelectorProps, IPetitionSelectorState> {
    constructor(props: IPetitionSelectorProps) {
        super(props);
        this._getErrorMessage = this._getErrorMessage.bind(this);
        this._petitionIdChanged = this._petitionIdChanged.bind(this);
        this._submitClicked = this._submitClicked.bind(this);

        this.state = {
            PetitionID: this.props.defaultPetition,
            ButtonDisabled: false
        }
    }

    public render(): JSX.Element {
        return (
            <Stack className="PetitionSelectorInput" >
                <Stack.Item align="center">
                    <TextField
                        label="Enter the petition ID"
                        name="petitionID"
                        autoComplete="on"
                        onGetErrorMessage={this._getErrorMessage}
                        validateOnLoad={true}
                        onChange={this._petitionIdChanged}
                        defaultValue={this.props.defaultPetition.toString()}
                    />
                </Stack.Item>
                <Stack.Item align="center">
                    <PrimaryButton
                        text="Get Signature Count"
                        disabled={this.state.ButtonDisabled}
                        onClick={this._submitClicked}
                    />
                </Stack.Item>
            </Stack>
        );
    }

    private _submitClicked() :void {
        this.props.submitPetitionID(this.state.PetitionID);
    }

    private _petitionIdChanged(e: any, value?: string) :void {
        if(isUndefined(value)){
            this.setState({PetitionID: ""})
        }
        else {
            this.setState({PetitionID: value.toString()})
        }

    }

    private _getErrorMessage(value: string): string {
        if (value === "") {
            this.setState({ButtonDisabled:true})
            return ""
        };

        var maybeNumber = Number(value);
        if (!isNaN(maybeNumber)) {
            this.setState({ButtonDisabled:false})
            return ''
        }
        else {
            this.setState({ButtonDisabled:true})
            return "Petition IDs Should be numeric";
        }

    }
}

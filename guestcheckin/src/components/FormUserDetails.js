import React, { Component } from 'react'
import MuiThemeProvider from
 'material-ui/styles/MuiThemeProvider';
 import AppBar from 'material-ui/AppBar';
 import TextField from 'material-ui/TextField';
 import RaisedButton from 'material-ui/RaisedButton';
 import GridList from 'material-ui/GridList';


export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
    }
  render() {
      const { values, handleChange } = this.props;
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Guest Check In Information" />
                <TextField
                    hintText="Enter Your First Name"
                    floatingLabelText="First Name"
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                />
                <br/>
                <TextField
                    hintText="Enter Your Last Name"
                    floatingLabelText="Last Name"
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                />
                <br/>
                <TextField
                    hintText="Enter Your Date Of Birth"
                    floatingLabelText="DOB"
                    onChange={handleChange('dob')}
                    defaultValue={values.dob}
                />
                <br/>
                <TextField
                    hintText="Company Name"
                    floatingLabelText="Company"
                    onChange={handleChange('company')}
                    defaultValue={values.company}
                />
                <br/>
                <TextField
                    hintText="What department are you visiting"
                    floatingLabelText="Visiting Department"
                    onChange={handleChange('departmentVisit')}
                    defaultValue={values.departmentVisit}
                />
                <br/>
                <TextField
                    hintText="Enter Notes"
                    floatingLabelText="Notes"
                    onChange={handleChange('notes')}
                    defaultValue={values.notes}
                />
                <br/>
                <RaisedButton
                    label="Check In"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                />
            </React.Fragment>
        </MuiThemeProvider>
    );
  }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails

import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';

export class UserForm extends Component {
    state= {
        firstName: '',
        lastName: '',
        dob: '',
        company: '',
        departmentVisit: '',
        notes: ''
        
    }

    //Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

  render() {
    const {firstName, lastName, dob, company, departmentVisit, notes } = this.state;
    const values = {firstName, lastName, dob, company, departmentVisit, notes }
    return (
      <FormUserDetails 
        handleChange={this.handleChange}
        values={values}
      />
    )
  }
}

export default UserForm

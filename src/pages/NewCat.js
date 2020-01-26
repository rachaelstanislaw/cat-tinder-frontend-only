import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class NewCat extends Component{
  constructor(props){
    super(props)
    // small amount of state to manage the form
    this.state = {
      form:{
        name: '',
        age: '',
        enjoys: ''
      }
    }
  }

  handleSubmit = (event) => {
    // keeps react from refreshing the page unnessarily
    event.preventDefault()
    // a function call being passed from Cat.js
    this.props.handleSubmit(this.state.form)
    // after the form is sent reset the state to an empty form
    this.setState({
      form:{
        name: '',
        age: '',
        enjoys: ''
      }
    })
  }

  handleChange = (event) => {
    // destructuring form out of state
    let { form } = this.state
    form[event.target.name] = event.target.value
    // setting state to the updated form
    this.setState({ form: form })
  }

  render(){
    return(
      <div>
        <h1 id="new-cat-header">Add a New Cat</h1>
        <Form id="form">
          <FormGroup>
            <Label htmlFor="name" id="name">Name</Label>
            <Input
              type="text"
              name="name"
              onChange={ this.handleChange }
              value={ this.state.form.name }
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="age" id="age">Age</Label>
            <Input
              type="number"
              name="age"
              onChange={ this.handleChange }
              value={ this.state.form.age }
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="enjoys" id="enjoys">Enjoys</Label>
            <Input
              type="text"
              name="enjoys"
              onChange={ this.handleChange }
              value={ this.state.form.enjoys }
            />
          </FormGroup>
          <Button
            name="submit"
            color="secondary"
            id="submit"
            onClick={ this.handleSubmit }
          >
            Create a New Profile
          </Button>
        </Form>
      </div>
    )
  }
}

export default NewCat

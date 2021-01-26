import React, { Component } from 'react';
import Table1 from './components/tablecomponent';
import './App.css';
import Formfill from './components/Formfill'
import Parentcomponent from './components/parentcomponet'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
    }
  }
  removeCharacter = index => {
    const characters = this.state.characters;
    this.setState({
      characters: characters.filter((user, i) => {
        return i !== index;
      })
    })
    //console.log(index)
  }

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  }

  render() {
    const characters = this.state.characters;

    return (
      <div className="container">
        <h1>React Tutorial</h1>
        <p>Add a character with a name and a job to the table.</p>
        <Table1
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <h3>Add New</h3>
        <Formfill handleSubmit={this.handleSubmit} />
        {/* <Parentcomponent /> */}

      </div>
    );
  }
}

export default App;
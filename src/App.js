import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    // super() used to call the component constructor()
    super();
    this.state = {
      // Array of Objects
      monsters: [], 
      searchField: ''
    };

  }
  // Life Cycle Function - Loads users 
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }
  // arrow function auto bind the this context to the place they were defined in the 1st place
  // lexical scoping
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    // filters monsters depending what you type in searchField, re-render everytime - toLowareCase for case sensitivity
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return ( 
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox 
          placeholder='search monsters'
          onSearchChange={this.onSearchChange}
        />
          {/* passing filteredMonsters function for listing */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

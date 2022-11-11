// REACT -----------------------------|
import { useState, useEffect } from 'react';

// COMPONENTS ------------------------|
import Search from '../components/Search/Search'
import List from '../components/List/List'

// CSS -------------------------------|
import './App.css';

// CODE ------------------------------|

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(users => setMonsters(users))
  },[])

  useEffect(()=>{ 
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });
    setFilterMonsters(newFilteredMonsters);
  },[monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">
      {console.log('render')}
      <h1 className='app-title'>Monsters Rolodex</h1>
      <Search 
        onChangeHandler={onSearchChange} 
        className='search-box'
        placeholder='search monsters'
      />
      <List monsters={filteredMonsters} />
    </div>
  )
}

export default App;
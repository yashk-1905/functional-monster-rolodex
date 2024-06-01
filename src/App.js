import { useEffect, useState } from "react";
import "./App.css";
import SearchBox from "./components/searchbox/searchBox.component";
import CardList from "./components/card-list/card-list.component";

function App() {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    console.log("effect fired");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchField(searchString);
  };

  useEffect(() => {
    // const newFilteredMonsters = monsters.filter((item) => {
    //   return item.name && item.name.includes(searchField);
    // });
    
    const newFilteredMonsters =  monsters.filter((item) => {
      return (
        item.name &&
        item.name.toLocaleLowerCase().includes(searchField)
      );
    });

    setFilteredMonsters(newFilteredMonsters);
    console.log("effect is firing");
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onSearchHandler={onSearchChange}
        placeholder="search monsters"
        className="monsters-search-box"
      />
      <CardList filteredMonsters = {filteredMonsters}></CardList>
    </div>
  );
}

export default App;

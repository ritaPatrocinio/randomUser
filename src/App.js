import './App.css';
import {useState, useEffect} from 'react';
import {UserList} from './Components/UserList/UserList';
import {Search} from './Components/Search/Search';

function App() {
  const [data, setData] = useState([]);
  const [numberLoaded, setNumberLoaded] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [search, setSearch] = useState(false);

useEffect(() => {
  fetch('https://randomuser.me/api/?results=10')
  .then(response => response.json())
  .then(response => {
    if(!response.results){
      return
      }
      setData((prev) => [...prev, ...response.results])
    } )
}, [numberLoaded])

 const LoadMore = () => {
   setTimeout(setNumberLoaded((prev) => prev + 10), 2000) 
 };

 const handleTermChange = (e) => {
    setSearchTerm(e.target.value);
 };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Users</h1>
      </header>
      <Search handleTermChange={handleTermChange} setSearch={setSearch} LoadMore={LoadMore}></Search>
      <UserList search={search} searchTerm={searchTerm} data={data}></UserList>
    </div>
  );
}

export default App;

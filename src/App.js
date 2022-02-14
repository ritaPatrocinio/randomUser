import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import {UserList} from './Components/UserList/UserList';

function App() {
  const [data, setData] = useState([]);
  const [numberLoaded, setNumberLoaded] = useState(10);

useEffect(() => {
  fetch('https://randomuser.me/api/?results=10')
  .then(response => response.json())
  .then(response => {
    console.log(JSON.stringify(response));
    if(!response.results){
      return
      }
      setData((prev) => [...prev, ...response.results])
    } )
}, [numberLoaded])

 const LoadMore = () => {
   setTimeout(setNumberLoaded((prev) => prev + 10), 2000) 
 };

  return (
    <div className="App">
      <header className="App-header">
      <UserList data={data}></UserList>
      <button onClick={LoadMore}>Load More</button>
      </header>
    </div>
  );
}

export default App;

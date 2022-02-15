import './Search.css';

export function Search({setSearch, handleTermChange, LoadMore}) {
  return (
    <div className='search'>
      <input placeholder="Search for a name" onChange={handleTermChange}></input>
      <button className="SearchButton" onClick={() => setSearch(true)}>Search</button>
      <button onClick={LoadMore} className='More'>Load More</button>
      </div>
  );
}
class RandomPersons extends HTMLElement {
    constructor() {
        super();

    this.data = null;
    this.endpoint = `https://randomuser.me/api/?results=10`;
}

async getUsers(){
    return await fetch('https://randomuser.me/api/?results=10')
  .then(response => response.json())
  .then(response => {
    if(!response.results){
      return
      }
      return response.results
    } )
}

async connectedCallback() {
    let newData = await this.getUsers();
    this.data = [ ...this.data, ...newData];
    this.initShadowDOM();
  }

  initShadowDOM() {
    let shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = this.template;
  }

  template() {
  <div className="App">
      <header className="App-header">
        <h1>Users</h1>
      </header>
      <div className="UserList">
        {this.data.map((user) => {
          return (
            <div className="User">
            <img alt='' src={(user.picture.thumbnail)}></img>
            <p>{user.name.first + ' ' + user.name.last}</p>
            </div>
          )
        })}
    </div>
      <button onClick={this.connectedCallback} className='More'>Load More</button>
    </div>
}
}

window.customElements.define('random-persons', RandomPersons);

//call
//<random-persons></random-persons>

export default RandomPersons
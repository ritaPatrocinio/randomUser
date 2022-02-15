import './UserList.css';
import {User} from '../User/User';

export function UserList({data, search, searchTerm}) {
  let users=[];
  if(search && searchTerm.trim()!==''){
    users = data.filter(u => {
      return (u.name.first.toLowerCase() + ' ' + u.name.last.toLowerCase()).includes(searchTerm.toLowerCase())} )
  }
  else {
    users = data;
  }
  return (
    <div className="UserList">
        {users.map((user) => <User key={user.cell} user={user}></User>)}
    </div>
  );
}
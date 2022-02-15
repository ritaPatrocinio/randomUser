import './UserList.css';
import {User} from '../User/User';

export function UserList({data}) {
  return (
    <div className="UserList">
        {data.map((user) => <User key={user.cell} user={user}></User>)}
    </div>
  );
}
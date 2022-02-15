import './User.css';

export function User({user}) {
  return (
    <div className="User">
        <img alt='' src={(user.picture.thumbnail)}></img>
        <p>{user.name.first + ' ' + user.name.last}</p>
    </div>
  );
}
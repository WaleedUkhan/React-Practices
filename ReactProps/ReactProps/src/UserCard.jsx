// UserCard.jsx


function UserCard({ name, age, hobbies, address }) {
  
  return (
    <div className="user-card" >
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
      <h3>Address:</h3>
      <p>{address.street}, {address.city}, {address.country}</p>
    </div>
  );
}

export default UserCard;

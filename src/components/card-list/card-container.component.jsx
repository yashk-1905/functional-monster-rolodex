const Card = ({item}) => {
  const {id, name, email} = item;
  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt="monsterImage"
      />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
}

export default Card;

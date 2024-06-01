import "./card-list.styles.css";
import Card from "./card-container.component";

const CardList = ({filteredMonsters}) => {
  console.log("render");
  return (
    <div className="card-list">
      {filteredMonsters.map((item) => {
        return <Card item={item} />;
      })}
    </div>
  );
};

export default CardList;

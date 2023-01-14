import Card from "./Card";
import classes from "./CardElements.module.css";

function CardElements() {
  return (
    <div className={classes.container}>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default CardElements;

import styles from "./Card.module.css";
import cx from "classnames";

function Card(props) {
  const classes = cx(styles.card, props.className);
  return <div className={classes}>{props.children}</div>;
}

export default Card;

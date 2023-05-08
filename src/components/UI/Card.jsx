import styles from "./Card.module.css";
import cx from "classnames";

function Card({className, children}) {
  const classes = cx(styles.card, className);
  return <div className={classes}>{children}</div>;
}

export default Card;

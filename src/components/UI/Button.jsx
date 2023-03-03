import styles from "./Button.module.css";
import cx from "classnames";

function Button(props) {
  const classes = cx(styles.button, props.className);
  return (
    <button type={props.type} className={classes} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;

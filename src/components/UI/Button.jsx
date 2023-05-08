import styles from "./Button.module.css";
import cx from "classnames";

function Button({className, type, onClick, children}) {
  const classes = cx(styles.button, className);
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

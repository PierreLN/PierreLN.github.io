import styles from './Button.module.css'
import cx from 'classnames'

function Button(props) {

    const classes = cx(styles.button, props.className)
    return (<button className={classes}>{props.children}</button>)
}

export default Button;
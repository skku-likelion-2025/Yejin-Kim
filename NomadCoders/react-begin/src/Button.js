import PropTypes from "prop-types";
import styles from './Button.module.css';


function Button(myObj) {
  return <button className={styles.btn}> {myObj.text}</button>
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const PageWrapper = (props) => (
  <div className={styles.wrapper}>
    <h1>{props.title}</h1>
    {props.children}
  </div>
);

PageWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default PageWrapper;

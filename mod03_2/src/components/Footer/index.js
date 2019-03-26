import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

const Footer = ({ count }) => <p>Você tem {count} favoritos.</p>;

Footer.propTypes = {
  count: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  //  you can and should use js functions inside of the mapping
  // to manipulate data - avoid using function inside of the render method
  count: state.favorites.data.length
});

export default connect(mapStateToProps)(Footer);

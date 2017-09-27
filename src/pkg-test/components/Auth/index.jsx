import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Button, Divider } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.register = this.register.bind(this);
  }
  render() {
    return (
      <div>
        <Grid padded centered>
          AUTH
        </Grid>
      </div>
    );
  }
}

Auth.propTypes = {};

Auth.defaultProps = {};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);

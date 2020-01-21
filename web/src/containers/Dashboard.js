import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class Dashboard extends Component {
  componentWillMount() {
    browserHistory.push('/???');
  }

  render() {
    return (
      <div>Dashboard</div>
    );
  }
}

const mapStateToProps = (state) => ({
  ???: state.???,
});

export default connect(mapStateToProps)(Dashboard);

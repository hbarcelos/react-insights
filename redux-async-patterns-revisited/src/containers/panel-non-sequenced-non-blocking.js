import React from 'react';
import { connect } from 'react-redux';
import Dashboard from '../components/dashboard';
import withLoadDashboard from '../hocs/withLoadDashboard';

function Panel(props) {
  return (
    <div className="col-md-4">
      <Dashboard title="Panel Non Sequenced Non Blocking" user={props.user} data={props.dashboard} />
    </div>
  )
};

const EnhancedPanel = withLoadDashboard(Panel);

const inejectState = connect(state => ({
  user: state.user,
  dashboard: state.dashboardNonSequencedNonBlocking,
}), dispatch => ({
  loadDashboard: () => dispatch({ type: 'LOAD_DASHBOARD_NON_SEQUENCED_NON_BLOCKING' })
}));

export default inejectState(EnhancedPanel);

import React, { Component } from 'react'

export default function withLoadDashboard(WrappedComponent) {
  class WithLoadDashboard extends Component {
    componentDidMount() {
      this.props.loadDashboard();
    }

    render() {
      return (<WrappedComponent {...this.props} />)
    }
  }

  const componentName =
    WrappedComponent.name || WrappedComponent.displayName || 'Component';
  WithLoadDashboard.displayName = `WithLoadDashboard(${componentName})`;

  return WithLoadDashboard;
}

import React, { PureComponent, Fragment, createRef } from 'react';
import PropTypes from 'prop-types';
import contains from '../util/contais'

export default function withDropdown(Component) {
  class ClickableDropdown extends PureComponent {
    static propTypes = {
      render: PropTypes.func.isRequired,
      showOnInit: PropTypes.bool,
      shouldHideOnUpdate: PropTypes.func,
    };

    static defaultProps = {
      showOnInit: false,
      shouldHideOnUpdate: () => false,
    };

    constructor(props) {
      super(props);
      this.domRef = createRef();
    }

    state = {
      show: !!this.props.showOnInit,
    };

    componentDidMount() {
      document.addEventListener('mousedown', this.handleGlobalClick);
    }

    componentDidUpdate(prevProps) {
      if (this.props.shouldHideOnUpdate(this.props, prevProps)) {
        this.toggle(false);
      }
    }

    toggle = show => {
      this.setState({ show });
    };

    handleClick = () => this.toggle(true);

    handleGlobalClick = event => {
      const containsEventTarget = contains(this.domRef.current, event.target);

      if (!containsEventTarget) {
        this.toggle(false);
      }

      return true;
    };

    render() {
      const { render, showOnInit, shouldHideOnUpdate, ...props } = this.props;

      return (
        <Fragment>
          <Component {...props} onClick={this.handleClick} />
          {this.state.show && render(this.domRef)}
        </Fragment>
      );
    }
  }

  const componentName = Component.name || Component.displayName;
  ClickableDropdown.displayName = `ClickableDropdown(${componentName})`;

  return ClickableDropdown;
}

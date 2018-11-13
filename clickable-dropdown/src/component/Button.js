import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { children, content, ...rest } = props;

  return (
    <button {...rest}>
      <Fragment>
        {content}
        {children}
      </Fragment>
    </button>
  );
}

Button.propTypes = {
  content: PropTypes.node.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
};

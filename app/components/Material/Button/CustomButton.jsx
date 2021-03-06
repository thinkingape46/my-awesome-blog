import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button } from '@rmwc/button';

import './CustomButton.scss';

const CustomButton = (props) => {
  const {
    icon,
    rounded,
    className,
    children,
    ...rest
  } = props;

  const clName = {
    'custom-button': true,
    'm-bt': true,
  };

  if (className) {
    clName[className] = true;
  }
  if (rounded) {
    clName['round-button'] = true;
  }

  return (
    <Button
      raised
      className={cx(clName)}
      icon={icon}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {children}
    </Button>
  );
};

CustomButton.defaultProps = {
  icon: null,
  rounded: false,
  className: '',
  children: null,
};

CustomButton.propTypes = {
  icon: PropTypes.string,
  rounded: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any,
};

export default CustomButton;

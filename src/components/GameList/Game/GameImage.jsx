import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const GameImage = ({ className }) => {
  return <div className={className} />;
};

GameImage.propTypes = {
  className: PropTypes.string,
};

export default styled(GameImage)`
  width: 100%;
  height: 300px;
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

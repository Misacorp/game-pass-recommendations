import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Game from './Game/Game';

import games from '../../games';

/**
 * Displays multiple recommendations in a list.
 */
const GameList = ({ className }) => {
  return (
    <div className={className}>
      {games.map(current => (
        <Game data={current} key={current.title} />
      ))}
    </div>
  );
};

GameList.propTypes = {
  className: PropTypes.string,
};

export default styled(GameList)`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  margin: 0;
  padding: 0.5rem;

  margin-left: auto;
  margin-right: auto;
  max-width: 1400px;
`;

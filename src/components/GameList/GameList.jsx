import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Game from './Game/Game';

import games from '../../games';

/**
 * Displays multiple recommendations in a list.
 */
const GameList = ({ className }) => {
  const sortedGames = games.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });

  console.log(sortedGames);

  return (
    <div className={className}>
      {sortedGames.map(current => (
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
  align-items: stretch;
  align-content: stretch;
  margin: 0;
  padding: 0.5rem;

  margin-left: auto;
  margin-right: auto;
  max-width: 1400px;
`;

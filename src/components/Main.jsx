import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import GameList from './GameList/GameList';

import games from '../games';

const DEFAULT_SELECT_VALUE = '';

const MainStructure = ({ className }) => {
  // Get all author values.
  const authors = useMemo(() => {
    const authorSet = new Set();
    games.forEach(game => {
      game.recommendations.forEach(rec => authorSet.add(rec.author));
    });
    return Array.from(authorSet);
  }, []);

  // Author state
  const [selectedAuthor, selectAuthor] = useState('');
  const handleAuthorChange = a => {
    selectAuthor(a.target.value);
  };

  // Filter games by selected author
  let sortedGames = games;
  sortedGames = sortedGames.filter(game => {
    const recommenders = game.recommendations.map(rec => rec.author);
    return (
      recommenders.includes(selectedAuthor) ||
      selectedAuthor === DEFAULT_SELECT_VALUE
    );
  });

  // Multiplayer state
  const [multiplayer, setMultiplayer] = useState(DEFAULT_SELECT_VALUE);
  const handleMultiplayerChange = a => {
    setMultiplayer(a.target.value);
  };

  // Filter games by multiplayer mode
  sortedGames = sortedGames.filter(game => {
    switch (multiplayer) {
      case 'local':
        return game.localMultiplayer;
      case 'online':
        return game.onlineMultiplayer;
      case 'none':
        return !(game.onlineMultiplayer || game.localMultiplayer);
      default:
        return true;
    }
  });

  // Sort games alphabetically
  sortedGames = sortedGames.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });

  return (
    <div className={className}>
      <h1>Game Pass Recommendations</h1>
      <p>
        Game recommendations from your friends! We are still populating the list
        so check back later for some new additions.
      </p>

      <select id="multiplayer-select" onChange={handleMultiplayerChange}>
        <option value={DEFAULT_SELECT_VALUE}>Any multiplayer mode</option>
        <option value="local">Local multiplayer</option>
        <option value="online">Online multiplayer</option>
        <option value="none">No multiplayer</option>
      </select>

      <select id="author-select" onChange={handleAuthorChange}>
        <option value={DEFAULT_SELECT_VALUE}>All authors</option>
        {authors.map(author => (
          <option value={author} key={author}>
            {author}
          </option>
        ))}
      </select>

      <GameList games={sortedGames} />
    </div>
  );
};

const Main = styled(MainStructure)`
  text-align: center;
  color: ${({ theme }) => theme.palette.typography.light};

  h1 {
    margin: 1rem;
    margin-top: 1.5rem;
    padding: 0;
  }

  select {
    margin: 1rem;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.palette.primary.lighter};
    color: ${({ theme }) => theme.palette.typography.dark};
  }
`;

MainStructure.propTypes = {
  className: PropTypes.string,
};

export default Main;

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import GameList from './GameList/GameList';

const MainStructure = ({ className }) => {
  return (
    <div className={className}>
      <h1>Game Pass Recommendations</h1>
      <p>
        Game recommendations from your friends! We are still populating the list
        so check back later for some new additions.
      </p>

      <GameList />
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
`;

MainStructure.propTypes = {
  className: PropTypes.string,
};

export default Main;

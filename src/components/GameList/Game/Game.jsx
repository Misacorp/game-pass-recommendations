import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import GameWrapper from './GameWrapper';
import GameImage from './GameImage';
import Recommendation from './Recommendation/Recommendation';

const Game = ({ data, className }) => {
  const { title, imageUrl, recommendations } = data;

  return (
    <GameWrapper>
      <div className={className}>
        <h2>{title}</h2>

        <GameImage url={imageUrl} />

        {Array.isArray(recommendations) &&
          recommendations.map(rec => (
            <Recommendation author={rec.author} key={rec.author}>
              {rec.content}
            </Recommendation>
          ))}
      </div>
    </GameWrapper>
  );
};

Game.propTypes = {
  data: PropTypes.object,
  className: PropTypes.string,
};

export default styled(Game)`
  background-image: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.15)
  );
  color: #000;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  padding-bottom: 0.5rem;
  border: 2px solid rgba(255, 220, 150, 0.3);

  & > h2 {
    text-align: center;
    font-size: 2em;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin: 0;
    color: ${({ theme }) => theme.palette.typography.light};
  }
`;

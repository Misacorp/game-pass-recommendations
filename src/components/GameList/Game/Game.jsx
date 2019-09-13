import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import GameWrapper from './GameWrapper';
import GameImage from './GameImage';
import Recommendation from './Recommendation/Recommendation';

const Game = ({ data, className }) => {
  const {
    title,
    imageUrl,
    recommendations,
    localMultiplayer,
    onlineMultiplayer,
  } = data;

  return (
    <GameWrapper>
      <div className={className}>
        <h2>{title}</h2>

        <p className={`local${localMultiplayer ? ' active' : ''}`}>
          Local multiplayer
        </p>
        <p className={`online${onlineMultiplayer ? ' active' : ''}`}>
          Online multiplayer
        </p>

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
  height: 100%;
  color: ${({ theme }) => theme.palette.typography.light};

  p.online,
  p.local {
    margin-top: 0;
    opacity: 0.1;
  }

  p.online.active {
    color: ${({ theme }) => theme.palette.primary.main};
    opacity: 1;
  }

  p.local.active {
    color: ${({ theme }) => theme.palette.tertiary.lighter};
    opacity: 1;
  }

  & > h2 {
    text-align: center;
    font-size: 2em;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin: 0;
  }
`;

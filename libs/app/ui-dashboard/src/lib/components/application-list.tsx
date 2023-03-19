import { routes } from '@folder-structure-example-by-domain/shared/utils/routes';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import GreedFallIcon from '../assets/greed-fall-icon';
import HogwartsLegacyIcon from '../assets/hogwarts-legacy-icon';
import SpotifyIcon from '../assets/spotify-icon';
import TvAndVideoIcon from '../assets/tv-and-video-icon';

type TApp = {
  name: string;
  icon: string;
  type: 'game' | 'multimedia';
  link: string;
};

export interface ComponentsApplicationListProps {
  apps: TApp[];
}

const StyledComponentsApplicationList = styled.div`
  color: pink;
`;

const MenuList = styled.div`
  margin: 5px;
  display: flex;
  justify-content: space-evenly;
`;

function AppItem({ app }: { app: TApp }) {
  const icon = useMemo(() => {
    switch (app.icon) {
      case 'hogwartsLegacy': {
        return <HogwartsLegacyIcon />;
      }

      case 'greedFall': {
        return <GreedFallIcon />;
      }

      case 'spotify': {
        return <SpotifyIcon />;
      }

      case 'tvAndVideo': {
        return <TvAndVideoIcon />;
      }
    }
  }, [app.icon]);

  if (!icon) {
    return null;
  }

  return <Link to={app.link}>{icon}</Link>;
}

export function ComponentsApplicationList({
  apps,
}: ComponentsApplicationListProps) {
  return (
    <StyledComponentsApplicationList>
      <h1>Welcome to ComponentsApplicationList!</h1>

      <MenuList>
        <Link to={routes.game.url()}>Games</Link>
        <Link to={routes.multimedia.url()}>Multimedia</Link>
        <Link to={routes.settings.url()}>Settings</Link>
      </MenuList>

      <MenuList>
        {apps.map((app) => (
          <AppItem key={app.name} app={app} />
        ))}
      </MenuList>
    </StyledComponentsApplicationList>
  );
}

export default ComponentsApplicationList;

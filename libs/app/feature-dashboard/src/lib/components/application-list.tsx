import { SharedComponentsLink } from '@folder-structure-example-by-feature/shared/components/link';
import { routes } from '@folder-structure-example-by-feature/shared/utils/routes';
import { useMemo } from 'react';
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

  return <SharedComponentsLink to={app.link}>{icon}</SharedComponentsLink>;
}

export function ComponentsApplicationList({
  apps,
}: ComponentsApplicationListProps) {
  return (
    <StyledComponentsApplicationList>
      <h1>Welcome to ComponentsApplicationList!</h1>

      <MenuList>
        <SharedComponentsLink to={routes.game.url()}>
          Games
        </SharedComponentsLink>
        <SharedComponentsLink to={routes.multimedia.url()}>
          Multimedia
        </SharedComponentsLink>
        <SharedComponentsLink to={routes.settings.url()}>
          Settings
        </SharedComponentsLink>
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

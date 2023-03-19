import { routes } from '@folder-structure-example-by-domain/shared/utils/routes';

import { TApp, TAppType } from './model';

const games: TApp[] = [
  {
    id: 'hogwartsLegacy',
    name: 'Hogwarts Legacy',
    icon: 'hogwartsLegacy',
    type: 'game',
    link: routes.game.details.url('hogwartsLegacy'),
  },
  {
    id: 'greedFall',
    name: 'Greed Fall',
    icon: 'greedFall',
    type: 'game',
    link: routes.game.details.url('greedFall'),
  },
];

const multimedia: TApp[] = [
  {
    id: 'spotify',
    name: 'Spotify',
    icon: 'spotify',
    type: 'multimedia',
    link: routes.multimedia.details.url('spotify'),
  },
  {
    id: 'tvAndVideo',
    name: 'Tv And Video',
    icon: 'tvAndVideo',
    type: 'multimedia',
    link: routes.multimedia.details.url('tvAndVideo'),
  },
];

export function getApps(type?: TAppType) {
  if (!type) {
    return [...games, ...multimedia];
  }

  return type === 'game' ? games : multimedia;
}

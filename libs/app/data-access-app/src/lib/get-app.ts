import { routes } from '@folder-structure-example-by-domain/shared/utils/routes';
import {getAllGames, getAllMedia} from "./get-all-games";
import {getAllGames, getAllMedia} from "./get-all-media";

type TMultimedia = {
  name: string;
  icon: string;
  type: 'multimedia';
  link: string;
};

const multimedia: TMultimedia[] = [
  {
    name: 'Spotify',
    icon: 'spotify',
    type: 'multimedia',
    link: routes.multimedia.details.url('spotify'),
  },
  {
    name: 'TvAndVideo',
    icon: 'tvAndVideo',
    type: 'multimedia',
    link: routes.multimedia.details.url('tvAndVideo'),
  },
];

export function getApp(id: string) {
  const allApps = [...getAllMedia(), ...getAllGames()]
  return multimedia;
}

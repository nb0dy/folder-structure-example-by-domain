import { routes } from '@folder-structure-example-by-domain/shared/utils/routes';

type TMultimedia = {
  id: string;
  name: string;
  icon: string;
  type: 'multimedia';
  link: string;
};

const multimedia: TMultimedia[] = [
  {
    id: 'spotify',
    name: 'Spotify',
    icon: 'spotify',
    type: 'multimedia',
    link: routes.multimedia.details.url('spotify'),
  },
  {
    id: 'tvAndVideo',
    name: 'TvAndVideo',
    icon: 'tvAndVideo',
    type: 'multimedia',
    link: routes.multimedia.details.url('tvAndVideo'),
  },
];

export function getAllMedia() {
  return multimedia;
}

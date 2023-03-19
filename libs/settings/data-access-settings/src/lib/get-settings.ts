import { routes } from '@folder-structure-example-by-domain/shared/utils/routes';

type TSettings = {
  id: string;
  name: string;
  link: string;
};

const availableSettings: TSettings[] = [
  {
    id: 'network',
    name: 'Network',
    link: routes.settings.details.url('network'),
  },
  {
    id: 'system',
    name: 'System',
    link: routes.settings.details.url('system'),
  },
];

export function getSettings() {
  return availableSettings;
}

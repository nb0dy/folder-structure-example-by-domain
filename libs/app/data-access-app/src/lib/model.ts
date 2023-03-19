export type TAppType = 'game' | 'multimedia';

export type TApp = {
  id: string;
  name: string;
  icon: string;
  type: TAppType;
  link: string;
};

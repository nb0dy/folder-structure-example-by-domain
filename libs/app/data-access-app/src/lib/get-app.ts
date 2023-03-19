import { getApps } from './get-apps';
import { TApp } from './model';

export function getApp(id: string | undefined): TApp | null {
  if (!id) {
    return null;
  }

  return getApps().find((app) => app.id === id) || null;
}

import { AppUiAppDetails } from '@folder-structure-example-by-domain/app/ui-app-details';
import { AppUiDashboard } from '@folder-structure-example-by-domain/app/ui-dashboard';
import { routes } from '@folder-structure-example-by-domain/shared/utils/routes';
import { Route, Routes } from 'react-router-dom';

export function AppFeatureAppHub() {
  return (
    <Routes>
      <Route path={routes.multimedia.path}>
        <Route
          path={routes.multimedia.details.path}
          element={<AppUiAppDetails />}
        />
        <Route index element={<AppUiDashboard type="multimedia" />} />
      </Route>
      <Route path={routes.game.path}>
        <Route
          path={routes.multimedia.details.path}
          element={<AppUiAppDetails />}
        />
        <Route index element={<AppUiDashboard type="game" />} />
      </Route>
      <Route index element={<AppUiDashboard type="game" />} />
    </Routes>
  );
}

export default AppFeatureAppHub;

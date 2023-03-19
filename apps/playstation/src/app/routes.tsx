import { FeatureAppDetails } from '@folder-structure-example-by-feature/feature/app-details';
import { FeatureDashboard } from '@folder-structure-example-by-feature/feature/dashboard';
import { FeatureQuickMenu } from '@folder-structure-example-by-feature/feature/quick-menu';
import { FeatureSettingsDetails } from '@folder-structure-example-by-feature/feature/settings/details';
import { FeatureSettingsList } from '@folder-structure-example-by-feature/feature/settings/list';
import { routes } from '@folder-structure-example-by-feature/shared/utils/routes';
import { Route, Routes } from 'react-router-dom';

const ApplicationRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={routes.dashboard.path}>
          <Route
            path={routes.game.path}
            element={<FeatureDashboard type="game" />}
          />
          <Route
            path={routes.multimedia.path}
            element={<FeatureDashboard type="multimedia" />}
          />
          <Route index element={<FeatureDashboard type="game" />} />
        </Route>
        <Route path={routes.multimedia.path}>
          <Route
            path={routes.multimedia.details.path}
            element={<FeatureAppDetails />}
          />
          <Route index element={<FeatureDashboard type="multimedia" />} />
        </Route>
        <Route path={routes.game.path}>
          <Route
            path={routes.multimedia.details.path}
            element={<FeatureAppDetails />}
          />
          <Route index element={<FeatureDashboard type="game" />} />
        </Route>
        <Route path={routes.settings.path}>
          <Route
            path={routes.settings.details.path}
            element={<FeatureSettingsDetails />}
          />
          <Route index element={<FeatureSettingsList />} />
        </Route>
        <Route path="*" element={<FeatureAppDetails />} />
      </Routes>
      <FeatureQuickMenu />
    </>
  );
};

export default ApplicationRoutes;

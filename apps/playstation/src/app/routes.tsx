import { AppFeatureAppHub } from '@folder-structure-example-by-domain/app/feature-app-hub';
import { QuickMenuFeatureQuickMenuDrawer } from '@folder-structure-example-by-domain/quick-menu/feature-quick-menu-drawer';
import { SettingsFeatureSettingsHub } from '@folder-structure-example-by-domain/settings/feature-settings-hub';
import { routes } from '@folder-structure-example-by-domain/shared/utils/routes';
import { Route, Routes } from 'react-router-dom';

const ApplicationRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={routes.dashboard.path} element={<AppFeatureAppHub />} />
        <Route
          path={routes.settings.path}
          element={<SettingsFeatureSettingsHub />}
        />
        <Route path="*" element={<AppFeatureAppHub />} />
      </Routes>
      <QuickMenuFeatureQuickMenuDrawer />
    </>
  );
};

export default ApplicationRoutes;

import { SettingsUiSettingsDetails } from '@folder-structure-example-by-domain/settings/ui-settings-details';
import { SettingsUiSettingsList } from '@folder-structure-example-by-domain/settings/ui-settings-list';
import { routes } from '@folder-structure-example-by-domain/shared/utils/routes';
import { Route, Routes } from 'react-router-dom';

export function SettingsFeatureSettingsHub() {
  return (
    <Routes>
      <Route
        path={routes.settings.details.path}
        element={<SettingsUiSettingsDetails />}
      />
      <Route index element={<SettingsUiSettingsList />} />
    </Routes>
  );
}

export default SettingsFeatureSettingsHub;

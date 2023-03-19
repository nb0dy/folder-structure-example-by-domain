import { render } from '@testing-library/react';

import SettingsFeatureSettingsList from './settings-feature-settings-list';

describe('SettingsFeatureSettingsList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SettingsFeatureSettingsList />);
    expect(baseElement).toBeTruthy();
  });
});

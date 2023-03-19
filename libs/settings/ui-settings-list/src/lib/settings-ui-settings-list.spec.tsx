import { render } from '@testing-library/react';

import SettingsUiSettingsList from './settings-ui-settings-list';

describe('SettingsUiSettingsList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SettingsUiSettingsList />);
    expect(baseElement).toBeTruthy();
  });
});

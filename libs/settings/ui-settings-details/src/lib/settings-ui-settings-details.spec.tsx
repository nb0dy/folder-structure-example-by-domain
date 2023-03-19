import { render } from '@testing-library/react';

import SettingsUiSettingsDetails from './settings-ui-settings-details';

describe('SettingsUiSettingsDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SettingsUiSettingsDetails />);
    expect(baseElement).toBeTruthy();
  });
});

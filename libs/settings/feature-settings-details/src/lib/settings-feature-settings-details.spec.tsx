import { render } from '@testing-library/react';

import SettingsFeatureSettingsDetails from './settings-feature-settings-details';

describe('SettingsFeatureSettingsDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SettingsFeatureSettingsDetails />);
    expect(baseElement).toBeTruthy();
  });
});

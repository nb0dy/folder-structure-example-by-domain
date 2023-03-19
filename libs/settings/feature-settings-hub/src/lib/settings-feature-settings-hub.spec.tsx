import { render } from '@testing-library/react';

import SettingsFeatureSettingsHub from './settings-feature-settings-hub';

describe('SettingsFeatureSettingsHub', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SettingsFeatureSettingsHub />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import AppFeatureDashboard from './app-feature-dashboard';

describe('AppFeatureDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppFeatureDashboard />);
    expect(baseElement).toBeTruthy();
  });
});

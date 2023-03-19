import { render } from '@testing-library/react';

import AppUiDashboard from './app-ui-dashboard';

describe('AppUiDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppUiDashboard />);
    expect(baseElement).toBeTruthy();
  });
});

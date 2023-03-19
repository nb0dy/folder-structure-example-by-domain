import { render } from '@testing-library/react';

import AppUiAppDetails from './app-ui-app-details';

describe('AppUiAppDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppUiAppDetails />);
    expect(baseElement).toBeTruthy();
  });
});

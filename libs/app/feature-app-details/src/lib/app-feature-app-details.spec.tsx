import { render } from '@testing-library/react';

import AppFeatureAppDetails from './app-feature-app-details';

describe('AppFeatureAppDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppFeatureAppDetails />);
    expect(baseElement).toBeTruthy();
  });
});

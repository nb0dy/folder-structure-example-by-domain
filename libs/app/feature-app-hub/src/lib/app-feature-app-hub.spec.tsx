import { render } from '@testing-library/react';

import AppFeatureAppHub from './app-feature-app-hub';

describe('AppFeatureAppHub', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppFeatureAppHub />);
    expect(baseElement).toBeTruthy();
  });
});

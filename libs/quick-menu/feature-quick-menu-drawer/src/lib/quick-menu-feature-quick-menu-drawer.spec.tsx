import { render } from '@testing-library/react';

import QuickMenuFeatureQuickMenuDrawer from './quick-menu-feature-quick-menu-drawer';

describe('QuickMenuFeatureQuickMenuDrawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QuickMenuFeatureQuickMenuDrawer />);
    expect(baseElement).toBeTruthy();
  });
});

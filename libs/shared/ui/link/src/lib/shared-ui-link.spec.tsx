import { render } from '@testing-library/react';

import SharedUiLink from './shared-ui-link';

describe('SharedUiLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUiLink />);
    expect(baseElement).toBeTruthy();
  });
});

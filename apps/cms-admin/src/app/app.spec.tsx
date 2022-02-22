import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import CmsAdmin from 'apps/cms-admin/src/app/cms-admin';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <CmsAdmin />
      </BrowserRouter>
    );

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(
      <BrowserRouter>
        <CmsAdmin />
      </BrowserRouter>
    );

    expect(getByText(/Welcome cms-admin/gi)).toBeTruthy();
  });
});

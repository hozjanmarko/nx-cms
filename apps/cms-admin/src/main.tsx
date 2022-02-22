import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import CmsAdmin from 'apps/cms-admin/src/app/cms-admin';
import {Reset} from "styled-reset";

ReactDOM.render(
  <StrictMode>
    <Reset/>
    <BrowserRouter>
      <CmsAdmin />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);

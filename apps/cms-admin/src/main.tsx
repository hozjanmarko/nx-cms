import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import CmsAdmin from 'apps/cms-admin/src/app/cms-admin';
import {Reset} from "styled-reset";
import {GlobalStyle} from "@nx-cms/shared/ui/global";

ReactDOM.render(
  <StrictMode>
    <Reset/>
    <GlobalStyle/>
    <BrowserRouter>
      <CmsAdmin />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);

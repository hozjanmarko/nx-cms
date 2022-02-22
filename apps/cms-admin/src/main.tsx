import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from 'apps/cms-admin/src/app';
import {Reset} from "styled-reset";
import {GlobalStyle} from "@nx-cms/shared/ui/global";

ReactDOM.render(
  <StrictMode>
    <Reset/>
    <GlobalStyle/>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);

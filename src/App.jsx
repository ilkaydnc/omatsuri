import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import AppContainer from './components/AppContainer/AppContainer';
import NotFound from './components/NotFound/NotFound';

import Index from './pages/index/Index';
import About from './pages/about/About';

import TriangleGenerator from './apps/triangle-generator/TriangleGenerator';
import LoremIpsum from './apps/lorem-ipsum/LoremIpsum';
import SvgCompressor from './apps/svg-compressor/SvgCompressor';
import SvgToJsx from './apps/svg-to-jsx/SvgToJsx';
import HtmlSymbols from './apps/html-symbols/HtmlSymbols';
import Base64Encoding from './apps/b64-encoding/B64Encoding';
import ColorShadesGenerator from './apps/color-shades-generator/ColorShadesGenerator';
import PageDividers from './apps/page-dividers/PageDividers';
import GradientsGenerator from './apps/gradients-generator/GradientsGenerator';
import FakeDataGenerator from './apps/fake-data-generator/FakeDataGenerator';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/about" exact component={About} />
        <Route>
          <AppContainer>
            <Switch>
              <Route path="/triangle-generator" exact component={TriangleGenerator} />
              <Route path="/lorem-ipsum" exact component={LoremIpsum} />
              <Route path="/svg-compressor" exact component={SvgCompressor} />
              <Route path="/svg-to-jsx" exact component={SvgToJsx} />
              <Route path="/html-symbols" exact component={HtmlSymbols} />
              <Route path="/b64-encoding" exact component={Base64Encoding} />
              <Route path="/color-shades-generator" exact component={ColorShadesGenerator} />
              <Route path="/page-dividers" exact component={PageDividers} />
              <Route path="/gradients-generator" exact component={GradientsGenerator} />
              <Route path="/fake-data-generator" exact component={FakeDataGenerator} />
              <Route component={NotFound} />
            </Switch>
          </AppContainer>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default hot(module)(App);

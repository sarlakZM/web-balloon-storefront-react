import * as React from "react";
import {act} from 'react-dom/test-utils';
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import  Header from './Header';
import { HeaderPropsTypes } from "../interfaces/types";

let container: any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const passParams: HeaderPropsTypes = {
  toggleDrawer: function () {} ,
  cartItemsCount: 0,
  title: 'Bulloon Store Front',
}


it('Header', function () {
  ReactDOM.render(
    <Router>
      <Header toggleDrawer={passParams.toggleDrawer} 
              cartItemsCount={passParams.cartItemsCount}
              title={passParams.title} 
      />
    </Router>, 
  container);
  const header: any= container.querySelector('h2');
  expect(header.textContent).toContain("Bulloon")

});



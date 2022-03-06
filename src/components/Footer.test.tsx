import * as React from "react";
import {act} from 'react-dom/test-utils';
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import  Footer from './Footer';
import { FooterPropsTypes } from "../interfaces/types";

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

const passParams: FooterPropsTypes = {
  title: "Footer",
  description: "Something here to give the footer a purpose!"
}


it('Footer', function () {
  ReactDOM.render(
    <Router>
       <Footer
            title={passParams.title}
            description={passParams.description}
          />
    </Router>, 
  container);
  const header: any= container.querySelector('p');
  expect(header.textContent).toContain("footer")
  
});



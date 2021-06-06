import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

//remove components from DOM after each test to prevent memory leaks and false test results
afterEach(cleanup);

//render About test
describe('About component', () => {
     //First Test
     it('renders', () => {
          render(<About />);
     });

     //Second test
     it('matches snapshot DOM node structure', () => {
          //render About
          const { asFragment } = render(<About />);
          expect(asFragment()).toMatchSnapshot();
     })
});
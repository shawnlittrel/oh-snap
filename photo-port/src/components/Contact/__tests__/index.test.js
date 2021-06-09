import React from 'react';
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from '..';

afterEach(cleanup);

describe("Contact component", () => {
     //baseline
     it('renders', () => {
          render(
               <Contact />
          );
     });

     //snapshot
     it('matches snapshot', () => {
          const { asFragment } = render(
               <Contact />
          );

          // assert value comparison
          expect(asFragment()).toMatchSnapshot();
     });

     //test h1 tag visibility
     it('properly renders h1 tag', () => {
          const { getByTestId } = render(<Contact />)
          expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
     });

     it('properly renders button', () => {
          const { getByTestId } = render(<Contact />)
          expect(getByTestId('button')).toHaveTextContent('Submit');
     });
});
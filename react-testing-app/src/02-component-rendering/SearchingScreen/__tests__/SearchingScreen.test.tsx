import { render, screen } from '@testing-library/react';
import { SearchingScreen } from '..';

describe('SearchingScreen', () => {
  test('should render search - by text', () => {
    render(<SearchingScreen />);

    //screen.debug();

    // implicit assertion
    // because getByText would throw error
    // if element wouldn't be there
    screen.getByText('Search:');

    // explicit assertion
    // recommended
    expect(screen.getByText('Search:')).toBeInTheDocument();
  });

  test('should render search - by role', () => {
    //The getByRole function is usually used to retrieve elements by aria-label attributes
    render(<SearchingScreen />);
    screen.getByRole('textbox');
  });

  /*
  What's the difference between getBy vs queryBy?
   getBy  returns an element or an error
   // fails
    expect(screen.getByText(/Searches for JavaScript/)).toBeNull();

    however if we can check that the element is not there, we dont want to throw a exception and fail the test inmmediately.
    In this case we can use query by:

     expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
   */

  test('should be null', () => {
    //The getByRole function is usually used to retrieve elements by aria-label attributes
    render(<SearchingScreen />);
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
  });
});

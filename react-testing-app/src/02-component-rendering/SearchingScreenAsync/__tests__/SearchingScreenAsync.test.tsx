import { act, fireEvent, render, screen } from '@testing-library/react';
import { SearchAsync, SearchingScreenAsync } from '..';

describe('SearchingScreen async', () => {
  test('should render search - by text', async () => {
    await act(async () => {
      render(<SearchingScreenAsync />);
    });
    screen.getByText('Search:');

    expect(screen.getByText('Search:')).toBeInTheDocument();
  });

  /**
   * When to use findBy?
   * The findBy search variant is used for asynchronous elements which will be there eventually.
   * In our component:
   * After its initial render, the App component fetches a user from a simulated API.
   * The API returns a promise which immediately resolves with a user object, and the component stores
   * the user from the promise in the component's state. The component updates and re-renders; and afterward
   * the conditional rendering should render "Signed in as" after the component update:
   */

  test('renders async', async () => {
    //1- Render first time
    render(<SearchingScreenAsync />);
    expect(screen.queryByText(/NOT-USER/)).toBeInTheDocument();
    // screen.debug();

    await act(async () => {
      //2- when the first render finish --> trigger react.effect([]) --> get user from fake api
      //this produce a change state
      expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
      // screen.debug();
    });
  });

  //3- at this point the user is in the useState

  test('testing events', async () => {
    render(<SearchingScreenAsync />);

    // wait for the user to resolve
    // needs only be used in our special case
    await screen.findByText(/Signed in as/);

    await act(async () => {
      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'JavaScript' },
      });
    });
  });

  //CALLBACK HANDLERS
  describe('Search', () => {
    test('calls the onChange callback handler', async () => {
      const onChange = jest.fn();

      render(
        <SearchAsync value='' onChange={onChange}>
          Search:
        </SearchAsync>
      );

      await act(async () => {
        fireEvent.change(screen.getByRole('textbox'), {
          target: { value: 'JavaScript' },
        });
      });

      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

  //https://www.robinwieruch.de/react-testing-library
});

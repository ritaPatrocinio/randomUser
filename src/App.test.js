// import dependencies
import React from 'react'
// import API mocking utilities from Mock Service Worker
import {rest} from 'msw'
import {setupServer} from 'msw/node'
// import react-testing methods
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
// the component to test
import { UserList } from './Components/UserList/UserList';

const server = setupServer(
    // capture "GET /greeting" requests
    rest.get('/users', (req, res, ctx) => {
      // respond using a mocked JSON body
      return res(ctx.json({data: [{name: 'Rita'}]}))
    }),
  )
  
  // establish API mocking before all tests
  beforeAll(() => server.listen())
  // reset any request handlers that are declared as a part of our tests
  // (i.e. for testing one-time error scenarios)
  afterEach(() => server.resetHandlers())
  // clean up once the tests are done
  afterAll(() => server.close())

  test('handlers server error', async () => {
    server.use(
      // override the initial "GET /greeting" request handler
      // to return a 500 Server Error
      rest.get('/users', (req, res, ctx) => {
        return res(ctx.status(500))
      }),
    )
    // ...
  })

test('data state has 10 more items after clicking load more button', () => {

    // render(<App />);
    render(<UserList data="/users" />);
    fireEvent.click(screen.getByText('Load More'));

    await waitFor(() =>
    // getByRole throws an error if it cannot find an element
    screen.getByRole('heading'),
    );
    expect(screen.getByRole('button')).not.toBeDisabled();

   
    expect(screen.find('UserList').prop('data').length).toEqual(10);
    expect(screen.find('UserList').prop('data').length).toEqual(20);
  });
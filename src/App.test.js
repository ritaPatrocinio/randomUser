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
import App from './App';


const server = setupServer(
    // capture "GET /greeting" requests
    rest.get('https://randomuser.me/api/', (req, res, ctx) => {
      // respond using a mocked JSON body
      return res(ctx.json({"results":[{"gender":"male","name":{"title":"Monsieur","first":"Arnaud","last":"Sanchez"},"location":{"street":{"number":1842,"name":"Place de L'Abbé-Basset"},"city":"Siviriez","state":"Ticino","country":"Switzerland","postcode":6185,"coordinates":{"latitude":"-53.5211","longitude":"-14.5155"},"timezone":{"offset":"+2:00","description":"Kaliningrad, South Africa"}},"email":"arnaud.sanchez@example.com","login":{"uuid":"1f823dce-351c-4bb6-9250-399e98a45158","username":"greenbird306","password":"bigbutt","salt":"oueYUSyJ","md5":"9acd877682f4b50f65df158513b14b91","sha1":"f8dd4ef2585f8adb9b932b7def1f78df14563d8f","sha256":"4955422907e5d6f7596fa5a90858b01a9d67503a2da3e24468b91be0152bc701"},"dob":{"date":"1976-05-16T21:22:08.245Z","age":46},"registered":{"date":"2012-06-03T09:38:31.599Z","age":10},"phone":"077 623 13 50","cell":"078 624 40 93","id":{"name":"AVS","value":"756.7518.8501.56"},"picture":{"large":"https://randomuser.me/api/portraits/men/87.jpg","medium":"https://randomuser.me/api/portraits/med/men/87.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/87.jpg"},"nat":"CH"}],"info":{"seed":"147569e62f6cb073","results":1,"page":1,"version":"1.3"}}))
    }),
  )
  
  // establish API mocking before all tests
  beforeAll(() => server.listen())
  // reset any request handlers that are declared as a part of our tests
  // (i.e. for testing one-time error scenarios)
  afterEach(() => server.resetHandlers())
  // clean up once the tests are done
  afterAll(() => server.close())

test('data state has 10 more items after clicking load more button', async () => {
    render(<App/>);
    
    // expect(screen.find('UserList').prop('data').length).toEqual(10);

    
      const items = await screen.findByText('Arnaud Sanchez');
      expect(items).toBeVisible()
      
      fireEvent.click(screen.getByText('Load More'));    

      const itemsPostClick = await screen.findAllByText('Arnaud Sanchez');
      console.log('itemsPost:', itemsPostClick);
      expect(itemsPostClick).toHaveLength(2);
    
    // const items = await screen.findAllByText('Arnaud')
     
  });
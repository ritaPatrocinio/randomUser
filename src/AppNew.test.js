// import React from 'react';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import { shallow, configure, mount} from 'enzyme';
// import App from './App';
// import { UserList } from './Components/UserList/UserList';

// configure({adapter: new Adapter()});
// test('data state has 10 more items after clicking load more button', () => {
//   // Render a checkbox with label in the document
//   //const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);
//   const app = shallow(<App />);

//   // expect(app.dive().state().data.length).toEqual(10); 
//   // expect(app.find('UserList').prop('data').length).toEqual(10);
//   app.find('button').simulate('click');
//   expect(app.find('UserList').prop('data').length).toEqual(20);

 

//   // expect(app.dive().state().data.length).toEqual(20);
// });


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Accordion } from 'react-bootstrap';

import store from './lib/redux';
import InboxScreen from './components/taskbox/InboxScreen';
import AccordionItem from './components/displayResults/AccordionItemWrapper';
import NavBar from './components/navigation/NavBar';

import './index.css';

const navBarItems = [
  { id: '1', location: '/', navText: 'Inbox' },
  { id: '2', location: '/displayResults', navText: 'Display Results' },
];

const props = {
  eventKey: '1',
  displayString: 'Accordion',
  items: [
    {
      displayString: 'Item 1',
      id: '1'
    },
    {
      displayString: 'Item 2',
      id: '2'
    }
  ]
};

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <NavBar navBarItems={navBarItems} />
          <Switch>
            <Route path="/displayResults">
            <Accordion>
              <AccordionItem {...props}/>
              </Accordion>
            </Route>
            <Route path='/'>
              <InboxScreen />
            </Route>
          </Switch>
      </Provider>
    </BrowserRouter>
  );
}
export default App;

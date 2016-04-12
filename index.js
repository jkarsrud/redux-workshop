import 'babel-polyfill';
import { createStore } from 'redux';
import todoApp from './reducers';

import * as actions from './actions';

const store = createStore(todoApp);

// Add the store to window to allow dispatching from the browser console
//
// window.dispatch(action)
window.store = store;

// Add the actions to the window.actions object to allow for running action
// creators in the browser console. Even though we should just get the tests
// working
//
// window.dispatch(window.actions.actionCreatorName(args))
for(var action in actions) {
  window.actions = window.actions || {};
  window.actions[action] = actions[action];
}

const root = document.getElementById('root');

const output = (state) => {
  const template = `<pre>${JSON.stringify(state, null, '\t')}</pre>`;
  root.innerHTML = template;
};

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
  output(store.getState());
});

output(store.getState());

import { expect } from 'chai'
import deepFreeze from 'deep-freeze';
import todos from '../../reducers/todos'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      todos(undefined, {})
    ).to.deep.equal([])
  })

  it('should handle ADD_TODO', () => {
    const initialState = [];
    const firstAction = {
      type: 'ADD_TODO',
      text: 'Run the tests',
      id: 0
    };

    // We deepDreeze to make sure we don't mutate the previous state or action
    // arguments
    deepFreeze(initialState);
    deepFreeze(firstAction);

    expect(
      todos(initialState, firstAction)
    ).to.deep.equal([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }
    ]);

    const secondState = [
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }
    ];

    const secondAction = {
      type: 'ADD_TODO',
      text: 'Use Redux',
      id: 1
    };

    deepFreeze(secondState);
    deepFreeze(secondAction);

    expect(
      todos(secondState, secondAction)
    ).to.deep.equal([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }, {
        text: 'Use Redux',
        completed: false,
        id: 1
      }
    ])

    const thirdState = [
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }, {
        text: 'Use Redux',
        completed: false,
        id: 1
      }
    ];

    const thirdAction = {
      type: 'ADD_TODO',
      text: 'Fix the tests',
      id: 2
    };

    deepFreeze(thirdState);
    deepFreeze(thirdAction);

    expect(
      todos(thirdState, thirdAction)
    ).to.deep.equal([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }, {
        text: 'Use Redux',
        completed: false,
        id: 1
      }, {
        text: 'Fix the tests',
        completed: false,
        id: 2
      }
    ])
  })

  it('should handle TOGGLE_TODO', () => {
    const initialState = [
      {
        text: 'Run the tests',
        completed: false,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ];

    const action = {
      type: 'TOGGLE_TODO',
      id: 1
    };

    deepFreeze(initialState);
    deepFreeze(action);

    expect(
      todos(initialState, action)
    ).to.deep.equal([
      {
        text: 'Run the tests',
        completed: true,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
  })

})

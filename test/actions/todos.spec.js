import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import * as actions from '../../actions';

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(deepFreeze(actions.addTodo('Use Redux'))).to.deep.equal({
      type: 'ADD_TODO',
      id: 0,
      text: 'Use Redux'
    })
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(deepFreeze(actions.setVisibilityFilter('active'))).to.deep.equal({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  })

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(deepFreeze(actions.toggleTodo(1))).to.deep.equal({
      type: 'TOGGLE_TODO',
      id: 1
    })
  })
})

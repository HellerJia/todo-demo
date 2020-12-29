import { ADD, RMV, CHANGE_STATE } from './action';
import { DataModel, Todo } from './dataMod';
import * as R from 'ramda';
import { createStore } from 'redux';

const defaultState: DataModel = {
  todoList: [],
};

const reducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case ADD:
      const e: Todo = {
        id: state.todoList.length,
        value: action.value,
        completed: action.completed,
      };
      return R.evolve({
        todoList: R.append(e),
      }, state) as DataModel;

    case CHANGE_STATE:
      const complete = (e: Todo) => e.id === action.id ? { ...e, completed: !e.completed } : e;
      return R.evolve({
        todoList: R.map(complete),
      }, state);

    case RMV:
      const setId = (v: any, idx: number) => { return { ...v, id: idx }; };
      return R.evolve({
        todoList: R.compose(R.addIndex(R.map)(setId), R.remove(action.id, 1)),
      }, state);

    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;

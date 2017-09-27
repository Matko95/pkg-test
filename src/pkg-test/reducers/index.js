import { combineReducers } from 'redux';

const appReducer = combineReducers({

});

/*   Clears the store state    */
const rootReducer = (state, action) => {
  if (action.type === 'CLEAR_STORE') {
    return appReducer({}, action);
  }

  return appReducer(state, action);
};

export default rootReducer;

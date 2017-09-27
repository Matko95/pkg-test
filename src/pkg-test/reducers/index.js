import { combineReducers } from 'redux';
import router from './router';

const appReducer = combineReducers({
  router,
});

/*   Clears the store state    */
const rootReducer = (state, action) => {
  if (action.type === 'CLEAR_STORE') {
    return appReducer({}, action);
  }

  return appReducer(state, action);
};

export default rootReducer;

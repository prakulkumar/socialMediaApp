import { actions } from '../actions/actions.js';

const reducer = (posts = [], action) => {
  switch (action.type) {
    case actions.fetchAll:
      return action.payload;
    case actions.create:
      return posts;
    default:
      return posts;
  }
};

export default reducer;

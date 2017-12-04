import { queryCurrent } from '../services/users';

export default {
  namespace: 'auth',

  state: {
    currentUser: {},
  },

  effects: {
    *fetchCurrentUser(_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentUser',
        payload: response
      });
    }
  },

  reducers: {
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload
      };
    }
  },
};

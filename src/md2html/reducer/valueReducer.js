import actionType from '../constant/actionType';

const valueReducer = (state, action) => {
  if (action.type === actionType.CHANGE) {
    return {
      value: action.payload.value,
    };
  }
  return state;
};

export default valueReducer;

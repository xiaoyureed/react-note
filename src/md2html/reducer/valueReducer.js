import actionType from '../constant/actionType';

/**
 * 逻辑处理, accept old [state] & action, return new [state]
 * @param {*} state
 * @param {*} action
 */
const valueReducer = (state, action) => {
  if (action.type === actionType.CHANGE) {
    return {
      value: action.payload.value,
      html: state.html,
    };
  }
  if (action.type === actionType.CLICK) {
    return {
      value: state.value,
      html: action.payload.html,
    };
  }
  return state;
};

export default valueReducer;

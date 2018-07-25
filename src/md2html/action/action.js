import actionType from '../constant/actionType';

const action = {
  changeContentAction: value => ({
    type: actionType.CHANGE,
    payload: {
      value,
    },
  }),
  clickButtonAction: html => ({
    type: actionType.CLICK,
    payload: {
      html,
    },
  }),
};

export default action;

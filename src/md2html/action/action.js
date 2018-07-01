import actionType from '../constant/actionType';

const action = {
  changeContentAction: value => ({
    type: actionType.CHANGE,
    payload: {
      value,
    },
  }),
};

export default action;

const actionType = {
  CREATE_TODO: 'CREATE_TODO',
  DELETE_TODO: 'DELETE_TODO',
  CHANGE_TEXT: 'CHANGE_TEXT',
};

export default actionType;

/*
或是可以考虑使用 keyMirror，方便产生与 key 相同的常数
import keyMirror from 'fbjs/lib/keyMirror';

export default keyMirror({
    ADD_ITEM: null,
    DELETE_ITEM: null,
    DELETE_ALL: null,
    FILTER_ITEM: null
});
*/

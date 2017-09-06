export default function(state = null, action) {
  console.log('ModalReducer-action= ');
  console.log(action);
  if (action.type === 'TRIGGER_NEW_VAL_MODAL') {
    console.log('Caught trigger new val modal action...');
    return {
      isActive: true,
      activeModal: action.payload.type,
      modalContext: action.payload.context
    };
  }

// MODAL CANCELLATIONS
  if (action.type === 'ADD_NEW_FOLDER' ||
      action.type === 'ADD_NEW_DRIVER' ||
      action.type === 'CANCEL_MODAL') {
    return {isActive: false};
  }

  return {isActive: false};
}

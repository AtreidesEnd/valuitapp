export default function(state = null, action) {

  var modalState = {
    isActive: true,
    activeModal: 'NewFolder',
    modalContext: {},
  };

  if (action.type === 'TRIGGER_NEW_FOLDER_MODAL') {
    return {
      isActive: true,
      activeModal: 'NewFolder',
      modalContext: action.payload
    };
  }

  if (action.type === 'TRIGGER_NEW_DRIVER_MODAL') {
    return {
      isActive: true,
      activeModal: 'NewDriver',
      modalContext: action.payload
    };
  }

// MODAL CANCELLATIONS
  if (action.type === 'ADD_NEW_FOLDER' ||
      action.type === 'ADD_NEW_DRIVER' ||
      action.type === 'CANCEL_MODAL') {
    return {isActive: false};
  }

  return modalState;
}
